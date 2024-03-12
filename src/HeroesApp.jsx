import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

const router = createBrowserRouter( AppRouter );
export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </>
    );
};
