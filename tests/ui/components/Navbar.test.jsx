import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true, 
        user: {
            id: 'ABC',
            name: 'Rodox'
        },
        logout: jest.fn(),
    }

    const routesConfig = [
        {
          path: '/',
          element: <Navbar />,
        },
        {
          path: '/login',
          element: <h1>Navega a /login</h1>,
        },
      ]
     
      const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/'],
      })

    beforeEach(() => jest.clearAllMocks() );
    
    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value = { contextValue }>
                <RouterProvider router={ router } />
            </AuthContext.Provider>
        );

        expect( screen.getByText('Rodox') ).toBeTruthy();
    });
   
    // test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {

    // });
});