import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe('Pruebas en <PublicRoute />', () => {

    test('debe mostrar el children si no esta autenticado', () => {
        
        const contextValue = {
            logged: false
        };
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Publica') ).toBeTruthy();    
    });

    test('debe de navegar si está autenticado', () => {
        const contextValue = {
          logged: true,
          user: {
            name: 'Strider',
            id: '123',
          },
        }
     
        const routesConfig = [
          {
            path: '/marvel',
            element: (
              <h1>MarvelPage</h1>
            )
          }
        ]
     
        const router = createMemoryRouter(routesConfig, {
          initialEntries: ['/marvel'],
        })
     
        render(
          <AuthContext.Provider value={contextValue}>
            <RouterProvider router={router} />
          </AuthContext.Provider>
        );

        expect(screen.getByText('MarvelPage')).toBeTruthy();
      })
});