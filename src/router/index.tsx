import { createBrowserRouter, Outlet } from 'react-router-dom'
import NotFoundPage from '@/pages/404'
import AuthLayout from '@/layouts/auth'
import MainLayout from '@/layouts/main'
import HomePage from '@/pages/main/home'
import LoginPage from '@/pages/auth/login'
import ProjectsPage from '@/pages/projects'
import ResourcesPage from '@/pages/resources'
import NotesPage from '@/pages/projects/notes'
import NotePage from '@/pages/projects/notes/note'
import ResourcePage from '@/pages/resources/resource'
import CreateNotePage from '@/pages/projects/notes/create'

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
    children: [
      {
        path: '',
        element: <HomePage/>,
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            element: <ProjectsPage/>,
          },
          {
            path: ':id',
            children: [
              {
                path: 'notes',
                children: [
                  {
                    path: '',
                    element: <NotesPage/>,
                  },
                  {
                    path: ':id',
                    element: <NotePage/>,
                  },
                  {
                    path: 'create',
                    element: <CreateNotePage/>,
                  },
                ],
              },
            ],
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