import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Descriptions, Tabs, Spin } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
import { jsonLanguage } from '@codemirror/lang-json';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { usePost } from '@/context/usePost';
import styles from './params.scss';
// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('small');
  const { response, loading } = usePost();
  const responseHeaders = [];

  if (!(response == null)) {
    if ('headers' in response) {
      Object.entries(response?.headers).forEach(([key, value]) => {
        responseHeaders.push({
          key,
          value,
        });
      });
    }
  }
  const ResopnseHeaderView = (
    <Descriptions className={styles.descriptionsText} column={1}>
      {responseHeaders.map((item) => (
        <Descriptions.Item label={item.key}>{item.value}</Descriptions.Item>
      ))}
      {/*
      <Descriptions.Item label="content-length">1810000000</Descriptions.Item>
      <Descriptions.Item label="content-type">
        Hangzhou, Zhejiang
      </Descriptions.Item>
      <Descriptions.Item label="expires">empty</Descriptions.Item>
      <Descriptions.Item label="pragma">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item> */}
    </Descriptions>
  );
  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  let resText = response?.data;
  console.log(response);
  if (!response?.data) {
    resText = response?.message;
  }
  console.log(resText);
  const items = [
    {
      label: `Response Body`,
      key: 1,
      children: (
        <CodeMirror
          theme="dark"
          height="180px"
          value={JSON.stringify(resText, null, 2)}
          extensions={[jsonLanguage]}
          // onChange={onChange}
          // value={}
        />
      ),
    },
    {
      label: `Response Headers`,
      key: 2,
      children: ResopnseHeaderView,
    },
  ];

  return (
    <div>
      <Spin spinning={loading} tip="请求中...">
        <Tabs defaultActiveKey="1" size={size} items={items} />
      </Spin>
    </div>
  );
};

export default App;
