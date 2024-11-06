import NiceModal from '@ebay/nice-modal-react'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import client from '@/client'
import router from '@/router'
import { FlowbiteWrapper } from '@components'

function App() {
  return (
      <FlowbiteWrapper>
        <ApolloProvider client={client}>
          <NiceModal.Provider>
            <RouterProvider router={router}/>
          </NiceModal.Provider>
        </ApolloProvider>
      </FlowbiteWrapper>
  )
}

export default App
