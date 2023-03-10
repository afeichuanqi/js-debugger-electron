import React, { useEffect, useState } from 'react';
import drag from '@/utils/drag.js';
import { ipcRenderer } from 'electron';
import * as remote from '@electron/remote';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AlertOutlined,
  VideoCameraOutlined,
  MinusOutlined,
  FullscreenOutlined,
  CloseOutlined,
  FullscreenExitOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import WatchVariable from '../components/watchVariable/watchVariable';
import PostMan from '../components/postMan';
import JsDebugger from '../components/jsdebugger';
import styles from './index.scss';

const { Header, Sider, Content, Footer } = Layout;
function IndexPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('post');
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken();
  useEffect(() => {
    let clear: any = () => {};
    try {
      document
        .getElementsByClassName('ant-layout-header')[0]
        .setAttribute('id', 'drag-box');
      clear = drag('drag-box');
    } catch (error) {
      console.log(error);
    }
    // 触发loadDone事件
    ipcRenderer.send('loadDone');
    return () => {
      clear?.();
    };
  }, []);
  const setFullScreen = (full: boolean) => {
    setIsFullscreen(full);
    if (full) {
      remote.getCurrentWindow().maximize();
      return;
    }
    remote.getCurrentWindow().unmaximize();
  };
  const minimize = () => {
    remote.getCurrentWindow().minimize();
  };
  const close = () => {
    remote.getCurrentWindow().close();
  };
  const ContentViews: any = {
    variable: <WatchVariable />,
    post: <PostMan />,
    jsdebugger: <JsDebugger />,
    hook: <div />,
  };

  return (
    <div className={styles.app}>
      <div className={styles.actionsBar}>
        <div className={styles.actionBox}>
          <MinusOutlined
            className={styles.actionBox}
            onClick={() => minimize()}
            style={{ color: colorText }}
          />
        </div>
        <div className={styles.actionBox}>
          {isFullscreen ? (
            <FullscreenExitOutlined
              className={styles.actionBox}
              onClick={() => setFullScreen(false)}
              style={{ color: colorText }}
            />
          ) : (
            <FullscreenOutlined
              className={styles.actionBox}
              onClick={() => setFullScreen(true)}
              style={{ color: colorText }}
            />
          )}
        </div>
        <div className={styles.actionBox}>
          <CloseOutlined
            className={styles.actionBox}
            onClick={() => close()}
            style={{ color: colorText }}
          />
        </div>
      </div>
      <Layout
        className={styles.layoutBox}
        style={{
          height: '100vh',
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo}>{collapsed ? 'YR' : 'JS - DEBUGER'}</div>
          <Menu
            onClick={(e) => {
              setActiveMenu(e.key);
            }}
            selectedKeys={[activeMenu]}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: 'post',
                icon: <AlertOutlined />,
                label: 'POST调试',
              },
              {
                key: 'variable',
                icon: <VideoCameraOutlined />,
                label: '变量监听',
              },
              // {
              //   key: 'hook',
              //   icon: <UploadOutlined />,
              //   label: '注入hook',
              // },
              {
                key: 'jsdebugger',
                icon: <EditOutlined />,
                label: 'JS调试',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          {Object.keys(ContentViews).map((item, index) => (
            <Content
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              style={{
                display: item === activeMenu ? 'block' : 'none',
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              {ContentViews[item]}
            </Content>
          ))}
        </Layout>
      </Layout>
    </div>
  );
}
export default IndexPage;
