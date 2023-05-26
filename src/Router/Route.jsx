import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import RecipiesLayout from "../Layout/RecipiesLayout";
import RecipiesDetailsLayout from "../Layout/RecipeDetailsLayout";
import Recipies from "../pages/shared/Recipies";
import RecipeDetails from "../pages/shared/recipeDetails";
import AllRecipies from "../pages/shared/AllRecipies";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/shared/Blog";
import Error from "../pages/shared/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Registration></Registration>
            },
            {
                path: '/allrecipies',
                element: <AllRecipies></AllRecipies>,
                loader: () => fetch(`https://chef-assignment-10-server-emdadhemon.vercel.app/recipies`)
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path : "*",
                element : <Error></Error>
            }
        ]
    },
    {
        path: "recipies",
        element: <RecipiesLayout></RecipiesLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><Recipies></Recipies></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-assignment-10-server-emdadhemon.vercel.app/chef/${params.id}`)
            },
            {
                path : "*",
                element : <Error></Error>
            }
        ]
    },
    {
        path: "recipe",
        element: <RecipiesDetailsLayout></RecipiesDetailsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-assignment-10-server-emdadhemon.vercel.app/recipie/${params.id}`)
            },
            {
                path : "*",
                element : <Error></Error>
            }
        ]
    }
]);

export default router;