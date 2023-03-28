const remote = require('@electron/remote');
const AnyProxy = require('anyproxy');
const path = require('path');
const app = require('./api-server/api-server');
const db = require('./db')
const globalAssignHookComponent = require('./components/global-assign-hook-component/core/global-assign-hook-component-main');

const anyProxyUtils = AnyProxy.utils;
let proxyServer = null;
let serverApi = null;
let onDbFieldLenInter = null;
const createProxy = (port) => {
  const options = {
    port,
    rule: {
      // 某些情况下载请求发送之前就替换会失败，所以只替换响应的body比较稳妥
      // eslint-disable-next-line require-yield
      *beforeSendResponse(requestDetail, responseDetail) {
        globalAssignHookComponent.process(requestDetail, responseDetail);
        remote
          .getGlobal('eventEmitter')
          .emit(
            'AppFetchUrl',
            `${requestDetail.requestOptions.hostname}`,
            `${requestDetail.url}`
          );
      },
    },
    webInterface: {
      enable: false,
    },
    throttle: 10000,
    forceProxyHttps: true,
    wsIntercept: false, // 不开启websocket代理
    silent: true,
  };
  proxyServer = new AnyProxy.ProxyServer(options);

  proxyServer.on('ready', () => {
    /* */
  });
  proxyServer.on('error', (e) => {
    console.log(e, 'e');
    /* */
  });
  proxyServer.start();
  serverApi = app.listen(10010, function () {
    remote
      .getGlobal('eventEmitter')
      .emit('AnyProxyLog', `本地启动成功`, `监听10010`);
    // console.log('启动成功');
  });
};
const downLoadCert = (callBack) => {
  if (!anyProxyUtils.certMgr.ifRootCAFileExists()) {
    anyProxyUtils.certMgr.generateRootCA((error, keyPath) => {
      if (!error) {
        const certDir = path.dirname(keyPath);
        callBack(
          JSON.stringify({
            isExists: true,
            isError: false,
            certDir,
          })
        );
        return;
      }
      callBack(
        JSON.stringify({
          isExists: false,
          isError: true,
          text: JSON.parse(error),
        })
      );
    });
  } else {
    const rootPath = anyProxyUtils.certMgr.getRootDirPath('certificates');
    callBack(
      JSON.stringify({
        isError: false,
        isExists: true,
        certDir: rootPath,
      })
    );
  }
};
const closeProxy = () => {
  proxyServer && proxyServer.close();
  serverApi.close();
  clearInterval(onDbFieldLenInter);
};
const Dbsearch = (text,pageData, callBack) => {
  const result = db.search(text, pageData);
  callBack(result);
}
const DbonFieldLen = (callBack) => {
  onDbFieldLenInter = setInterval(() => {
    callBack(db.getFieldsLen())
  }, 2000)
}
const DbClear = (callBack) => {
  db.clear();
  callBack(db.getFieldsLen())
}
remote
  .getGlobal('eventEmitter')
  .emit('SubRenderHandleInitDone', downLoadCert, createProxy, closeProxy);
remote
  .getGlobal('eventEmitter')
  .emit('SubRenderActionDb', Dbsearch, DbonFieldLen, DbClear);
