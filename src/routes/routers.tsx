import { createBrowserRouter } from 'react-router-dom'
import { Router } from '@remix-run/router'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Error from '@/pages/Error'

const routers: Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'news',
        element: <News />,
      },
    ],
  },
])

export default routers
