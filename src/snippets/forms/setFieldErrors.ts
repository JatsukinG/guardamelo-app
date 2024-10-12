import { RefObject } from 'react'
import { FormikProps } from 'formik'

type Data = {
  [key: string]: string
}

const setFieldErrors = <T>(
    values: object,
    data: Data,
    formikRef: RefObject<FormikProps<T>>,
): void => {
  const dataKeys = Object.keys(data)
  const valueKeys = Object.keys(values)

  if (formikRef.current) {
    for (const element of dataKeys) {
      if (valueKeys.includes(element)) {
        formikRef.current.setFieldError(element, data[element])
      }
    }
  }
}

export default setFieldErrors