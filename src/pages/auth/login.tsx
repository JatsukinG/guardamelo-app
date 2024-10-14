import LoginForm from '@auth/components/LoginForm'

const LoginPage = () => {
  return (
      <div className="p-8 flex h-full">
        <div className="w-full m-auto">
          <h1 className="mb-8 text-center font-bold text-2xl text-purple-900">
            Ingresar
          </h1>
          <LoginForm/>
        </div>
      </div>
  )
}

export default LoginPage