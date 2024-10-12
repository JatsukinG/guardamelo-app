import type { CustomFlowbiteTheme } from 'flowbite-react'

const flowbiteTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      blue: 'text-white bg-blue-light hover:bg-blue-dark focus:ring-4 focus:ring-blue-300 dark:bg-blue-light dark:hover:bg-blue-dark dark:focus:ring-blue-300',
      green:'text-green-100 dark:text-green-50 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-blue-300',
    },
    inner: {
      base: 'flex items-center transition-all duration-200',
    },
    outline: {
      color: {
        gray: 'border border-gray-200 dark:border-gray-500',
      },
    },
  },
}

export default flowbiteTheme