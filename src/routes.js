import App from './App'
import ErrorPage from './pages/ErrorPage'

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
                path: 'view-books',
                element: <ViewBooks />
            }
        ]
    }
]

export default routes