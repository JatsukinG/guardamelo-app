import { graphql } from '@gql'

const register = graphql(`
  mutation RegisterMutation($input: CreateUserInput!) {
    createUser(input: $input){
      user {
        id
        firstName
        lastName
      }
    }
  }
`)

export default register