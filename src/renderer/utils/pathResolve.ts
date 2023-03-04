const path = require('path');
const { app } = require('@electron/remote');

console.log(process.resourcesPath, 'process.resourcesPath');
const RESOURCES_PATH = path.join('../renderer/utils');
// : '../renderer/utils/';
const getUtilsPath = (...paths: string[]): string => {
  return path.join(RESOURCES_PATH, ...paths);
};
export { getUtilsPath };
