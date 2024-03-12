import { Navigate} from "react-router-dom";
import { LoginPage } from '../auth';
import { HeroesMain, childHeroesRouter } from '../heroes'
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = [
    {
        path: "/*",
        element: <PrivateRoute>
                    <HeroesMain />
                 </PrivateRoute>,
        errorElement: <Navigate to="/"/>,
        children: childHeroesRouter 
    }, 
    {
        path: "/login",
        element: <PublicRoute>
                    <LoginPage />
                 </PublicRoute>
    }
];


