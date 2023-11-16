import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
  },
  {
    path: 'task-list',
    element: <h1>Task List</h1>,
  },
  {
    path: 'task-progress',
    element: <h1>Task Progress</h1>,
  },
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
