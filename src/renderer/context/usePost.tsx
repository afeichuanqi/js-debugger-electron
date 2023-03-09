/* eslint-disable no-underscore-dangle */
import { useEffect, useRef, useState } from 'react';
import { createContainer, useContainer } from '@/utils/unstated-next';
import { ipcRenderer } from 'electron';
import Utils from '@/pages/components/postMan/utils';
import { v4 as uuidv4 } from 'uuid';

const curlconverter = require('curlconverter');

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
  const dataRef = useRef({ tabKey: '1' });
  const converCookies = (cookies: Object) => {
    let cookieText = '';
    Object.keys(cookies).map((cookieName, index) => {
      cookieText += `${cookieName}=${cookies[cookieName]};`;
    });
    return cookieText;
  };
  const importCurl = (curl: string) => {
    // console.log(JSON.parse(curlconverter.toJsonString(curl)));
    const curlParseObj = JSON.parse(curlconverter.toJsonString(curl));
    console.log(curlParseObj);
    const { headers, insecure, method, queries, raw_url, cookies, url, data } =
      curlParseObj;
    const _method = method.toUpperCase();
    // headers处理 ------------------------------

    let _count = count;
    let _selectedRowKeys = [...selectedRowKeys];
    const _headers = Object.keys(headers).map((item) => {
      const headerKey = item;
      const headerVal = headers[headerKey];
      const data = {
        key: _count,
        paramsKey: headerKey,
        value: headerVal,
        describe: '',
        selected: true,
      };
      _selectedRowKeys = [..._selectedRowKeys, _count];
      _count += 1;
      return data;
    });
    if (cookies) {
      _headers.push({
        key: _count,
        paramsKey: 'Cookie',
        value: converCookies(cookies),
        describe: '',
        selected: true,
      });
    }
    _selectedRowKeys = [..._selectedRowKeys, _count];
    _count += 1;
    _headers.push({
      key: _count,
      paramsKey: '',
      value: '',
      describe: '添加协议头',
      selected: true,
    });
    _selectedRowKeys = [..._selectedRowKeys, _count];
    _count += 1;

    // params for querty处理 ------------------------------
    if (queries) {
      const _params = Object.keys(queries).map((item) => {
        const headerKey = item;
        const headerVal = queries[headerKey];
        const data = {
          key: _count,
          paramsKey: headerKey,
          value: headerVal,
          describe: '',
          selected: true,
        };
        _selectedRowKeys = [..._selectedRowKeys, _count];
        _count += 1;
        return data;
      });
      _params.push({
        key: _count,
        paramsKey: '',
        value: '',
        describe: '添加参数',
        selected: true,
      });
      _selectedRowKeys = [..._selectedRowKeys, _count];
      _count += 1;
      setParams(_params);
    }

    // params for querty处理-----------------
    setCount(_count);

    setSelectedRowKeys(_selectedRowKeys);
    setHeaders(_headers);
    setBaseUrl(url);
    setProtocol(_method);
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
    if (dataRef.current?.tabKey) {
      ipcRenderer.on('sendPost-done', (event, _param) => {
        setLoading(false);
        if (!_param.isError) {
          if (Utils.tabActiveKey === dataRef.current.tabKey) {
            setResponse(JSON.parse(_param.response));
          }
        } else if (Utils.tabActiveKey === dataRef.current.tabKey) {
          _param.response = JSON.parse(_param.error);
          setResponse(_param.response);
        }
      });
    }
  }, [dataRef.current.tabKey]);
  const transFormData = (arr: any[]) => {
    return arr
      .filter((item) => item.selected && (item.paramsKey || item.value))
      .map((item) => ({
        ...keyPairInitState,
        keyItem: item.paramsKey,
        valueItem: item.value,
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
    dataRef,
  };
};

export const PostContainer = createContainer(Post);

export function usePost() {
  return useContainer(PostContainer);
}
