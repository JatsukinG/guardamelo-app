import { Avatar, CustomFlowbiteTheme, Dropdown, Navbar, TextInput } from 'flowbite-react'

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
                    rounded
                    alt="User settings"
                    placeholderInitials="AN"
                    // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                />
              }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
  )
}

export default MainNavbar