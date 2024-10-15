import type { IconType } from 'react-icons'
import { FaHome } from 'react-icons/fa'
import { Sidebar } from 'flowbite-react'
import { TbLogin2 } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoIosSettings } from 'react-icons/io'
import { MdLibraryBooks } from 'react-icons/md'
import { GoFileDirectoryFill } from 'react-icons/go'

interface Item {
  name: string
  icon: IconType
  to: string
}

const items: Item[] = [
  {
    name: 'Inicio',
    icon: FaHome,
    to: '/',
  },
  {
    name: 'Mis proyectos',
    icon: GoFileDirectoryFill,
    to: '/projects',
  },
  {
    name: 'Recursos',
    icon: MdLibraryBooks,
    to: '/resources',
  },
  {
    name: 'Configuración',
    icon: IoIosSettings,
    to: '/settings',
  },
]

const MainSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
      <Sidebar>
        <Sidebar.Logo href="/" img="/logos/GUARDAMELO.svg" className="px-12"/>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {
              items.map(item => (
                  <Sidebar.Item
                      key={item.name}
                      href={item.to}
                      icon={item.icon}
                      active={item.to === location.pathname}
                  >
                    {item.name}
                  </Sidebar.Item>
              ))
            }
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.CTA>
          <button
              className="text-gray-500 font-bold flex items-center"
              onClick={() => navigate('/auth/login')}>
            <TbLogin2 className="me-2" size={24}/>
            <span>Iniciar sesión</span>
          </button>
        </Sidebar.CTA>
      </Sidebar>
  )
}

export default MainSidebar