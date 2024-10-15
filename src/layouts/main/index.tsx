import type { FC, PropsWithChildren } from 'react'
import MainNavbar from '@/layouts/main/components/navbar'
import MainSidebar from '@/layouts/main/components/sidebar'
import DashboardBreadcrumb from '@/layouts/main/components/DashboardBreadcrumb'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <main className="relative bg-purple-50 h-screen flex">
        <MainSidebar/>
        <div className="flex-1 flex flex-col">
          <MainNavbar/>
          <div className="py-2 px-4">
            <DashboardBreadcrumb/>
          </div>
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </main>
  )
}

export default MainLayout