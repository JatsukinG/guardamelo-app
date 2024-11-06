import type { FieldProps } from 'formik'
import type { ComponentType, FC, InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import { Label, TextInput } from 'flowbite-react'
import { FormError } from '@components'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  as?: ComponentType | ComponentType<FieldProps>
  children?: ReactNode
  className?: string
  component?: ComponentType | ComponentType<FieldProps>
  label: string
  name: string
  pattern?: string
  placeholder?: string
  type?: string
  handleChange?: (contactId: string) => void
  defaultValue?: string | number | readonly string[] | undefined | object
  isMulti?: boolean
}

const FormField: FC<Props> = ({
                                as,
                                className,
                                component,
                                label,
                                name,
                                placeholder,
                                type = 'text',
                                ...rest
                              }) => {
  return (
      <div
          className={clsx([
            className,
          ])}>
        <Label htmlFor={name}>
          {label}
        </Label>
        <div className="mt-1">
          <Field
              id={name}
              name={name}
              placeholder={placeholder}
              type={type}
              {...{ ...(component ? { component } : { as: as ?? TextInput }) }}
              {...rest}
          />
        </div>
        <ErrorMessage name={name} component={FormError}/>
      </div>
  )
}

export default FormField