import * as Yup from 'yup'
import { formErrors } from '@constants'

export const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
export const numberValidation = /^[0-9]+$/

export const descriptionSchema = Yup.array().of(
    Yup.object().shape({
      type: Yup.string().oneOf(['paragraph']).required(),
      children: Yup.array().of(
          Yup.object().shape({
            text: Yup.string().required(formErrors.required),
            type: Yup.string().oneOf(['text']).required(),
          }),
      ).required(),
    }),
)
