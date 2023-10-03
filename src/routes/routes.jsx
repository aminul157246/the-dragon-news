
import {
    createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

    const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/news.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/news/:id',
                element : <PrivateRoute>
                    <NewsDetails></NewsDetails>
                </PrivateRoute>
            }
        ]
    },
]);


export default router;