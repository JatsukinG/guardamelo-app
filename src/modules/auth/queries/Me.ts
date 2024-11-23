import { graphql } from '@gql'

const Me = graphql(`
  query Me {
    me {
      id
      firstName
      lastName
      email
      isActive
      phone
    }
  }
`)

export default Me