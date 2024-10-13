import { createBrowserRouter, Outlet } from 'react-router-dom'
import NotFoundPage from '@/pages/404'
import AuthLayout from '@/layouts/auth'
import MainLayout from '@/layouts/main'
import HomePage from '@/pages/main/home'
import LoginPage from '@/pages/auth/login'

const router = createBrowserRouter([
  {
    path: 'auth',
    element: (
        <AuthLayout>
          <Outlet/>
        </AuthLayout>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage/>,
      },
    ],
  },
  {
    path: '',
    element: (
        <MainLayout>
          <Outlet/>
        </MainLayout>
    ),
    children: [{
      path: '',
      element: <HomePage/>,
    }],
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  },
])

export default router