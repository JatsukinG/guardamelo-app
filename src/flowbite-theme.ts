import type { CustomFlowbiteTheme } from 'flowbite-react'
import clsx from 'clsx'

const flowbiteTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      blue: 'text-white bg-blue-light hover:bg-blue-dark focus:ring-4 focus:ring-blue-300 dark:bg-blue-light dark:hover:bg-blue-dark dark:focus:ring-blue-300',
      green: 'text-green-100 dark:text-green-50 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-blue-300',
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
  sidebar: {
    root: {
      base: 'flex flex-col flex-shrink-0 h-full duration-75 lg:flex transition-width',
      inner: 'h-full overflow-y-auto overflow-x-hidden bg-white/60 px-4 py-4 dark:bg-gray-800',
    },
    item: {
      base: clsx([
        'flex items-center gap-2 rounded-xl pl-4 pr-2 py-1.5 text-base font-medium text-gray-400',
        'hover:bg-purple-100 dark:text-white dark:hover:bg-gray-700 duration-300',
      ]),
      active: clsx([
        'relative text-white hover:bg-purple-600 dark:bg-purple-700 overflow-hidden',
        'bg-gradient-to-br from-purple-400 to-purple-500',
        'after:absolute after:-left-5 after:rotate-45',
        'after:content-[\'\'] after:w-6 after:h-6 after:rounded-lg after:bg-purple-50',
      ]),
      icon: {
        base: 'h-5 w-5 flex-shrink-0 text-gray-400',
        active: 'text-white',
      },
      content: {
        base: 'max-w-full truncate',
      },
    },
    collapse: {
      button:
          'group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
    },
  },
  navbar: {
    root: {
      base: 'bg-transparent px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          gray: 'border-none bg-white shadow-md text-gray-900 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-purple-500'
        }
      }
    }
  }
}

export default flowbiteTheme