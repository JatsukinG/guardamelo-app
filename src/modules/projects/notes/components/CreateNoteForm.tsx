import * as Yup from 'yup'
import { Button } from 'flowbite-react'
import { Field, Form, Formik } from 'formik'
import { FormField } from '@components'
import { formErrors } from '@constants'
import NoteEditorField from '@projects/notes/components/NoteEditorField'

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
          <Field
              name="content"
              component={NoteEditorField}
              label="Contenido"
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