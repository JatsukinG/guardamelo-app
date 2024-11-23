import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { HiInformationCircle } from 'react-icons/hi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Alert, Button, Checkbox, Label } from 'flowbite-react'
import { useAuth } from '@auth/hooks'
import { formErrors } from '@constants'
import AuthFormField from '@auth/components/AuthFormField'
import { emailValidation } from '@snippets/forms/validations'
import tokenAuthMutation from '@auth/mutations/tokenAuthMutation'

interface Values {
  email: string
  password: string
}

const LoginForm = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [tokenAuth, { loading, error }] = useMutation(tokenAuthMutation, {
    onCompleted: (data) => {
      const from = searchParams.get('from')
      const authToken = data?.tokenAuth?.token
      if (authToken) {
        login(authToken)
        navigate(from ? from : '/')
      }
    },
  })

  const validationSchema = Yup.object({
    email: Yup.string().required(formErrors.required).matches(
        emailValidation,
        formErrors.email,
    ),
    password: Yup.string().required(formErrors.required),
  })

  const initialValues: Values = {
    email: import.meta.env.VITE_EMAIL ?? '',
    password: import.meta.env.VITE_PASSWORD ?? '',
  }

  const onSubmit = async (values: Values) => {
    await tokenAuth({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
  }

  return (
      <div className="w-full flex flex-col gap-4">
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
          <Form noValidate className="flex flex-col gap-4">
            {
                error &&
                <Alert
                    color="failure"
                    className="mb-3"
                    icon={HiInformationCircle}>
                  {error.message}
                </Alert>
            }
            <AuthFormField
                label="Correo electrónico"
                name="email"
            />
            <AuthFormField
                label="Contraseña"
                name="password"
                type="password"
            />
            <div className="flex items-center gap-2">
              <Checkbox color="dark" id="remember-me"/>
              <Label htmlFor="remember-me">Recuerdame</Label>
            </div>
            <Button
                isProcessing={loading}
                color="purple" type="submit">
              Ingresar
            </Button>
            <div>
              <p className="inline">No tienes cuenta?.&nbsp;</p>
              <a href="#" className="link">regístrate</a>
            </div>
          </Form>
        </Formik>
      </div>
  )
}

export default LoginForm