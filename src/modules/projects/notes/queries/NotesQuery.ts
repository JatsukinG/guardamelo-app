import { graphql } from '@gql'

const NotesQuery = graphql(`
  query Notes {
    notes {
      edges {
        node {
          ...Note
        }
      }
    }
  }
`)

export default NotesQuery