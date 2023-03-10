/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { Button, Tag, List, Checkbox, Spin } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { javascriptLanguage } from '@codemirror/lang-javascript';
import { ipcRenderer } from 'electron';
import * as UglifyJS from 'uglify-js';
import * as remote from '@electron/remote';
import Utils from '../utils';
import styles from './jsEdit.scss';

// const UglifyJS = remote.require('uglify-js');

// console.log(UglifyJS.uglify);

const moduleArr = [
  {
    name: '',
  },
  {
    name: 'console',
  },
  {
    name: 'path',
    background: 'red',
  },

  {
    name: 'util',
    background: 'red',
  },
  {
    name: 'url',
    background: 'red',
  },
  {
    name: 'fs',
    background: 'red',
  },
  {
    name: 'http',
    background: 'red',
  },
  {
    name: 'axios',
    background: 'red',
  },
];
const defaultJsText = `function print (result) {
  const _printText = 'hellow JS-DEBUGGER'
  console.log(_printText)
  return result
}`;
const defaultDebugText = `print('JS-DEBUGGER')
print('JS-DEBUGGER')
print('JS-DEBUGGER')`;
function App(props) {
  // console.log(props, 'props');
  const [jsText, setJsText] = useState<string>(defaultJsText);
  const [loading, setLoading] = useState<boolean>(false);
  const [allFunLoading, setAllFunLoading] = useState<boolean>(false);
  const [debuggerText, setDebugText] = useState<string>(defaultDebugText);
  const [printText, setPrintText] = useState<string>('');
  const [allFuntions, setAllFuntions] = useState([]);
  const dataRef = useRef({ modules: ['console'], printText: '' });
  const $ref = useRef(null);
  const changePrintText = (_text: string) => {
    if (props.tabKey === Utils.tabActiveKey) {
      const _printText = `${dataRef.current.printText}${_text}`;
      dataRef.current.printText = _printText;
      setPrintText(_printText);
      setTimeout(() => {
        const view = $ref.current?.view;
        view.scrollDOM.scrollTop = view.scrollDOM.scrollHeight;
      }, 100);
    }
  };
  useEffect(() => {
    ipcRenderer.on('jsTextCompilerResult', (event, arg) => {
      if (!arg.isError) {
        changePrintText('编译完成\n');
      } else {
        changePrintText(`编译失败\n编译结果:${arg.result}\n`);
      }
      setLoading(false);
      setAllFunLoading(false);
    });
    ipcRenderer.on('jsTextRunCodeResult', (event, arg) => {
      if (!arg.isError) {
        changePrintText(`运行结果:${arg.result}\n`);
      } else {
        changePrintText(`运行失败\n运行结果:${arg.result}\n`);
      }
      setLoading(false);
    });
    ipcRenderer.on('jsTextCompilerAllFuntionResule', (event, arg) => {
      setAllFuntions(arg);
    });
    ipcRenderer.on('jsTextRunConsoleLog', (event, arg) => {
      changePrintText(`运行结果:console.log:${arg.result}\n`);
    });
  }, []);
  const onModuleBtn = (checked, moduleName) => {
    if (checked) {
      if (!dataRef.current.modules.some((item) => item === moduleName)) {
        dataRef.current.modules.push(moduleName);
      }
      return;
    }
    if (
      dataRef.current.modules.some((item) => item === moduleName) &&
      !checked
    ) {
      const findindex = dataRef.current.modules.findIndex(
        (item) => item === moduleName
      );
      dataRef.current.modules.splice(findindex, 1);
    }
  };
  const minify = (beautify) => {
    const result = UglifyJS.minify(jsText, {
      compress: false,
      mangle: true,
      output: {
        beautify,
      },
    });
    const { code, error } = result;
    if (!error) {
      setJsText(code);
      changePrintText(`运行结果:${beautify ? '美化' : '压缩'}完成\n`);
    }
    if (error) {
      changePrintText(`运行结果:${JSON.stringify(error)}\n`);
    }
  };
  return (
    <div className={styles.app}>
      <div
        style={{
          height: '50%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          className={styles.codemirrorBox}
          style={{
            height: '100%',
          }}
        >
          <Tag
            closable
            className={styles.tagBox}
            icon={<MinusCircleOutlined />}
            color="default"
          >
            编译区
          </Tag>
          <CodeMirror
            value={jsText}
            theme="dark"
            height="100%"
            style={{
              height: '100%',
            }}
            extensions={[javascriptLanguage]}
            onChange={(value) => setJsText(value)}
            editable
          />
        </div>
        <div className={styles.canModulesBox}>
          <Tag
            closable
            className={styles.tagBox}
            icon={<MinusCircleOutlined />}
            color="default"
          >
            内置模块
          </Tag>
          <List
            style={{
              borderRadius: '0px',
            }}
            header={null}
            footer={null}
            bordered
            dataSource={moduleArr}
            renderItem={(item) => {
              if (item.name === '') {
                return <List.Item />;
              }
              if (item.name === 'console') {
                return (
                  <List.Item>
                    <Checkbox
                      onClick={(e) => {
                        onModuleBtn(e.target.checked, 'console');
                      }}
                      defaultChecked
                    >
                      console
                    </Checkbox>
                  </List.Item>
                );
              }
              return (
                <List.Item>
                  <Checkbox
                    onClick={(e) => {
                      onModuleBtn(e.target.checked, item.name);
                    }}
                  >
                    {item.name}
                    {/* {item.background && (
                  <span style={{ color: item.background }}>*</span>
                )} */}
                  </Checkbox>
                </List.Item>
              );
            }}
          />
        </div>
      </div>
      <div className={styles.toolBar}>
        <div
          style={{
            display: 'flex',
            marginLeft: 10,
          }}
        >
          <div>Node: {remote.process.versions.node}</div>
          <div style={{ marginLeft: 10 }}>
            V8: {remote.process.versions.v8.replace('electron.', '')}
          </div>
        </div>
        <div className={styles.toolBarAction}>
          <Button
            onClick={() => {
              setLoading(true);
              setAllFunLoading(true);
              ipcRenderer.send(
                'jsTextCompiler',
                jsText,
                dataRef.current.modules
              );
            }}
            type="link"
          >
            编译
          </Button>
          <Button
            type="link"
            onClick={() => {
              setLoading(true);
              ipcRenderer.send('jsTextRunCode', debuggerText);
            }}
          >
            运行
          </Button>
          <Button onClick={() => minify(false)} type="link">
            uglify-js - 压缩
          </Button>
          <Button onClick={() => minify(true)} type="link">
            uglify-js - 美化
          </Button>
        </div>
      </div>
      <div className={styles.codemirror} style={{ height: '20%' }}>
        <div className={styles.codemirrorBox}>
          <Tag
            closable
            className={styles.tagBox}
            icon={<MinusCircleOutlined />}
            color="default"
          >
            运行区
          </Tag>
          <CodeMirror
            value={debuggerText}
            theme="dark"
            height="100%"
            style={{
              height: '100%',
              width: '100%',
            }}
            extensions={[javascriptLanguage]}
            onChange={(value) => setDebugText(value)}
            editable
          />
        </div>
        <div
          className={styles.canModulesBox}
          style={{
            height: '100%',
            width: '15%',
          }}
        >
          <List
            loading={allFunLoading}
            style={{
              borderRadius: '0px',
            }}
            locale={{ emptyText: <div /> }}
            header={null}
            footer={null}
            bordered
            dataSource={allFuntions}
            renderItem={(item) => (
              <List.Item>
                <a
                  onClick={() => {
                    setDebugText(item);
                  }}
                >
                  {item}
                </a>
              </List.Item>
            )}
          />
          <Tag
            closable
            className={styles.tagBox}
            icon={<MinusCircleOutlined />}
            color="default"
          >
            方法区
          </Tag>
        </div>
      </div>
      <div
        className={styles.toolBar}
        style={{ justifyContent: 'flex-end', height: '20px' }}
      />

      <Spin spinning={loading} tip="Loading...">
        <div
          className={styles.codemirror}
          style={{
            height: '100px',
            position: 'relative',
          }}
        >
          <Tag
            closable
            className={styles.tagBox}
            icon={<MinusCircleOutlined />}
            color="default"
          >
            输出区
          </Tag>
          <CodeMirror
            ref={$ref}
            value={printText}
            theme="dark"
            height="100%"
            style={{
              height: '100%',
              width: '100%',
            }}
            extensions={[javascriptLanguage]}
            onChange={(value) => setPrintText(value)}
            editable
          />
        </div>
      </Spin>
      {/* </div> */}
    </div>
  );
}
export default App;
