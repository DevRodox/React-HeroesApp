import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import { DcPage, MarvelPage } from "../heroes";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <HeroesApp />,
        errorElement: <Navigate to="/"/>,
        children: [ 
            {
                path: "marvel",
                element: <MarvelPage />
            },
            {
                path: "dc",
                element: <DcPage />
            }, 
            {
                path: "login",
                element: <LoginPage />
            }
        ]
    }
]);

export const AppRouter = () => {
    return(
        <>
            <RouterProvider router={ router } /> 
        </>
    );
};

