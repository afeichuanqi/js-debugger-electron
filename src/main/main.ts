import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import * as mainRemote from '@electron/remote/main';
import './main.api.debugger';
import './main.api.post';

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
  // const extensions = [];

  return installer.default(forceDownload).catch(console.log);
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
}
const createWindow = async () => {
  // if (isDebug) {
  //   await installExtensions();
  // }

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
      // mainWindow?.show();
    }
  });
  // load加载完毕
  ipcMain.on('loadDone', () => {
    mainWindow?.show();
    // mainWindow.webContents.openDevTools();
    // eslint-disable-next-line no-unused-expressions
    appLalunchWindow && appLalunchWindow.destroy();
  });
  mainWindow.webContents.on('did-finish-load', () => {});
  mainWindow.on('close', () => {
    appLalunchWindow?.destroy();
    subRenderWindow?.destroy();
    mainWindow?.destroy();
  });
  ipcMain.on('createSubRender', () => {
    createSubRender();
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
  // eslint-disable-next-line promise/always-return
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
