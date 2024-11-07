import { graphql } from '@gql'

const DocumentFragment = graphql(`
  fragment Document on DocumentNode {
    id
    title
    content
    createdAt
    updatedAt
  }
`)

export default DocumentFragment