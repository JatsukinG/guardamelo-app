import type { ComponentType, FC, InputHTMLAttributes } from 'react'
import type { FieldProps } from 'formik'
import { useState } from 'react'
import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { CustomFlowbiteTheme, Label, TextInput } from 'flowbite-react'
import { FormError } from '@components'

interface CustomProps {
  as?: ComponentType | ComponentType<FieldProps>
  label: string
  name: string
  type?: string
  className?: string
  placeholder?: string
  component?: ComponentType | ComponentType<FieldProps>
}

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'name' | 'type'>, CustomProps {
}

//TODO extend color "transparent" for this in flowbite config
const customTheme: CustomFlowbiteTheme['textInput'] = {
  field: {
    input: {
      colors: {
        gray: 'border-none bg-white/50 shadow-md text-gray-900 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:ring-purple-500',
      },
    },
  },
}

const AuthFormField: FC<Props> = ({ as, label, name, component, type = 'text', className, placeholder, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
      <div
          className={clsx([
            'flex flex-col gap-y-1',
            className,
          ])}>
        <Label htmlFor={name} className="font-semibold">{label}</Label>
        <div className="relative">
          <Field
              id={name}
              name={name}
              placeholder={placeholder}
              theme={customTheme}
              type={showPassword ? 'text' : type}
              {...{ ...(component ? { component } : { as: as ?? TextInput }) }}
              {...rest}
          />
          {
              type === 'password' &&
              <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="p-2 absolute inset-y-0 right-0 flex items-center justify-center focus:outline-none">
                {showPassword ? <HiEyeOff className="h-5 w-5"/> : <HiEye className="h-5 w-5"/>}
              </button>
          }
        </div>
        <ErrorMessage name={name}>
          {(errorValue) =>
              <FormError>{errorValue}</FormError>
          }
        </ErrorMessage>
      </div>
  )
}

export default AuthFormField