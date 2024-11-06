import { graphql } from '@gql'

const UpdateProjectMutation = graphql(`
  mutation UpdateProject($input: UpdateProjectInput!) {
    updateProject(input: $input) {
      project {
        ...Project
      }
    }
  }
`)

export default UpdateProjectMutation