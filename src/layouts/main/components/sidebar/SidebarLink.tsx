import type { FC, PropsWithChildren } from 'react'
import { Sidebar, type  SidebarItemProps } from 'flowbite-react'
import { useLinkClickHandler, useLocation } from 'react-router-dom'

interface Props extends SidebarItemProps {
  active?: boolean
  href: string
  id?: string
  onClick?: () => void
}

const SidebarLink: FC<PropsWithChildren<Props>> = ({ active = false, id, href, icon, children }) => {
  const location = useLocation()
  const clickHandler = useLinkClickHandler(href)

  return (
      <Sidebar.Item
          id={id}
          href={href}
          icon={icon}
          active={active}
          className={
            location.pathname === href ? 'bg-gray-100 dark:bg-gray-700' : ''
          }
          onClick={clickHandler}
      >
        {children}
      </Sidebar.Item>
  )
}

export default SidebarLink