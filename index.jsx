import { createRoot } from 'react-dom/client'
import App from './App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/components/home'
import Countrydetail from './assets/components/countrydetail'

const root = createRoot(document.querySelector('#root'))

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/:country',
                element: <Countrydetail />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)