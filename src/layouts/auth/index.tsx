import type { FC, PropsWithChildren } from 'react'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="w-full min-h-screen flex bg-purple-50">
        <div className="max-w-3xl m-auto bg-purple-100 rounded-2xl p-2 grid md:grid-cols-2">
          <div className="hidden md:block">
            <img
                alt="login"
                src="/images/login.jpg"
                className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
  )
}

export default AuthLayout