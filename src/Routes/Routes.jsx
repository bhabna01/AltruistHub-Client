import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddVolunteer from "../pages/AddVolunteer/AddVolunteer";
import PrivateRoute from "./PrivateRoute";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import VolunteerDetails from "../pages/VolunteerDetails/VolunteerDetails";
import ManagePost from "../pages/ManagePost/ManagePost";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/add-volunteer",
                element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
            },
            {
                path: "/need-volunteer",
                element: <NeedVolunteer></NeedVolunteer>
            }
            ,
            {
                path: "/volunteer/:id",
                element: <VolunteerDetails></VolunteerDetails>,
                loader: ({ params }) => fetch(`https://altruist-backend.vercel.app/volunteers/${params.id}`)

            },
            {
                path: "/manage-post",
                element: <PrivateRoute><ManagePost></ManagePost></PrivateRoute>
            }
            ,
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router;