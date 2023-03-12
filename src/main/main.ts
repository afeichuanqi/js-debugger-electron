/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import axios from 'axios';
import log from 'electron-log';
import * as mainRemote from '@electron/remote/main';
// eslint-disable-next-line import/no-duplicates
import { VM as NodeVM } from 'vm2';
import { parseScript } from 'esprima';

import { resolveHtmlPath } from './util';

// require('concurrently');
// console.log(concurrently);
mainRemote.initialize();
// UglifyJS.uglify
class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};
// 使remote能直接在渲染进程中使用
const events = require('events');

const eventEmitter = new events.EventEmitter();

// TODO:全局绑定一个emmit事件
global.eventEmitter = eventEmitter;
let subRenderWindow: BrowserWindow | null = null;
const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../src/renderer/assets');

const getAssetPath = (...paths: string[]): string => {
  return path.join(RESOURCES_PATH, ...paths);
};
function createSubRender() {
  // 创建进程
  subRenderWindow = new BrowserWindow({
    show: false,
    width: 0,
    height: 0,
    frame: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainRemote.enable(subRenderWindow.webContents);
  const subRender = app.isPackaged
    ? path.join(__dirname, '../renderer/subRender.html')
    : path.join(__dirname, '../renderer/utils/subRender.html');
  subRenderWindow.loadFile(subRender);
  subRenderWindow.webContents.openDevTools();
}
let appLalunchWindow: BrowserWindow | null = null;
function createAppLalunchRender() {
  // 创建进程
  appLalunchWindow = new BrowserWindow({
    height: 400,
    useContentSize: true,
    width: 800,
    show: true,
    transparent: false,
    maximizable: false,
    frame: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  const subRender = app.isPackaged
    ? path.join(__dirname, '../renderer/appLaunchRender.html')
    : path.join(__dirname, '../renderer/utils/appLaunchRender.html');
  appLalunchWindow.loadFile(subRender);
  // appLalunchWindow.webContents.openDevTools();
}
const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  console.log(getAssetPath('icon.png'));
  mainWindow = new BrowserWindow({
    show: false,
    width: 1124,
    height: 728,
    minWidth: 700,
    minHeight: 500,
    frame: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
  });
  // 开启remote
  mainRemote.enable(mainWindow.webContents);
  mainWindow.loadURL(resolveHtmlPath('index.html'));
  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      // mainWindow.webContents.openDevTools();
      // eslint-disable-next-line no-unused-expressions
      mainWindow?.show();
    }
  });
  // load加载完毕
  ipcMain.on('loadDone', () => {
    mainWindow?.show();
    // eslint-disable-next-line no-unused-expressions
    appLalunchWindow && appLalunchWindow.destroy();
  });
  mainWindow.webContents.on('did-finish-load', () => {
    createSubRender();
  });
  mainWindow.on('close', () => {
    appLalunchWindow?.destroy();
    subRenderWindow?.destroy();
    mainWindow?.destroy();
    // createSubRender();
  });
  // const menuBuilder = new MenuBuilder(mainWindow);
  // menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createAppLalunchRender();
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
// POST页面专用
ipcMain.on('sendPost', function (event, arg) {
  let resObj = {
    isError: false,
    response: {},
    error: '',
  };
  // eslint-disable-next-line promise/catch-or-return
  axios(arg)
    // eslint-disable-next-line promise/always-return
    .then((res) => {
      resObj = {
        ...resObj,
        response: JSON.stringify({
          data: res.data,
          headers: res.headers,
        }),
      };
      event.sender.send('sendPost-done', resObj);
    })
    .catch((e: any) => {
      resObj = {
        ...resObj,
        isError: true,
        error: JSON.stringify(e),
      };
      event.sender.send('sendPost-done', resObj);
    })
    // eslint-disable-next-line no-unused-vars
    .finally(() => {});
});
// debugger页面专用
const getAllFunctions = (jsText) => {
  const functionArg = parseScript(jsText);
  const allFunctions = [];
  functionArg.body.forEach((el) => {
    const params = [];
    if (el.type === 'FunctionDeclaration') {
      el.params.forEach((arg) => {
        params.push(arg.name);
      });
      allFunctions.push(`${el.id.name}(${params.join(',')})`);
    }
    if (el.declarations && el.declarations.length > 0) {
      const variableDeclarator = el.declarations[0];
      if (
        variableDeclarator.type === 'FunctionDeclaration' &&
        variableDeclarator.init.params
      ) {
        variableDeclarator.init.params.forEach((arg) => {
          params.push(arg.name);
        });
        allFunctions.push(`${variableDeclarator.id.name}(${params.join(',')})`);
      }
      // 箭头函数
      if (
        variableDeclarator.type === 'VariableDeclarator' &&
        variableDeclarator.init
      ) {
        if (variableDeclarator.init.type === 'ArrowFunctionExpression') {
          variableDeclarator.init.params.forEach((arg) => {
            params.push(arg.name);
          });
          allFunctions.push(
            `${variableDeclarator.id.name}(${params.join(',')})`
          );
        }
        if (variableDeclarator.init.type === 'FunctionExpression') {
          variableDeclarator.init.params.forEach((arg) => {
            params.push(arg.name);
          });
          allFunctions.push(
            `${variableDeclarator.id.name}(${params.join(',')})`
          );
        }
      }
    }
  });
  return allFunctions;
};
const vmConfig = {
  sandbox: {},
};
let vm = new NodeVM(vmConfig);
const handleErrorText = (err) => {
  const errArr = err.stack.split('\n');
  const errText = errArr.filter((_, index: number) => index < 4);
  return `出错了:${err.toStirng} \n${errText.toString()}`;
};
const modulePath = {
  path: require('path'),
  util: require('util'),
  url: require('url'),
  fs: require('fs'),
  http: require('http'),
  axios,
};
ipcMain.on('jsTextCompiler', function (event, arg, modules) {
  try {
    vmConfig.sandbox = {};
    if (modules.some((item: string) => item === 'console')) {
      vmConfig.sandbox.console = {
        log: (arg) => {
          let result;

          try {
            result = JSON.stringify(arg);
          } catch (error) {
            result = arg.toString();
          }
          setTimeout(() => {
            mainWindow?.webContents.send('jsTextRunConsoleLog', {
              isError: false,
              result,
            });
          }, 100);
          // ipcMain.send
        },
      };
    }
    // eslint-disable-next-line array-callback-return
    modules.map((item: any) => {
      if (item !== 'console') {
        vmConfig.sandbox[item] = modulePath[item];
      }
    });
    vm = new NodeVM(vmConfig);
    const result = vm.run(arg);
    let _result;
    try {
      const allFuntions = getAllFunctions(arg);
      event.sender.send('jsTextCompilerAllFuntionResule', allFuntions);
    } catch (error) {
      event.sender.send('jsTextCompilerAllFuntionResule', [
        `getFunction error${handleErrorText(error)}`,
      ]);
    }
    try {
      _result = JSON.stringify(result);
    } catch (error) {
      _result = result.toString();
    }
    event.sender.send('jsTextCompilerResult', {
      isError: false,
      result: _result,
    });
  } catch (error) {
    event.sender.send('jsTextCompilerResult', {
      isError: true,
      result: handleErrorText(error),
    });
  }
});

ipcMain.on('jsTextRunCode', function (event, arg) {
  try {
    const result = vm.run(arg);
    let _result;
    try {
      _result = JSON.stringify(result);
    } catch (error) {
      _result = result.toString();
    }
    event.sender.send('jsTextRunCodeResult', {
      isError: false,
      result: _result,
    });
  } catch (error) {
    event.sender.send('jsTextRunCodeResult', {
      isError: false,
      result: handleErrorText(error),
    });
  }
});
