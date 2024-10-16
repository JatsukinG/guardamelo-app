import { Avatar, Dropdown, Navbar, TextInput } from 'flowbite-react'

const MainNavbar = () => {
  return (
      <Navbar fluid rounded>
        <div className="w-full flex items-center justify-between">
          <div className="w-96">
            <TextInput
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