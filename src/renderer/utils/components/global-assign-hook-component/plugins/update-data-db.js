// 上传数据到远程DB

(() => {
  if (!window) {
    return ;
  }
  function cc11001100_updateDb () {
    if (window.cc11001100_hook.stringsDB && window.cc11001100_hook.stringsDB.varValueDb.length > 0 || window.cc11001100_hook.stringsDB.codeLocationExecuteTimesCount.length > 0) {
        // 异步上传 不在乎变量是否丢失
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:10010/updateData', false);
        xhr.send(JSON.stringify(window.cc11001100_hook.stringsDB));
        // 实时清理
        window.cc11001100_hook.stringsDB.varValueDb = [];
        window.cc11001100_hook.stringsDB.codeLocationExecuteTimesCount = [];
        console.log(window.cc11001100_hook.stringsDB, 'window.cc11001100_hook')
    }
  }
  let timer = null;
  window.addEventListener('beforeunload', ()=>{
    window.cc11001100_updateDb();
    timer && clearInterval(timer);
  })

  if (!window.cc11001100_updateDb) {
    window.cc11001100_updateDb = cc11001100_updateDb;
    let interTime = 1000;
    timer = setInterval(() => {
      window.cc11001100_updateDb();
    }, interTime)
  }
})();
