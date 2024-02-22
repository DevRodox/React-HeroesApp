import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en <PrivateRouter />', () => {

    test('debe mostrar el children si esta autenticado', () => {
        
        Storage.prototype.setItem = jest.fn();

        const routesConfig = [
            {
              path: '/',
              element: (
                <PrivateRoute>
                    <h1>Ruta Privada</h1>
                </PrivateRoute>
              )
            }
          ]
       
          const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/'],
          })


        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'rodox'
            }
        };
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/');
    });
});