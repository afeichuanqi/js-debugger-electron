import { ipcMain } from 'electron';
import axios from 'axios';
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
