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
import path from 'path';
import { getUtilsPath } from '@/utils/pathResolve';
import styles from './watchVariable.scss';

const { exec } = remote.require('child_process');
const { createProxy, anyProxyUtils } = remote.getGlobal('proxyServer');
function WatchVariabel() {
  const [data, setData] = useState<any[]>([]);
  const [fetchFetchData, setFetchFetchData] = useState<any[]>([]);
  const [isWatch, setIsWatch] = useState(false);
  const [fileCacheSize, setFileCacheSize] = useState('0');
  const [form] = Form.useForm();
  const dataRef = useRef<{ anyProxy: any }>({ anyProxy: null });
  const [modal, contextHolder] = Modal.useModal();
  const {
    token: { colorPrimary },
  } = theme.useToken();
  useEffect(() => {
    remote
      .getGlobal('eventEmitter')
      .on('AnyProxyLog', (title: string, description: string) => {
        const newData = [{ title, description }, ...data];
        setData(newData as any);
      });
  }, [data]);

  useEffect(() => {
    remote
      .getGlobal('eventEmitter')
      .on('FileCache', (_fileCacheSize: string) => {
        console.log(_fileCacheSize);
        setFileCacheSize(_fileCacheSize);
      });
  });

  useEffect(() => {
    form.setFieldsValue({
      port: '10086',
    });
  }, []);

  useEffect(() => {
    remote
      .getGlobal('eventEmitter')
      .on('AppFetchUrl', (title: string, description: string) => {
        console.log(title, 'title');
        const newData = [{ title, description }, ...fetchFetchData];
        setFetchFetchData(newData as any);
      });
  }, [fetchFetchData]);

  const cretDownload = () => {
    const isWin = /^win/.test(process.platform);
    if (!anyProxyUtils.certMgr.ifRootCAFileExists()) {
      anyProxyUtils.certMgr.generateRootCA((error, keyPath) => {
        if (!error) {
          const certDir = path.dirname(keyPath);
          modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: '已经生成证书,是否打开目录？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
              if (isWin) {
                exec('start .', { cwd: certDir });
              } else {
                exec('open .', { cwd: certDir });
              }
            },
          });
          // successCb && successCb('success');
        } else {
          // errorCb && errorCb('error');
          console.error('error when generating rootCA', error);
        }
      });
    } else {
      const rootPath = anyProxyUtils.certMgr.getRootDirPath('certificates');
      if (!rootPath) return;
      modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: '已经下载证书,是否直接打开？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          if (isWin) {
            exec('start .', { cwd: rootPath });
          } else {
            exec('open .', { cwd: rootPath });
          }
        },
      });
    }
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
              onClick={(checked: boolean) => {
                setIsWatch(checked);
                try {
                  if (checked) {
                    const port = form.getFieldValue('port');
                    const anyProxy = createProxy(port);
                    dataRef.current.anyProxy = anyProxy;
                    return;
                  }
                  if (dataRef.current.anyProxy) {
                    dataRef.current.anyProxy.close();
                    dataRef.current.anyProxy = null;
                  }
                } catch (error) {
                  // console.log(error);
                }
              }}
            />
          </Form.Item>
        </Form>
      </div>
      <div className={styles.watchBox}>
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
    </div>
  );
}
export default WatchVariabel;
