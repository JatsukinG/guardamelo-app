import { HiHome } from 'react-icons/hi'
import { Breadcrumb } from 'flowbite-react'
import { useLocation } from 'react-router-dom'

const DashboardBreadcrumb = () => {
  const location = useLocation()
  const items = location.pathname.split('/').filter(n => n)

  return (
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item icon={HiHome}>
          Home
        </Breadcrumb.Item>
        {
          items.map(item => (
              <Breadcrumb.Item key={item}>
                {item}
              </Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
  )
}

export default DashboardBreadcrumb