import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import client from '@/client'
import router from '@/router'
import { FlowbiteWrapper } from '@components'

function App() {
  return (
      <FlowbiteWrapper>
        <ApolloProvider client={client}>
          <RouterProvider router={router}/>
        </ApolloProvider>
      </FlowbiteWrapper>
  )
}

export default App
