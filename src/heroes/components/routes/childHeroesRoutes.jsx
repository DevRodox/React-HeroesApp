import { DcPage, MarvelPage } from "../pages";

export const childHeroesRouter = [
    {
        path: "marvel",
        element: <MarvelPage />
    },
    {
        path: "dc",
        element: <DcPage />
    }, 
];