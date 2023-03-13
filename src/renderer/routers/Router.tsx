import { RouteConfig } from 'react-router-config';
import JsDebuggerPage from '@/pages/JsDebuggerPage';
import PostManPage from '@/pages/PostManPage';
import WatchVariablePage from '@/pages/WatchVariablePage';
import IndexPage from 'renderer/Layout';

const routes: RouteConfig[] = [
  {
    path: '/postManPage',
    component: PostManPage,
  },
  {
    path: '/watchVariable',
    component: WatchVariablePage,
  },
  {
    path: '/jsdebugger',
    component: JsDebuggerPage,
  },
];

export default routes;
