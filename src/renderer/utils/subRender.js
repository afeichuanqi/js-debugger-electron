const remote = require('@electron/remote');
const AnyProxy = require('anyproxy');
const globalAssignHookComponent = require('./components/global-assign-hook-component/core/global-assign-hook-component-main');

const anyProxyUtils = AnyProxy.utils;
const createProxy = (port) => {
  const options = {
    port,
    rule: {
      // 某些情况下载请求发送之前就替换会失败，所以只替换响应的body比较稳妥
      // eslint-disable-next-line require-yield
      *beforeSendResponse(requestDetail, responseDetail) {
        // handleResWindow.webContents.send('update-counter', {
        //   requestDetail,
        //   responseDetail,
        // });
        // 发送通知给子进程
        globalAssignHookComponent.process(requestDetail, responseDetail);
        // let test = 0;
        // global.eventEmitter.emit(
        //   'SubRenderHandle',
        //   requestDetail,
        //   responseDetail,
        //   (_requestDetail, _responseDetail, _test) => {
        //     requestDetail = _requestDetail;
        //     responseDetail = _responseDetail;
        //     console.log(test);
        //     test = _test;
        //   }
        // );
        // yield new Promise<void>((resolve) => {
        //   const inter = setInterval(() => {
        //     if (test === 1) {
        //       resolve(0);
        //       clearInterval(inter);
        //     }
        //   }, 100);
        // });
        // // 发送通知
        // global.eventEmitter.emit(
        //   'AppFetchUrl',
        //   `${responseDetail.response.header.Server}`,
        //   `${requestDetail.url}`
        // );
        // globalAssignHookComponent.process(requestDetail, responseDetail);
      },
    },
    webInterface: {
      enable: false,
    },
    throttle: 10000,
    forceProxyHttps: true,
    wsIntercept: false, // 不开启websocket代理
    silent: false,
  };
  const proxyServer = new AnyProxy.ProxyServer(options);

  proxyServer.on('ready', () => {
    /* */
  });
  proxyServer.on('error', (e) => {
    console.log(e, 'e');
    /* */
  });
  proxyServer.start();
  return proxyServer;
};
remote
  .getGlobal('eventEmitter')
  .emit('SubRenderHandleInitDone', anyProxyUtils, createProxy);
console.log('已发送');
// remote
// .getGlobal('proxyServer') = {
//   anyProxyUtils,
//   createProxy
// }
// module.exports = {
//   // 某些情况下载请求发送之前就替换会失败，所以只替换响应的body比较稳妥
//   // eslint-disable-next-line require-yield
//   *beforeSendResponse(requestDetail: any, responseDetail: any) {
//     global.eventEmitter.emit(
//       'AppFetchUrl',
//       `${responseDetail.response.header.Server}`,
//       `${requestDetail.url}`
//     );
//     globalAssignHookComponent.process(requestDetail, responseDetail);
//   },
// };
