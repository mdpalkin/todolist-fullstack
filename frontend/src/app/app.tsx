import { createBrowserRouter, RouterProvider } from 'react-router'
import {Layout} from '@/widgets/layout'
import { Tasks } from '@/pages/tasks'
import { Todolists } from '@/pages/todolists/ui'

function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'tasks/:id',
        element: <Tasks />
      },
      {
        index: true,
        element: <Todolists />
      }
    ]
  }
])

  return (
    <RouterProvider router={router} />
  )
}

export default App
