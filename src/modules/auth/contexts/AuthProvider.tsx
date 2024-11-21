import type { FC, PropsWithChildren } from 'react'
import client, { authTokenReactiveVar } from '@/client'
import { useRecoilState, useResetRecoilState } from 'recoil'
import AuthContext from '@auth/contexts/AuthContext'
import authTokenState from '@auth/atoms/authTokenState'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authToken, setAuthToken] = useRecoilState(authTokenState)
  const resetAuthToken = useResetRecoilState(authTokenState)
  const isAuthenticated = authToken !== undefined

  const login = (tokenAuth: string) => {
    authTokenReactiveVar(JSON.stringify(tokenAuth))
    setAuthToken(() => tokenAuth)
  }

  const logout = () => {
    resetAuthToken()
    client.clearStore()
  }

  return (
      <AuthContext.Provider
          value={{
            authToken,
            isAuthenticated,
            login,
            logout,
          }}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider