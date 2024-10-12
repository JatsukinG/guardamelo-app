import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { FlowbiteWrapper } from '@components'

function App() {
  return (
      <FlowbiteWrapper>
        <RouterProvider router={router}/>
      </FlowbiteWrapper>
  )
}

export default App
