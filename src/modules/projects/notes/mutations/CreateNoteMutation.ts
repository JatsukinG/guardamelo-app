import { graphql } from '@gql'

const CreateNoteMutation = graphql(`
  mutation CreateNote($input: CreateNoteInput!) {
    createNote(input: $input) {
      note {
        ...Note
      }
    }
  }
`)

export default CreateNoteMutation