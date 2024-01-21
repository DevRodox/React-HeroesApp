import { DcPage, MarvelPage, HeroPage, SearchPage } from "../";

export const childHeroesRouter = [
    {
        path: "marvel",
        element: <MarvelPage />
    },
    {
        path: "dc",
        element: <DcPage />
    }, 
    {
        path: "search",
        element: <SearchPage />
    },
    {
        path: "hero",
        element: <HeroPage />
    }
];