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
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

mainRemote.initialize();
class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  event.reply('ipc-example', msgTemplate('pong'));
});

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

function createSubRender() {
  // 创建进程
  const handleResWindow = new BrowserWindow({
    show: false,
    width: 0,
    height: 0,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainRemote.enable(handleResWindow.webContents);
  const subRender = app.isPackaged
    ? path.join(__dirname, '../renderer/subRender.html')
    : path.join(__dirname, '../renderer/utils/subRender.html');
  handleResWindow.loadFile(subRender);
  // handleResWindow.webContents.openDevTools();
}

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1124,
    height: 728,
    frame: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
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
      mainWindow.show();
    }
  });
  mainWindow.webContents.on('did-finish-load', () => {
    createSubRender();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

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
    // TODO:绑定变量监听事件
    // const proxyServer = require('../renderer/utils/proxy-server');

    // global.proxyServer = proxyServer;
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

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
      console.log(res.data);
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
      console.log(e);
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
