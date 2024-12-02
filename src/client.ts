import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, makeVar } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'
import { AUTH_TOKEN_KEY } from '@auth/constants'

export const authTokenReactiveVar = makeVar(localStorage.getItem(AUTH_TOKEN_KEY))

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_GRAPHQL_URL,
})

const authLink = new ApolloLink((operation, forward) => {
  const authToken = authTokenReactiveVar()

  if (authToken) {
    const parsedAuthToken = JSON.parse(authToken)
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `JWT ${parsedAuthToken}`,
      },
    }))
  }

  return forward(operation)
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          projects: relayStylePagination([]),
          notes: relayStylePagination([]),
        },
      },
    },
  }),
  devtools: {
    enabled: true,
  },
})

export default client