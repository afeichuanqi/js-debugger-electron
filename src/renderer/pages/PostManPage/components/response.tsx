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
import { Resizable } from 're-resizable';
import { EditorView } from '@codemirror/view';
import * as remote from '@electron/remote';
import styles from './params.scss';
// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('small');
  const {
    response,
    loading,
    baseUrl,
    resizableDe,
    setResizableDe,
    onResizeStart,
    setIsStartResizab,
    isStartResizab,
  } = usePost();
  const responseHeaders: any[] = [];
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
                message.success('复制成功');
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
      console.log(ct, 'ct');
      if (ct.indexOf('text/html') > -1) {
        extensions = [htmlLanguage];
        value = resText;
      }
      if (ct.indexOf('json') > -1) {
        extensions = [jsonLanguage];
        value = JSON.stringify(resText);
      }

      if (ct.indexOf('text/javascript') > -1) {
        extensions = [javascriptLanguage];
        value = resText;
      }
      if (ct.indexOf('text/plain') > -1) {
        extensions = [jsonLanguage];
        value = JSON.stringify(resText);
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

  const items: any[] = [
    {
      label: `Response Body`,
      key: 1,
      children: (
        <div>
          {codeOption.isImg ? (
            <div className={styles.resImgBg}>
              <Image src={baseUrl} />
            </div>
          ) : (
            <CodeMirror
              theme="dark"
              height={`${180 + resizableDe.height}px`}
              style={{ height: `${180 + resizableDe.height}px` }}
              value={codeOption.value}
              extensions={[...codeOption.extensions, EditorView.lineWrapping]}
            />
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
    <Resizable
      minWidth="calc(100% + 40px)"
      minHeight={40}
      maxHeight="60vh"
      onResizeStart={() => {
        onResizeStart();
      }}
      onResizeStop={() => {
        setIsStartResizab(false);
      }}
      onResize={(_e, __, _, delta) => {
        setResizableDe(delta);
      }}
      enable={{
        top: true,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      style={{
        position: 'absolute',
        background: 'black',
        left: -20,
        bottom: -20,
        zIndex: 9999,
        height: '200px',
      }}
    >
      <Spin spinning={loading} tip="请求中...">
        <Tabs
          style={{
            borderTop: `1px solid ${isStartResizab ? 'red' : 'black'}`,
          }}
          className={styles.tablesContainer}
          defaultActiveKey="1"
          size={size}
          items={items}
        />
      </Spin>
    </Resizable>
  );
};

export default App;
