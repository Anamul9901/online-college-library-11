import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AddBook from "../page/AddBook/AddBook";
import AllBook from "../page/AllBook/AllBook";
import BorrBooks from "../page/BorrBooks/BorrBooks";
import Login from "../page/Login/Login";
import SignIn from "../page/SignIn/SignIn";
import AllBooksNav from "../page/AllBooksNav/AllBooksNav";
import FilterBooks from "../page/FilterBooks/FilterBooks";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import SignlBook from "../page/SignlBook/SignlBook";
import ReadBook from "../page/ReadBook/ReadBook";
import UpdateAllBook from "../page/AllBooksNav/UpdateAllBook";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: () => fetch('https://assignment-11-server-rosy-theta.vercel.app/users'),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://assignment-11-server-rosy-theta.vercel.app/categori')
            },
            {
                path: '/add-book',
                element: <PrivetRoutes><AddBook /></PrivetRoutes>,
            },
            {
                path: '/books/:id',
                element: <AllBook />,
                loader: () => fetch('https://assignment-11-server-rosy-theta.vercel.app/books')
            },
            {
                path: '/borrowed-book',
                element: <PrivetRoutes><BorrBooks /></PrivetRoutes>,
                loader: () => fetch('https://assignment-11-server-rosy-theta.vercel.app/books')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/all-books',
                element: <PrivetRoutes><AllBooksNav /></PrivetRoutes>,
                loader: () => fetch('https://assignment-11-server-rosy-theta.vercel.app/books')
            },
            {
                path: '/all-bools',
                element: <PrivetRoutes><FilterBooks /></PrivetRoutes>,
                loader: () => fetch('https://assignment-11-server-rosy-theta.vercel.app/books')
            },
            {
                path: '/signl-book/:id',
                element: <PrivetRoutes><SignlBook /></PrivetRoutes>,
                loader: () => fetch('https://assignment-11-server-rosy-theta.vercel.app/books'),

            },
            {
                path: '/read-book/:id',
                element: <PrivetRoutes><ReadBook /></PrivetRoutes>,
                loader: () => fetch('https://assignment-11-server-rosy-theta.vercel.app/books')
            },
            {
                path: '/update/:id',
                element: <UpdateAllBook />,
                loader: ({ params }) => fetch(`https://assignment-11-server-rosy-theta.vercel.app/books/${params.id}`)
            },



        ]
    }
])

export default routes;