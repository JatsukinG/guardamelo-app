import { graphql } from '@gql'

const NotesQuery = graphql(`
  query Notes($projectId: String!) {
    notes(projectId: $projectId) {
      edges {
        node {
          ...Note
        }
      }
    }
  }
`)

export default NotesQuery