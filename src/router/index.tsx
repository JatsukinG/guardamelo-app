import { createBrowserRouter, Outlet } from 'react-router-dom'
import NotFoundPage from '@/pages/404'
import AuthLayout from '@/layouts/auth'
import MainLayout from '@/layouts/main'
import HomePage from '@/pages/main/home'
import LoginPage from '@/pages/auth/login'
import ProjectsPage from '@/pages/projects'
import ResourcesPage from '@/pages/resources'
import ProjectPage from '@/pages/projects/project'
import ResourcePage from '@/pages/resources/resource'
import AuthProvider from '@auth/contexts/AuthProvider'
import MeProvider from '@auth/contexts/MeProvider'
import ProtectedRoutes from '@/router/ProtectedRoutes'

const router = createBrowserRouter([
  {
    path: 'auth',
    element: (
        <AuthProvider>
          <AuthLayout>
            <Outlet/>
          </AuthLayout>
        </AuthProvider>
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
        <AuthProvider>
          <MeProvider>
            <MainLayout>
              <ProtectedRoutes/>
            </MainLayout>
          </MeProvider>
        </AuthProvider>
    ),
    children: [
      {
        path: '',
        element: <HomePage/>,
      },
      {
        path: '/projects',
        children: [
          {
            path: '',
            element: <ProjectsPage/>,
          },
          {
            path: ':id',
            element: <ProjectPage/>,
          },
        ],
      },
      {
        path: 'resources',
        children: [
          {
            path: '',
            element: <ResourcesPage/>,
          },
          {
            path: ':resourceId',
            element: <ResourcePage/>,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  },
])

export default router