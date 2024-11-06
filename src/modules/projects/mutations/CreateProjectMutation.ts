import { graphql } from '@gql'

const CreateProjectMutation = graphql(`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      project {
        ...Project
      }
    }
  }
`)

export default CreateProjectMutation