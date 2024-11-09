import { RecoilRoot } from 'recoil'
import { Toaster } from 'react-hot-toast'
import NiceModal from '@ebay/nice-modal-react'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import client from '@/client'
import router from '@/router'
import { FlowbiteWrapper } from '@components'

function App() {
  return (
      <FlowbiteWrapper>
        <RecoilRoot>
          <ApolloProvider client={client}>
            <NiceModal.Provider>
              <RouterProvider router={router}/>
            </NiceModal.Provider>
          </ApolloProvider>
        </RecoilRoot>
        <Toaster/>
      </FlowbiteWrapper>
  )
}

export default App
