import { createBrowserRouter, Outlet } from 'react-router-dom'
import AuthLayout from '../layouts/auth'
import LoginPage from '../pages/auth/login.tsx'

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
])

export default router