import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { Router, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
 
    test('debe mostrar el login si no esta autenticado', () => {

        const router = createMemoryRouter( AppRouter , {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
        });
        
        const contextValue = {
            logged: false,
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );    
        
        expect(screen.getAllByText("Login").length).toBe(2);
    });

    test('debe de mostrar el componente de Marvel si esta autenticado', () => {
        
        
        const router = createMemoryRouter( AppRouter , {
            initialEntries: ["/", "/marvel"],
            initialIndex: 1,
        });

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Panda',
            }
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);    
    });
});