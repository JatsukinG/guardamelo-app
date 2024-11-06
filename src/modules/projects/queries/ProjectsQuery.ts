import { graphql } from '@gql'

const ProjectsQuery = graphql(`
  query Projects {
    projects {
      edges {
        node {
          ...Project
        }
      }
    }
  }
`)

export default ProjectsQuery