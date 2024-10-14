import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Button, Checkbox, Label } from 'flowbite-react'
import { formErrors } from '@constants'
import AuthFormField from '@auth/components/AuthFormField'
import { emailValidation } from '@snippets/forms/validations'

interface Values {
  username: string
  password: string
}

const LoginForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required(formErrors.required).matches(
        emailValidation,
        formErrors.email,
    ),
    password: Yup.string().required(formErrors.required),
  })

  const initialValues: Values = {
    username: import.meta.env.VITE_EMAIL ?? '',
    password: import.meta.env.VITE_PASSWORD ?? '',
  }

  const onSubmit = (values: Values) => {
    console.log(values)
  }

  return (
      <div className="w-full flex flex-col gap-4">
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
          <Form noValidate className="flex flex-col gap-4">
            <AuthFormField
                label="Usuario"
                name="username"
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
            <Button color="purple" type="submit">
              Ingresar
            </Button>
            <div>
              <p className="inline">No tienes cuenta?.&nbsp;</p>
              <a href="#" className="text-blue-500 underline">regístrate</a>
            </div>
          </Form>
        </Formik>
      </div>
  )
}

export default LoginForm