import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { RouterProvider, createMemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';

const mockUseNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));  

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
   
    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
      
      render(
        <AuthContext.Provider value={ contextValue }>
          <RouterProvider router={ router } />  
        </AuthContext.Provider>
      );

      const logoutBtn = screen.getByRole('button');

      fireEvent.click( logoutBtn );
      
      expect( contextValue.logout ).toHaveBeenCalled();
      expect( mockUseNavigate ).toHaveBeenCalledWith('/login', { "replace": true });
    });
});