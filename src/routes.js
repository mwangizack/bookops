import App from './App'
import ErrorPage from './pages/ErrorPage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

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
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default routes