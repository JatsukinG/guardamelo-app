import { createContext } from 'react'

interface AuthContext {
  authToken?: string
  isAuthenticated: boolean
  login: (tokenAuth: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContext | null>(null)

export default AuthContext