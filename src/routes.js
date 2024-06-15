import App from './App'
import ErrorPage from './pages/ErrorPage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Books from './pages/Books'
import Categories from './pages/Categories'
import LowStock from './pages/LowStock'

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
                path: '/login',
                element: <Login />
            },
            {
                path: '/books',
                element: <Books />
            },
            {
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/reorder',
                element: <LowStock />
            },
        ]
    }
]

export default routes