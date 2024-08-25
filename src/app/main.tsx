import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../pages/Home/index.ts'
import { ZodiacPage } from '../pages/ZodiacPage'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />,

  },
  {
    path: '/:zodiac',
    element: <ZodiacPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
