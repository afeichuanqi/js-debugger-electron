import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from '@/routers/Router';

export default function App() {
  return (
    <div>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </div>
  );
}
