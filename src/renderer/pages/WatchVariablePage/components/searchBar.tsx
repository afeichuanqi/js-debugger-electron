import React, { useEffect, useState } from 'react';
import { Button, Table, Form, Input, Tag } from 'antd';
import { Resizable } from 're-resizable';
import { useWatchVariable } from '@/context/useWatchVariable';
import * as remote from '@electron/remote';
import styles from './searchBar.scss';
// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => {
  const {
    setResizableDe,
    onResizeStart,
    setIsStartResizab,
    isStartResizab,
    resizableDe,
  } = useWatchVariable();
  const [dbFieldLen, setDbFieldLen] = useState(0);
  const [form] = Form.useForm();
  const [actionDb, setActionDb] = useState<any>({
    Dbsearch: null,
    DbonFieldLen: null,
    DbClear: null,
  });
  const [dataSource, setDataSource] = useState(
    Array(40)
      .fill('')
      .map((_, index) => ({ name: index }))
  );
  useEffect(() => {
    remote
      .getGlobal('eventEmitter')
      .on(
        'SubRenderActionDb',
        (Dbsearch: any, DbonFieldLen: any, DbClear: any) => {
          setActionDb({
            Dbsearch,
            DbonFieldLen,
            DbClear,
          });
        }
      );
  }, []);
  useEffect(() => {
    actionDb?.DbonFieldLen?.((_dbFieldLen: any) => {
      setDbFieldLen(_dbFieldLen);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionDb.DbonFieldLen]);
  // useEffect(() => {
  //   document
  //     .getElementsByClassName('searchBarTable')[0]
  //     .getElementsByTagName('table')[0]
  //     .setAttribute('style', `height: ${resizableDe.height + 250}px;`);
  // }, [resizableDe.height]);
  const columns = [
    {
      title: '变量名',
      dataIndex: 'name',
      key: 'name',
      width: 50,
      editable: true,
      ellipsis: true,
    },
    {
      title: '变量值',
      dataIndex: 'value',
      key: 'value',
      width: '25%',
      editable: true,
      ellipsis: true,
    },
    {
      title: '变量类型',
      dataIndex: 'type',
      key: 'type',
      width: '10%',
      editable: true,
      ellipsis: true,
    },
    {
      title: '所在函数',
      key: 'codeName',
      dataIndex: 'codeName',
      width: '10%',
      editable: true,
      ellipsis: true,
    },
    {
      title: '执行次数',
      key: 'execTimes',
      dataIndex: 'execTimes',
      width: '10%',
      editable: true,
      ellipsis: true,
    },
    {
      title: '执行顺序',
      key: 'execOrder',
      dataIndex: 'execOrder',
      width: '10%',
      editable: true,
      ellipsis: true,
    },
    {
      title: '代码位置',
      key: 'codeAddress',
      dataIndex: 'codeAddress',
      width: '25%',
      editable: true,
      ellipsis: true,
    },
  ];
  return (
    <Resizable
      minWidth="calc(100% + 40px)"
      minHeight={200}
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
        width: 'calc(100% + 40px)',
        bottom: -20,
        zIndex: 1,
        height: 460,
      }}
    >
      <div
        style={{
          borderTop: isStartResizab ? '1px solid red' : 'black',
        }}
        className={styles.searchBarBox}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            background: 'rgb(0, 21, 41)',
            padding: '10px 5px',
          }}
        >
          <div>
            <Tag color="#108ee9">变量数: {dbFieldLen}</Tag>
            <Button
              onClick={() => {
                actionDb.DbClear?.();
              }}
              type="link"
            >
              清空
            </Button>
          </div>
          <Form layout="inline" form={form} style={{ maxWidth: 600 }}>
            <Form.Item name="searchVal" label="搜索值">
              <Input placeholder="输入要搜索的文本" />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={async () => {
                  const searchVal = await form.getFieldValue('searchVal');
                  actionDb.Dbsearch?.(searchVal, (result) => {
                    // eslint-disable-next-line no-underscore-dangle
                    const _dataSource = result.map((item, index) => ({
                      key: index,
                      ...item,
                    }));
                    setDataSource(_dataSource);
                  });
                }}
                type="primary"
              >
                搜索
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div
          style={{
            height: `${240 + resizableDe.height}px`,
          }}
          className={styles.tableBox}
        >
          <Table pagination={false} columns={columns} dataSource={dataSource} />
        </div>
      </div>
    </Resizable>
  );
};

export default App;
