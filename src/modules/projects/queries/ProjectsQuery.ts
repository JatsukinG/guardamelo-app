import { graphql } from '@gql'

const ProjectsQuery = graphql(`
  query Projects {
    projects {
        edges {
          node {
            id
            name
            description
          }
        }
    }
  }
`)

export default ProjectsQuery