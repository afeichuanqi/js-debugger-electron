import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from '@/routers/Router';
import { ConfigProvider, theme } from 'antd';
import { PostContainer } from '@/context/usePost';
import styles from './App.scss';
import 'antd/dist/reset.css';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <PostContainer.Provider>
        <div className={styles.app}>
          <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </div>
      </PostContainer.Provider>
    </ConfigProvider>
  );
}
