/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { createContainer, useContainer } from '@/utils/unstated-next';
import { ipcRenderer } from 'electron';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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
  },
  {
    key: 'User-Agent',
    value:
      'Mozilla/5.0 (X11; CrOS aarch64 15227.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  },
  {
    key: 'Accept',
    value: '*/*',
  },
  {
    key: 'Accept-Encoding',
    value: 'gzip, deflate, br',
  },
  {
    key: 'Connection',
    value: 'keep-alive',
  },
  {
    key: '',
    value: '',
  },
];
const Post = () => {
  const [baseUrl, setBaseUrl] = useState(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  const [protocol, setProtocol] = useState('GET');
  const [params, setParams] = useState<any[]>(initParams);
  const [body, setBody] = useState<any>('');
  const [headers, setHeaders] = useState(initParams);
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  // params板块需要
  const [count, setCount] = useState(1);
  const [selectedRowKeys, setSelectedRowKeys] = useState([initParams[0].key]);
  const generatorDefaultHeads = () => {
    const _headers = [];
    let _selectedRowKeys = [...selectedRowKeys];
    let _count = count;
    defaultHeaders.map((item) => {
      _headers.push({
        key: _count,
        paramsKey: item.key,
        value: item.value,
        describe: '',
        selected: true,
      });
      _selectedRowKeys = [..._selectedRowKeys, _count];
      _count += 1;
    });
    console.log(_headers, 'headers');
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
        console.log('我被触发');
        _param.response = JSON.parse(_param.error);
        setResponse(_param.response);
      }
    });
  }, []);
  const transFormData = (arr: any[]) => {
    return arr.map((item) => ({
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
      console.log('Something is wrong with the JSON data.');
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
      // eslint-disable-next-line promise/always-return
    });
    // eslint-disable-next-line promise/catch-or-return
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
  };
};

export const PostContainer = createContainer(Post);

export function usePost() {
  return useContainer(PostContainer);
}
