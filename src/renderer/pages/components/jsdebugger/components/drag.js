const getAllFunctions = (jsText: string) => {
  const functionArg = esprima.parseScript(jsText);
  const allFunctions: any = [];
  functionArg.body.forEach((el) => {
    const params: any = [];
    if (el.type === 'FunctionDeclaration') {
      el.params.forEach((arg) => {
        params.push(arg.name);
      });
      allFunctions.push(`${el.id.name}(${params.join(',')})`);
    }
    if (el.declarations && el.declarations.length > 0) {
      const variableDeclarator = el.declarations[0];
      if (
        variableDeclarator.type === 'FunctionDeclaration' &&
        variableDeclarator.init.params
      ) {
        variableDeclarator.init.params.forEach((arg) => {
          params.push(arg.name);
        });
        allFunctions.push(`${variableDeclarator.id.name}(${params.join(',')})`);
      }
    }
  });
  return allFunctions;
};
// console.log(getAllFunctions(`const a`))
