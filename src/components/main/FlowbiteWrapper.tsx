import type { FC, PropsWithChildren } from 'react'
import { useEffect } from 'react'
import { Flowbite, useThemeMode } from 'flowbite-react'
import theme from '@/flowbite-theme'

const FlowbiteWrapper: FC<PropsWithChildren> = ({ children }) => {
  const dark = localStorage.getItem('theme') === 'dark'

  return (
      <Flowbite theme={{ mode: dark ? 'dark' : 'light', theme }}>
        <PersistFlowbiteThemeToLocalStorage/>
        {children}
      </Flowbite>
  )
}

const PersistFlowbiteThemeToLocalStorage: FC = function () {
  const { mode } = useThemeMode()

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  return <></>
}

export default FlowbiteWrapper