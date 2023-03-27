import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Switch,
  List,
  Form,
  Input,
  Tag,
  theme,
  Button,
  Modal,
} from 'antd';
import {
  SyncOutlined,
  DeleteOutlined,
  DownloadOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import * as remote from '@electron/remote';
import { useWatchVariable } from '@/context/useWatchVariable';
import SearchBar from './components/searchBar';
import styles from './index.scss';

const { exec } = remote.require('child_process');

function WatchVariabel() {
  const [data, setData] = useState<any[]>([]);
  const [fetchFetchData, setFetchFetchData] = useState<any[]>([]);
  const [isWatch, setIsWatch] = useState(false);
  const [fileCacheSize, setFileCacheSize] = useState('0');
  const { resizableDe } = useWatchVariable();
  const [anyProxy, setAnyProxy] = useState<any>({
    downLoadCert: null,
    createProxy: null,
    closeProxy: null,
  });
  const [form] = Form.useForm();
  const dataRef = useRef<any>({
    FetchFetchData: [],
    data: [],
    fileCacheSize: '0',
  });
  const [modal, contextHolder] = Modal.useModal();
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const { createProxy, downLoadCert, closeProxy } = anyProxy;
  useEffect(() => {
    const inter = setInterval(() => {
      if (dataRef.current.FetchFetchData.length > 0) {
        setFetchFetchData(dataRef.current.FetchFetchData);
      }
      if (dataRef.current.data.length > 0) {
        setData(dataRef.current.data);
      }
      setFileCacheSize(dataRef.current.fileCacheSize);
    }, 5000);
    return () => {
      clearInterval(inter);
    };
  }, []);
  useEffect(() => {
    // 拿到anypoxy对象
    remote
      .getGlobal('eventEmitter')
      .on(
        'SubRenderHandleInitDone',
        (_downLoadCert: any, _createProxy: any, _closeProxy: any) => {
          setAnyProxy({
            downLoadCert: _downLoadCert,
            createProxy: _createProxy,
            closeProxy: _closeProxy,
          });
        }
      );
    // 监听
    remote
      .getGlobal('eventEmitter')
      .on('AnyProxyLog', (title: string, description: string) => {
        const newData = [{ title, description }, ...dataRef.current.data];

        if (newData.length > 50) {
          dataRef.current.data = [{ title, description }];
        } else {
          dataRef.current.data = newData;
        }
        // setData(newData as any);
      });
    // 监听
    remote
      .getGlobal('eventEmitter')
      .on('AppFetchUrl', (title: string, description: string) => {
        const newData = [
          { title, description },
          ...dataRef.current.FetchFetchData,
        ];
        if (newData.length > 50) {
          dataRef.current.FetchFetchData = [{ title, description }];
        } else {
          dataRef.current.FetchFetchData = newData;
        }
      });

    remote
      .getGlobal('eventEmitter')
      .on('FileCache', (_fileCacheSize: string) => {
        setFileCacheSize(_fileCacheSize);
        dataRef.current.fileCacheSize = _fileCacheSize;
      });
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      port: '10086',
    });
  }, []);

  const cretDownload = () => {
    const isWin = /^win/.test(process.platform);
    downLoadCert((json: any) => {
      const res = JSON.parse(json);
      if (res.isError) {
        return;
      }
      if (res.isExists) {
        modal.confirm({
          title: 'JSBUGGER',
          icon: <ExclamationCircleOutlined />,
          content: '已经生成证书,是否打开目录？',
          okText: '确认',
          cancelText: '取消',
          onOk: () => {
            if (isWin) {
              exec('start .', { cwd: res.certDir });
            } else {
              exec('open .', { cwd: res.certDir });
            }
          },
        });
      } else {
        modal.confirm({
          title: 'JSBUGGER',
          icon: <ExclamationCircleOutlined />,
          content: '已经生成证书,是否打开目录？',
          okText: '确认',
          cancelText: '取消',
          onOk: () => {
            if (isWin) {
              exec('start .', { cwd: res.certDir });
            } else {
              exec('open .', { cwd: res.certDir });
            }
          },
        });
      }
    });
  };
  return (
    <div className={styles.app}>
      <Alert message="监听需要浏览器代理" type="warning" showIcon closable />
      <div className={styles.checkedBox}>
        <div>
          <Button
            onClick={cretDownload}
            type="primary"
            icon={<DownloadOutlined />}
            size="middle"
            disabled={!anyProxy.downLoadCert}
          >
            证书下载
          </Button>
          {fileCacheSize !== '0' && (
            <Button
              onClick={() => {
                const isWin = /^win/.test(process.platform);
                if (isWin) {
                  exec('start .', {
                    cwd: 'js-file-cache',
                  });
                } else {
                  exec('open .', {
                    cwd: 'js-file-cache',
                  });
                }
              }}
              type="link"
              danger
            >
              缓存文件数：{fileCacheSize}
            </Button>
          )}
        </div>

        <Form
          form={form}
          layout="inline"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="端口号" name="port">
            <Input />
          </Form.Item>
          <Form.Item>
            <Switch
              checkedChildren="关闭监听"
              unCheckedChildren="开启监听"
              checked={isWatch}
              disabled={!anyProxy.createProxy}
              onClick={(checked: boolean) => {
                setIsWatch(checked);
                try {
                  if (checked) {
                    const port = form.getFieldValue('port');
                    const anyProxy = createProxy(port);
                    dataRef.current.anyProxy = anyProxy;
                    return;
                  }
                  if (!checked) {
                    closeProxy?.();
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            />
          </Form.Item>
        </Form>
      </div>
      <div
        className={styles.watchBox}
        style={{ height: `calc(100% - 397px - ${resizableDe.height}px)` }}
      >
        <div className={styles.watchLogBox}>
          <div>
            <Tag
              icon={isWatch ? <SyncOutlined spin /> : null}
              color="processing"
            >
              {isWatch ? '代理日志...' : '代理日志'}
            </Tag>
            {data.length > 0 ? (
              <a
                onClick={() => {
                  setData([]);
                }}
              >
                <DeleteOutlined style={{ color: colorPrimary }} />
              </a>
            ) : null}
          </div>

          {/* <Alert style={{ width: 150 }} message="代理日志" type="success" /> */}
          <div className={styles.watchLog}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={null}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className={styles.watchLogBox}>
          <div>
            <Tag
              icon={isWatch ? <SyncOutlined spin /> : null}
              color="processing"
            >
              {isWatch ? '请求访问...' : '请求访问'}
            </Tag>
            {fetchFetchData.length > 0 ? (
              <a
                onClick={() => {
                  setFetchFetchData([]);
                }}
              >
                <DeleteOutlined style={{ color: colorPrimary }} />
              </a>
            ) : null}
          </div>
          <div className={styles.watchLog}>
            <List
              itemLayout="horizontal"
              dataSource={fetchFetchData}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={null}
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                    title={<a onClick={() => {}}>{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
      {contextHolder}
      <SearchBar />
    </div>
  );
}
export default WatchVariabel;
