import { graphql } from '@gql'

const DocumentsQuery = graphql(`
  query Documents {
    documents {
      edges {
        node {
          ...Document
        }
      }
    }
  }
`)

export default DocumentsQuery