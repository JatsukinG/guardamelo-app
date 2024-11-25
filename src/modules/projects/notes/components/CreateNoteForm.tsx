import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { Button } from 'flowbite-react'
import { Field, Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { useFragment } from '@gql'
import { FormField } from '@components'
import { formErrors } from '@constants'
import NotesQuery from '@projects/notes/queries/NotesQuery'
import NoteFragment from '@projects/notes/fragments/NoteFragment'
import NoteEditorField from '@projects/notes/components/NoteEditorField'
import CreateNoteMutation from '@projects/notes/mutations/CreateNoteMutation'

interface Values {
  title: string
  content: string
}

const CreateNoteForm = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const [createNote, { loading }] = useMutation(CreateNoteMutation, {
    onCompleted: data => {
      if (data.createNote?.note) {
        toast.success('¡La nota se ha creado con éxito!')
        navigate(`/projects/${projectId}/notes`)
      }
    },
    onError: (error) => {
      console.log(error.message)
      toast.error('Error al crear la nota :(')
    },
  })

  const validationSchema = Yup.object({
    title: Yup.string().required(formErrors.required),
    content: Yup.string().required(formErrors.required),
  })

  const initialValues: Values = {
    title: 'Nueva Nota',
    content: '',
  }

  const onSubmit = async (values: Values) => {
    if (projectId)
      await createNote({
        variables: {
          input: {
            projectId: projectId,
            title: values.title,
            content: values.content,
          },
        },
        update: (cache, { data }) => {
          const newNote = data?.createNote?.note
          if (!newNote) return

          cache.updateQuery({ query: NotesQuery }, (oldData) => ({
            ...oldData,
            notes: {
              ...oldData?.notes,
              edges: [
                {
                  __typename: 'NoteNodeEdge',
                  node: { ...useFragment(NoteFragment, newNote) },
                },
                ...oldData?.notes?.edges,
              ],
            },
          }))
        },
      })
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
            <Button
                isProcessing={loading}
                disabled={loading}
                color="purple"
                type="submit">
              {loading ? 'Creando...' : 'Crear'}
            </Button>
          </div>
        </Form>
      </Formik>
  )
}

export default CreateNoteForm