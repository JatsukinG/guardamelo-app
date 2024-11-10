import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Button } from 'flowbite-react'
import { formErrors } from '@constants'
import { FormField } from '@components'

interface Values {
  title: string
  content: string
}

const CreateNoteForm = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required(formErrors.required),
  })

  const initialValues: Values = {
    title: 'Nueva Nota',
    content: '',
  }

  const onSubmit = (values: Values) => {
    console.log(values)
  }

  return (
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
      >
        <Form noValidate className="flex flex-col gap-4">
          <FormField
              label="Titulo"
              name="title"
              className="max-w-sm"
          />
          <div>
            <Button color="purple" type="submit">
              Crear
            </Button>
          </div>
        </Form>
      </Formik>
  )
}

export default CreateNoteForm