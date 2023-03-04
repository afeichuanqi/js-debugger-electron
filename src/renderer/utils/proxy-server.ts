const AnyProxy = require('anyproxy');
const rule = require('./rules');

const anyProxyUtils = AnyProxy.utils;
const createProxy = (port: number) => {
  const options = {
    port,
    rule,
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

// proxyServer.start();
// eslint-disable-next-line import/prefer-default-export
export { createProxy, anyProxyUtils };
