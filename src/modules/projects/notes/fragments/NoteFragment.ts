import { graphql } from '@gql'

const NoteFragment = graphql(`
  fragment Note on NoteNode {
    id
    title
    content
    createdAt
    updatedAt
  }
`)

export default NoteFragment