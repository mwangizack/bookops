import App from './App'
import ErrorPage from './pages/ErrorPage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Books from './pages/Books'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/books',
                element: <Books />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]

export default routes