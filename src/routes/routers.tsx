import {createBrowserRouter} from 'react-router-dom';
import {Router} from '@remix-run/router';
import App from '@/App';
import Error from '@/pages/Error';
import Home from '@/pages/Home';
import News from '@/pages/News';
import Profile from '@/pages/Profile';

const routers: Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

export default routers;
