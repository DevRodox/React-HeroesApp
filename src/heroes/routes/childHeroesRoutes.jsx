import { DcPage, MarvelPage } from "../";

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