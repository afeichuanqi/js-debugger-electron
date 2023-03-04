import * as remote from '@electron/remote';

const mouseConstructor = window.require('win-mouse');

export default (ele) => {
  try {
    const element = document.getElementById(ele);
    let offset = null;
    let win = null;
    let size = null;
    const mouse = mouseConstructor();

    const onmousedown = function (e) {
      win = remote.getCurrentWindow();
      offset = [e.clientX, e.clientY];
      size = win.getSize();
    };

    element.addEventListener('mousedown', onmousedown);

    mouse.on('left-drag', function (x, y) {
      if (!offset) return;

      const screenScale = remote.screen.getDisplayNearestPoint({
        x,
        y,
      }).scaleFactor;
      x = Math.round(x / screenScale - offset[0]);
      y = Math.round(y / screenScale - offset[1]);
      win.setBounds({
        width: size[0],
        height: size[1],
        x: x + 0,
        y: y + 0,
      });
    });

    mouse.on('left-up', function () {
      offset = null;
      win = null;
      size = null;
    });

    return function () {
      element.removeEventListener('mousedown', onmousedown);
      mouse.destroy();
    };
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
