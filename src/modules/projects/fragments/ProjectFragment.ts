import { graphql } from '@gql'

const ProjectFragment = graphql(`
  fragment Project on ProjectNode {
    id
    name
    description
    createdAt
    updatedAt
  }
`)

export default ProjectFragment