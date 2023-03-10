/* eslint-disable no-underscore-dangle */
import { useEffect, useRef, useState } from 'react';
import { createContainer, useContainer } from '@/utils/unstated-next';

const initParams = [
  {
    key: 0,
    paramsKey: '',
    value: '',
    describe: '',
    selected: true,
  },
];
const Post = () => {
  const [baseUrl, setBaseUrl] = useState('');
  const [protocol, setProtocol] = useState('POST');
  const [params, setParams] = useState<any[]>([initParams]);

  const [handleUrl, setHandleUrl] = useState('');
  // params板块需要
  const [count, setCount] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([0]);

  // const arrFormStringIfy = (arr: any[]) => {
  //   let str = '';
  //   console.log(arr);
  //   arr.forEach((item, index) => {
  //     const fh = item.onlyKey ? '' : '=';
  //     const lianjiefu = index !== arr.length - 1;
  //     str += `${item.paramsKey}${fh}${item.value}${lianjiefu ? '&' : ''}`;
  //   });
  //   console.log(str);
  //   return str;
  // };
  // const stringIfyFormArr = (strParams: string, arrParams: any[]) => {
  //   // eslint-disable-next-line no-underscore-dangle
  //   const _arrParams = [...arrParams];

  //   if (!strParams) {
  //     return [];
  //   }
  //   const arr =
  //     strParams.indexOf('&') === -1 && strParams.length > 0
  //       ? [strParams]
  //       : strParams.split('&');
  //   const _filterArrParams = filterChecked(_arrParams, false);
  //   arr.forEach((item: any, index: number) => {
  //     if (!_filterArrParams[index]) {
  //       _arrParams.push({
  //         ...initParams[0],
  //         key: count,
  //         onlyKey: true,
  //       });
  //       _filterArrParams.push({
  //         ...initParams[0],
  //         key: count,
  //         onlyKey: true,
  //       });
  //       setCount(count + 1);
  //       setSelectedRowKeys([...selectedRowKeys, count]);
  //     }
  //     const _arrParamKey = _filterArrParams[index].key;
  //     const _arrParamIndex = _arrParams.findIndex(
  //       (item: any) => item.key === _arrParamKey
  //     );

  //     if (!item) {
  //       _arrParams[_arrParamIndex].paramsKey = '';
  //       _arrParams[_arrParamIndex].value = '';
  //       _arrParams[_arrParamIndex].noLianjiefu = true;
  //     } else if (item.indexOf('=') >= 0) {
  //       const itemArr = item.split('=');
  //       // eslint-disable-next-line prefer-destructuring
  //       _arrParams[_arrParamIndex].paramsKey = itemArr[0];
  //       // eslint-disable-next-line prefer-destructuring
  //       _arrParams[_arrParamIndex].value = itemArr[1];
  //       _arrParams[_arrParamIndex].onlyKey = false;
  //     } else if (item.length > 0) {
  //       // 只输入key
  //       _arrParams[_arrParamIndex].paramsKey = item;
  //       _arrParams[_arrParamIndex].onlyKey = true;
  //       // eslint-disable-next-line prefer-destructuring
  //       _arrParams[_arrParamIndex].value = '';
  //     }
  //   });
  //   console.log(dataRef.current.handleUrl, _arrParams);
  //   return _arrParams;
  // };
  // const dataRef = useRef<any>({
  //   params,
  //   handleUrl,
  // });
  // useEffect(() => {
  //   dataRef.current.params = params;
  //   const baseUrl =
  //     dataRef.current.handleUrl.indexOf('?') > -1
  //       ? dataRef.current.handleUrl.split('?')[0]
  //       : '';
  //   if (!dataRef.current.handleUrl) {
  //     const _params = filterChecked(params, true);
  //     if (Object.keys(_params).length > 0) {
  //       const paramsText = arrFormStringIfy(_params);
  //       setHandleUrl(`${baseUrl}?${paramsText}`);
  //       dataRef.current.handleUrl = `${baseUrl}?${paramsText}`;
  //     }
  //     return;
  //   }
  //   const _params = filterChecked(params, false);
  //   if (Object.keys(_params).length > 0) {
  //     const paramsText = arrFormStringIfy(_params);
  //     setHandleUrl(`${baseUrl}?${paramsText}`);
  //     dataRef.current.handleUrl = `${baseUrl}?${paramsText}`;
  //   } else {
  //     setHandleUrl(`${baseUrl}?`);
  //     dataRef.current.handleUrl = `${baseUrl}?`;
  //   }
  // }, [params]);
  // const filterChecked = (paramsArr: any, filterEmpty: boolean) => {
  //   // eslint-disable-next-line no-underscore-dangle
  //   let _dataSource: any = [...paramsArr];
  //   _dataSource = _dataSource.filter((item: any) => item.selected);
  //   if (filterEmpty) {
  //     _dataSource = _dataSource.filter(
  //       (item: any, index: number) =>
  //         !(
  //           index === _dataSource.length - 1 &&
  //           item.paramsKey === '' &&
  //           item.value === ''
  //         )
  //     );
  //   }
  //   // eslint-disable-next-line array-callback-return
  //   return _dataSource;
  // };
  // useEffect(() => {
  //   dataRef.current.handleUrl = handleUrl;
  //   if (!handleUrl || handleUrl.indexOf('=') === -1) {
  //     setParams(initParams);
  //     dataRef.current.params = initParams;
  //     return;
  //   }

  //   const _paramsUrl = handleUrl.split('?')[1];
  //   const _params = stringIfyFormArr(_paramsUrl, dataRef.current.params);
  //   setParams(_params);
  //   dataRef.current.params = _params;
  // }, [handleUrl]);

  return {
    params,
    setParams,
    baseUrl,
    setBaseUrl,
    protocol,
    setProtocol,
    handleUrl,
    setHandleUrl,
    count,
    setCount,
    selectedRowKeys,
    setSelectedRowKeys,
  };
};

export const PostContainer = createContainer(Post);

export function usePost() {
  return useContainer(PostContainer);
}
