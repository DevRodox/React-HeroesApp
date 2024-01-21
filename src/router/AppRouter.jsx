import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { LoginPage } from '../auth';
import { HeroesMain, childHeroesRouter } from '../heroes'

const router = createBrowserRouter ([
    {
        path: "/*",
        element: <HeroesMain />,
        errorElement: <Navigate to="/"/>,
        children: childHeroesRouter 
    }, 
    {
        path: "/login",
        element: <LoginPage />
    }
]); 

export const AppRouter = () => {
    return(
        <>
            <RouterProvider router={ router } /> 
        </>
    );
};

