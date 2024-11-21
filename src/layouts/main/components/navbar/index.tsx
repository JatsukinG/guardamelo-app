import { Avatar, CustomFlowbiteTheme, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { useAuth, useMe } from '@auth/hooks'

//TODO extend color "transparent" for this in flowbite config
const customTheme: CustomFlowbiteTheme['textInput'] = {
  field: {
    input: {
      colors: {
        gray: 'border-none bg-white/50 shadow-md text-gray-900 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-purple-500',
      },
    },
  },
}

const MainNavbar = () => {
  const me = useMe()
  const { logout } = useAuth()

  const getPlaceholderInitials = (): string => {
    const firstInitial = me?.firstName?.[0] ?? me?.lastName?.[0] ?? me?.email?.[0] ?? ''
    const secondInitial = me?.firstName && me?.lastName ? me.lastName[0] :
        me?.firstName?.[1] ?? me?.lastName?.[1] ?? me?.email?.[1] ?? ''

    return (firstInitial + secondInitial).toUpperCase()
  }

  return (
      <Navbar fluid rounded>
        <div className="w-full flex items-center justify-between">
          <div className="w-96">
            <TextInput
                theme={customTheme}
                placeholder="Buscar cosas..."
            />
          </div>
          <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                    placeholderInitials={getPlaceholderInitials()}
                    rounded
                />
              }
          >
            <Dropdown.Header>
              {
                  me?.firstName && me?.lastName &&
                  <span className="block truncate text-sm">{`${me.firstName} ${me.lastName}`}</span>
              }
              <span className="block truncate text-sm font-medium">{me?.email}</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item onClick={logout}>
              <p className="ml-2">Cerrar sesión</p>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
  )
}

export default MainNavbar