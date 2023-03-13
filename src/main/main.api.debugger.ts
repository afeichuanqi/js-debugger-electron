import { ipcMain } from 'electron';
import axios from 'axios';
import { VM as NodeVM } from 'vm2';
import { parseScript } from 'esprima';
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
  // eslint-disable-next-line global-require
  path: require('path'),
  // eslint-disable-next-line global-require
  util: require('util'),
  // eslint-disable-next-line global-require
  url: require('url'),
  // eslint-disable-next-line global-require
  fs: require('fs'),
  // eslint-disable-next-line global-require
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
            event.sender.send('jsTextRunConsoleLog', {
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
