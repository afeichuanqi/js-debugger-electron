class Db {
  stringsDB = {
    varValueDb: [],
    codeLocationExecuteTimesCount: [],
  }
  stringPutToDB (dbDataStr) {
    const remotedbData = JSON.parse(dbDataStr);
    const {varValueDb, codeLocationExecuteTimesCount} = remotedbData;
    this.stringsDB.varValueDb = this.stringsDB.varValueDb.concat(varValueDb)
    this.stringsDB.codeLocationExecuteTimesCount = this.stringsDB.codeLocationExecuteTimesCount.concat(codeLocationExecuteTimesCount)

    // const {codeLocation} = dbData;
    // if (codeLocation in codeLocationExecuteTimesCount) {
    //   codeLocationExecuteTimesCount[codeLocation]++;
    // } else {
    //   codeLocationExecuteTimesCount[codeLocation] = 1;
    // }
  }
  search(pattern) {
    const result = [];
    const {varValueDb, codeLocationExecuteTimesCount} = this.stringsDB;
    const expansionValues = this.expansionS(pattern);
    for (const s of varValueDb) {
      let isMatch = false;
      if (typeof pattern === 'string') {
        for (const newPattern of expansionValues) {
          isMatch =
            isMatch ||
            (`${s.name}---${s.value}`.indexOf(newPattern) !== -1);
        }
      } else if (pattern instanceof RegExp) {
        isMatch = pattern.test(`${s.name}---${s.value}`);
      }
      if (!isMatch) {
        continue;
      }
      const codeInfo = this.parseCodeLocation(s.codeLocation);
      result.push({
        name: s.name,
        value: this.abbreviationPattern(pattern, s.value),
        type: s.type,
        execOrder: s.execOrder,
        codeName: codeInfo.codeName,
        codeAddress: codeInfo.codeAddress,
        execTimes: codeLocationExecuteTimesCount[s.codeLocation],
      });
    }
    return result;
  }

  abbreviationPattern(pattern, value) {
    if (typeof pattern !== 'string' || pattern.length < 40) {
      return value;
    }
    const newPattern = `${pattern.slice(0, 15)}......${pattern.slice(
      pattern.length - 15,
      pattern.length
    )}`;
    return value.replace(pattern, newPattern);
  }
    // 对搜索值进行一个扩大，以便能够搜索到更多结果
  // 这样也不用苦逼的手动去测试到底是url encode还是url decode了的了
  expansionS(s) {
    const result = [];

    // 原字符串是要放进去的
    result.push(s);

    if (typeof s !== 'string') {
      return result;
    }

    // url编码后
    try {
      const t = encodeURIComponent(s);
      if (result.indexOf(t) === -1) {
        result.push(t);
      }
    } catch (e) {}

    // url解码后
    try {
      const t = decodeURIComponent(s);
      if (result.indexOf(t) === -1) {
        result.push(t);
      }
    } catch (e) {}

    // 表单数据到底是怎么被编码的...
    try {
      const t = s.replace(/ /g, '+');
      if (result.indexOf(t) === -1) {
        result.push(t);
      }
    } catch (e) {}

    return result;
  }
  parseCodeLocation(codeLocation) {
    const codeInfo = {};
    let matcher = codeLocation.match(/\((.+?)\)/);
    if (matcher != null && matcher.length > 1) {
      codeInfo.codeAddress = matcher[1];
    } else {
      codeInfo.codeAddress = codeLocation;
    }

    matcher = codeLocation.match(/at (.+?)\(/);
    if (matcher != null && matcher.length > 1) {
      codeInfo.codeName = matcher[1];
    }

    return codeInfo;
  }
  getFieldsLen () {
    return this.stringsDB.varValueDb.length;
  }
  clear () {
    this.stringsDB.varValueDb = [];
    this.stringsDB.codeLocationExecuteTimesCount = [];
  }
}
module.exports = new Db();
