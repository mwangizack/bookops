import App from './App'
import ErrorPage from './pages/ErrorPage'
import Dashboard from './pages/Dashboard'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    }
]

export default routes