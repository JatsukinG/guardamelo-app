import { graphql } from '@gql'

const NoteQuery = graphql(`
  query Note($id: ID!) {
    note(id: $id) {
      ...Note
    }
  }
`)

export default NoteQuery