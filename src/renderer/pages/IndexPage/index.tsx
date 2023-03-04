import React, { useEffect, useMemo, useState } from 'react';
import drag from '@/utils/drag.js';
import * as remote from '@electron/remote';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  AlertOutlined,
  VideoCameraOutlined,
  MinusOutlined,
  FullscreenOutlined,
  CloseOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import WatchVariable from '../components/watchVariable';
import styles from './index.scss';

const { Header, Sider, Content } = Layout;

function IndexPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('1');
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken();
  useEffect(() => {
    let clear = () => {};
    try {
      document
        .getElementsByClassName('ant-layout-header')[0]
        .setAttribute('id', 'drag-box');
      clear = drag('drag-box');
    } catch (error) {
      console.log(error);
    }

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
    post: <div />,
    hook: <div />,
  };

  return (
    <div className={styles.app}>
      <div className={styles.actionsBar}>
        <div className={styles.actionBox}>
          <MinusOutlined
            onClick={() => minimize()}
            style={{ color: colorText }}
          />
        </div>
        <div className={styles.actionBox}>
          {isFullscreen ? (
            <FullscreenExitOutlined
              onClick={() => setFullScreen(false)}
              style={{ color: colorText }}
            />
          ) : (
            <FullscreenOutlined
              onClick={() => setFullScreen(true)}
              style={{ color: colorText }}
            />
          )}
        </div>
        <div className={styles.actionBox}>
          <CloseOutlined onClick={() => close()} style={{ color: colorText }} />
        </div>
      </div>
      <Layout
        style={{
          height: '100vh',
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo}>JS - DEBUGER</div>
          <Menu
            onClick={(e) => {
              setActiveMenu(e.key);
            }}
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
              {
                key: 'hook',
                icon: <UploadOutlined />,
                label: '注入hook',
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
          {Object.keys(ContentViews).map((item) => (
            <Content
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
