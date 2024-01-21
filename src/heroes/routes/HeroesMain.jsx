import { Outlet } from "react-router-dom";
import { Navbar } from "../../ui";

export const HeroesMain = () => {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    );
};