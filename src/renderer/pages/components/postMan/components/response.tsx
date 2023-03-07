import React, { useMemo, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Descriptions, Tabs, Spin, Image, message } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
import { jsonLanguage } from '@codemirror/lang-json';
import { htmlLanguage } from '@codemirror/lang-html';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import { cssLanguage } from '@codemirror/lang-css';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { usePost } from '@/context/usePost';
import * as remote from '@electron/remote';
import styles from './params.scss';
// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('small');
  const { response, loading, baseUrl } = usePost();
  const responseHeaders = [];
  const [messageApi, contextHolder] = message.useMessage();
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
    <div className={styles.descriptionsText}>
      <Descriptions column={1}>
        {responseHeaders.map((item) => (
          <Descriptions.Item label={item.key}>
            <a
              onClick={() => {
                remote.clipboard.writeText(item.value);
                messageApi.open({
                  type: '复制成功',
                  content: '复制成功',
                });
              }}
            >
              {item.value}
            </a>
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const codeOption = useMemo(() => {
    let resText = response?.data;
    if (!response?.data) {
      resText = response?.message;
    }
    let extensions = [jsonLanguage];
    let value = resText;
    let isImg = false;

    if (response?.headers && response?.headers['content-type']) {
      const ct = response?.headers['content-type'];
      if (ct.indexOf('text/html') > -1) {
        extensions = [htmlLanguage];
        value = resText;
      }
      if (ct.indexOf('application/json') > -1) {
        extensions = [jsonLanguage];
        value = JSON.stringify(resText);
      }
      if (ct.indexOf('text/javascript') > -1) {
        extensions = [javascriptLanguage];
        value = resText;
      }
      if (ct.indexOf('text/plain') > -1) {
        extensions = [jsonLanguage];
        value = resText;
      }
      if (ct.indexOf('text/css') > -1) {
        extensions = [cssLanguage];
        value = resText;
      }
      if (ct.indexOf('image/') > -1) {
        isImg = true;
      }
    }
    return {
      extensions,
      value,
      isImg,
    };
  }, [response]);

  const items = [
    {
      label: `Response Body`,
      key: 1,
      children: (
        <div>
          {contextHolder}
          {codeOption.isImg ? (
            <div className={styles.resImgBg}>
              <Image src={baseUrl} />
            </div>
          ) : (
            <div className={styles.codeMirror}>
              <CodeMirror
                theme="dark"
                height="180px"
                value={codeOption.value}
                extensions={codeOption.extensions}
              />
            </div>
          )}
        </div>
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
