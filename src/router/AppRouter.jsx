import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { LoginPage } from '../auth';
import { HeroesMain, childHeroesRouter } from '../heroes'
import { PrivateRoute } from "../heroes/components/routes/PrivateRoute";
import { PublicRoute } from "../heroes/components/routes/PublicRoute";

const router = createBrowserRouter ([
    {
        path: "/*",
        element: <PrivateRoute>
                    <HeroesMain />
                 </PrivateRoute> ,
        errorElement: <Navigate to="/"/>,
        children: childHeroesRouter 
    }, 
    {
        path: "/login",
        element: <PublicRoute>
                    <LoginPage />
                 </PublicRoute>
    }
]); 

export const AppRouter = () => {
    return(
        <>
            <RouterProvider router={ router } /> 
        </>
    );
};

