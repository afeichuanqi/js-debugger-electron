
cc11001100_hook =
  window._hook =
  window.hook =
  window.cc11001100_hook =
    function (name, value, type) {
      try {
        stringPutToDB(name, value, type);
      } catch (e) {
        console.error(e);
      }
      // 不论严寒酷暑、不管刮风下雨，都不应该影响到正常逻辑，我要认识到自己的定位只是一个hook....
      return value;
    };
// 从一个比较大的数开始计数，以方便在展示的时候与执行次数做区分，差值过大就不易混淆
let execOrderCounter = 100000;
function stringPutToDB(name, value, type) {
  if (!value) {
    return;
  }

  // TODO 更多类型搞进来
  // TODO 为什么一定要大而全呢？虽然占用的内存并不多，但是如果上百万的零碎变量还是会耗时间的？也许应该针对性的做出取舍
  let valueString = '';
  const valueTypeof = typeof value;
  if (valueTypeof === 'string') {
    valueString = value;
  } else if (valueTypeof === 'number') {
    // 太慢了...
    // valueString = value + "";
  }

  if (!valueString) {
    return;
  }
  // 获取代码位置
  const codeLocation = getCodeLocation();
  const dbData = {
    name,
    // TODO Buffer类结构直接运算Hook不到的问题仍然没有解决...
    // 默认情况下把所有变量都toString保存到字符串池子中
    // 有一些参数就是放在Buffer或者什么地方以字节形式存储，当使用到的时候直接与字符串相加toString，
    // 这种情况如果只监控变量赋值就监控不到了，这是不想添加更多监控点的情况下的折中方案...
    // 所以干脆在它还是个buffer的时候就转为字符串
    value: valueString,
    type,
    execOrder: execOrderCounter++,
    codeLocation,
  }
  try {
    window.cc11001100_ws.send(JSON.stringify(dbData))
  } catch (error) {
    // if (window.cc11001100_ws.readyState === 0) {
    //   window.cc11001100_ws = new WebSocket("ws://127.0.0.1:10011");
    //   window.cc11001100_ws.onopen=function(){
    //     window.cc11001100_ws.send(JSON.stringify(dbData))
    //   }
    // }
    const inter = setInterval(() => {
      if (window.cc11001100_ws.readyState === 1) {
        window.cc11001100_ws.send(JSON.stringify(dbData));
        clearInterval(inter);
      }
    }, 500)
  }


  // 这个地方被执行的次数统计
  // if (codeLocation in codeLocationExecuteTimesCount) {
  //   codeLocationExecuteTimesCount[codeLocation]++;
  // } else {
  //   codeLocationExecuteTimesCount[codeLocation] = 1;
  // }
}
function getCodeLocation() {
  const callstack = new Error().stack.split('\n');
  while (callstack.length > 0 && callstack[0].indexOf('cc11001100') === -1) {
    callstack.shift();
  }
  if (callstack.length < 2) {
    return null;
  }
  callstack.shift();
  return callstack.shift();
}
