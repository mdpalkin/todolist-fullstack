import { createBrowserRouter, RouterProvider } from 'react-router'
import {Layout} from '@/widgets/layout'
import { Main } from '@/pages/main'

function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />
      }
    ]    
  }
])

  return (
    <RouterProvider router={router} />
  )
}

export default App
