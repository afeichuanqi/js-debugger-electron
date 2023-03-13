import { BrowserRouter } from 'react-router-dom';
import routes from '@/routers/Router';
import Layout from 'renderer/Layout';
import { ConfigProvider, theme } from 'antd';
import React from 'react';
import { renderRoutes } from './utils/routerConfig';
import styles from './App.scss';
import 'antd/dist/reset.css';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <BrowserRouter>
        <div className={styles.app}>
          <Layout>{renderRoutes(routes)}</Layout>
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}
