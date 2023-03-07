/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { createContainer, useContainer } from '@/utils/unstated-next';
import { ipcRenderer } from 'electron';
import { curlToObject } from '@mdwitr0/curl-parser';
import { v4 as uuidv4 } from 'uuid';

const initParams = [
  {
    key: 0,
    paramsKey: '',
    value: '',
    describe: '',
    selected: true,
  },
];
const keyPairInitState = [
  {
    id: uuidv4(),
    keyItem: '',
    valueItem: '',
  },
];
const defaultHeaders = [
  {
    key: 'Content-Type',
    value: 'application/x-www-form-urlencoded',
    describe: '文档类型',
  },
  {
    key: 'User-Agent',
    value:
      'Mozilla/5.0 (X11; CrOS aarch64 15227.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    describe: '用户代理',
  },
  {
    key: 'Accept',
    value: '*/*',
    describe: '客户端希望接收的响应body',
  },
  {
    key: 'Accept-Encoding',
    value: 'gzip, deflate, br',
    describe: '浏览器支持的编码',
  },
  {
    key: 'Connection',
    value: 'keep-alive',
    describe: '长链接',
  },
  {
    key: '',
    value: '',
    describe: '添加协议头',
  },
];
const Post = () => {
  const [baseUrl, setBaseUrl] = useState(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  const [protocol, setProtocol] = useState('GET');
  const [params, setParams] = useState<any[]>([
    { ...initParams[0], describe: '添加Request Query' },
  ]);
  const [body, setBody] = useState<any>('');
  const [headers, setHeaders] = useState(initParams);
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  // params板块需要
  const [count, setCount] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([initParams[0].key]);
  const importCurl = (curl: string) => {
    const curlData = curlToObject(curl);

    let {
      headers: _headers,
      method,
      baseURL,
      data,
      href,
      params: _params,
      url,
    } = curlData;
    if (method === 'GET' && data) {
      method = 'POST';
    }
    let _count = count;
    let _selectedRowKeys = [...selectedRowKeys];
    // 处理header
    const tempHeaders = Object.keys(_headers).map((item) => {
      const _key = item;
      const _value = _headers[_key];
      const data = {
        key: _count,
        paramsKey: _key,
        value: _value,
        describe: '',
        selected: true,
      };
      _selectedRowKeys = [..._selectedRowKeys, _count];
      _count += 1;
      return data;
    });
    tempHeaders.push({
      key: _count,
      paramsKey: '',
      value: '',
      describe: '添加协议头',
      selected: true,
    });
    _selectedRowKeys = [..._selectedRowKeys, _count];
    _count += 1;
    setCount(_count);
    console.log(curlData, 'data');
    setSelectedRowKeys(_selectedRowKeys);
    setHeaders(tempHeaders);
    setBaseUrl(href);
    setProtocol(method);
    setBody(JSON.stringify(data));
  };
  const generatorDefaultHeads = () => {
    const _headers = [];
    let _selectedRowKeys = [...selectedRowKeys];
    let _count = count;
    defaultHeaders.map((item) => {
      _headers.push({
        key: _count,
        paramsKey: item.key,
        value: item.value,
        describe: item.describe || '',
        selected: true,
      });
      _selectedRowKeys = [..._selectedRowKeys, _count];
      _count += 1;
    });
    setHeaders(_headers);
    setCount(_count);
    setSelectedRowKeys(_selectedRowKeys);
  };
  useEffect(() => {
    generatorDefaultHeads();
    ipcRenderer.on('sendPost-done', (event, _param) => {
      setLoading(false);
      // console.log(_param);
      if (!_param.isError) {
        // console.log(JSON.parse(_param.response));
        setResponse(JSON.parse(_param.response));
      } else {
        _param.response = JSON.parse(_param.error);
        setResponse(_param.response);
      }
    });
  }, []);
  const transFormData = (arr: any[]) => {
    return arr
      .filter((item) => item.selected && (item.paramsKey || item.value))
      .map((item) => ({
        ...keyPairInitState,
        keyItem: item.paramsKey,
        valueItem: item.paramsKey,
      }));
  };
  const convertKeyValueToObject = (keyPairs: any) => {
    return [...keyPairs].reduce((data, pair) => {
      const key = pair.keyItem;
      const value = pair.valueItem;

      if (key === '') return data;
      return {
        ...data,
        [key]: value,
      };
    }, {});
  };

  const sendRes = () => {
    setLoading(true);
    let data: any;
    try {
      data = JSON.parse(body);
    } catch (e) {
      data = body;
    }
    const queryParams = transFormData(params);
    console.log(queryParams, 'queryParams');
    const _headers = transFormData(headers);
    // 发送给主线程
    ipcRenderer.send('sendPost', {
      url: baseUrl,
      method: protocol,
      params: convertKeyValueToObject(queryParams),
      headers: convertKeyValueToObject(_headers),
      data,
    });
  };
  return {
    params,
    setParams,
    baseUrl,
    setBaseUrl,
    protocol,
    setProtocol,
    count,
    setCount,
    selectedRowKeys,
    setSelectedRowKeys,
    setBody,
    body,
    headers,
    setHeaders,
    sendRes,
    loading,
    response,
    importCurl,
  };
};

export const PostContainer = createContainer(Post);

export function usePost() {
  return useContainer(PostContainer);
}
