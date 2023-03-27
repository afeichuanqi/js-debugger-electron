const express = require('express');
const bodyParser = require('body-parser');
const Db = require('../db')
const {
  injectHook,
} = require('../components/global-assign-hook-component/core/inject-hook');

const app = express();

app.use(
  bodyParser.raw({
    verify(req, res, buf, encoding) {
      if (buf && buf.length) {
        req.rawBody = buf.toString('UTF-8');
      }
    },
    type() {
      return true;
    },
    limit: '1000mb',
  })
);
app.use(bodyParser.json({limit: 1000000}));  //最大上传大小不超过50mb
app.use(bodyParser.urlencoded({
  limit: 1000000,
  extended: true
}));
// 将传过来的js代码注入hook
app.post('/hook-js-code', function (request, response) {
  const jsCode = decodeURIComponent(request.body.toString());
  let newJsCode = jsCode;
  try {
    newJsCode = injectHook(jsCode);
  } catch (e) {

    console.error(e);
  }
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.send(encodeURIComponent(newJsCode));
  response.end();
});

app.post('/updateData', function (request, response) {
  const body = request.body.toString();
  try {
    Db.stringPutToDB(body);
    // const bodyData = JSON.parse(body);
  } catch (error) {
    console.error(e);
  }
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.send('');
  response.end();
});
// 以后如果能够和页面上双向通信，上报各种数据到这里，就能够实现功能更强的分析之类的

// const server = app.listen(10010, function () {
//   console.log('启动成功');
// });
module.exports = app;
