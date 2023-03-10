/* eslint-disable no-underscore-dangle */
import { createContainer, useContainer } from '@/utils/unstated-next';
import * as remote from '@electron/remote';
import { useState } from 'react';

// const esprima = remote.require('esprima');
const Post = () => {
  // const [allFuntions, setAllFuntions] = useState<any[]>([]);
  // const getAllFunctions = (jsText) => {
  //   const functionArg = esprima.parseScript(jsText);
  //   const allFunctions = [];
  //   functionArg.body.forEach((el) => {
  //     const params = [];
  //     if (el.type === 'FunctionDeclaration') {
  //       el.params.forEach((arg) => {
  //         params.push(arg.name);
  //       });
  //       allFunctions.push(`${el.id.name}(${params.join(',')})`);
  //     }
  //     if (el.declarations && el.declarations.length > 0) {
  //       const variableDeclarator = el.declarations[0];
  //       if (
  //         variableDeclarator.type === 'FunctionDeclaration' &&
  //         variableDeclarator.init.params
  //       ) {
  //         variableDeclarator.init.params.forEach((arg) => {
  //           params.push(arg.name);
  //         });
  //         allFunctions.push(
  //           `${variableDeclarator.id.name}(${params.join(',')})`
  //         );
  //       }
  //       // 箭头函数
  //       if (variableDeclarator.type === 'VariableDeclarator') {
  //         if (variableDeclarator.init.type === 'ArrowFunctionExpression') {
  //           variableDeclarator.init.params.forEach((arg) => {
  //             params.push(arg.name);
  //           });
  //           allFunctions.push(
  //             `${variableDeclarator.id.name}(${params.join(',')})`
  //           );
  //         }
  //         if (variableDeclarator.init.type === 'FunctionExpression') {
  //           variableDeclarator.init.params.forEach((arg) => {
  //             params.push(arg.name);
  //           });
  //           allFunctions.push(
  //             `${variableDeclarator.id.name}(${params.join(',')})`
  //           );
  //         }
  //       }
  //     }
  //   });
  //   setAllFuntions(allFunctions);
  //   return allFunctions;
  // };
  return {};
};

export const DebuggerContainer = createContainer(Post);

export function useDebugger() {
  return useContainer(DebuggerContainer);
}
