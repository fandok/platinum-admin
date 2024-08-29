import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/signin/signin';
import DashboardMain from './pages/Dashboard';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/', element: <DashboardMain /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
