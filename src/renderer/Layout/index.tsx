import React, { useEffect, useRef, useState } from 'react';
import drag from '@/utils/drag.js';
import { ipcRenderer } from 'electron';
import { useHistory, useLocation } from 'react-router-dom';
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
import styles from './index.scss';

const { Header, Sider, Content, Footer } = Layout;
function IndexPage(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('post');
  const histroy = useHistory();
  const location = useLocation();
  const dataRef = useRef({ isCreateSubRender: false });
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken();
  useEffect(() => {
    if (location.pathname && location.pathname.indexOf('index.html') > -1) {
      histroy.push('/postManPage');
    }
  }, []);
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
        <Sider
          trigger={
            <div>
              <div>{collapsed ? '1.0.0' : 'Version: 1.0.0'}</div>
            </div>
          }
          collapsible
          collapsed={collapsed}
        >
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
                onClick: () => histroy.push('/postManPage'),
              },
              {
                key: 'variable',
                icon: <VideoCameraOutlined />,
                label: '变量监听',
                onClick: () => {
                  histroy.push('/watchVariable');
                  if (!dataRef.current.isCreateSubRender) {
                    ipcRenderer.send('createSubRender');
                    dataRef.current.isCreateSubRender = true;
                  }
                },
              },
              {
                key: 'jsdebugger',
                icon: <EditOutlined />,
                label: 'JS调试',
                onClick: () => histroy.push('/jsdebugger'),
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
          <Content
            style={{
              background: colorBgContainer,
            }}
            className={styles.contentStyle}
          >
            {props?.children || null}
            {/* {ContentViews[item]} */}
          </Content>
          {/* {Object.keys(ContentViews).map((item, index) => (

          ))} */}
        </Layout>
      </Layout>
    </div>
  );
}
export default IndexPage;
