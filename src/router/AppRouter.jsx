import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

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
        <RouterProvider router={ router } /> 
    );
};

