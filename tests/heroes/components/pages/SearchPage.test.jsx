import { render, screen } from '@testing-library/react';
import { Route, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../../src/heroes';

describe('Pruebas en <SearchPage />', () => {

    const routesConfig = [
        {
          path: '/',
          element: <SearchPage />,
        }
    ];
     
    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/'],
    });
    
    test( 'debe de mostrarse correctamente con valores por defecto' , () => {
        
        const { container } = render(
            <RouterProvider router={ router } />
        );
        expect( container ).toMatchSnapshot();
        
    });
});