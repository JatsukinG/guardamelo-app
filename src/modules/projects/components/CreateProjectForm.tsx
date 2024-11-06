import type { FC } from 'react'
import type { CreateProjectInput } from '@types'
import { Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import CreateProjectMutation from '@projects/mutations/CreateProjectMutation'
import { FormField } from '@components'

interface Props {
  onSuccess?: () => void
}

const CreateProjectForm: FC<Props> = ({ onSuccess }) => {
  const [createProject] = useMutation(CreateProjectMutation)

  const initialValues: CreateProjectInput = {
    name: '',
  }

  const onSubmit = async (values: CreateProjectInput) => {
    await createProject({
      variables: {
        input: values,
      },
      onCompleted: (data) => {
        if (data.createProject?.project) {
          onSuccess?.()
        }
      },
    })
  }

  return (
      <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
      >
        <Form id="create-project-form">
          <FormField label="Nombre" name="name"/>
          <FormField label="Descripción" name="description"/>
        </Form>
      </Formik>
  )
}

export default CreateProjectForm