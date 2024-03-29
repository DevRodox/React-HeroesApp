import { authReducer, types } from "../../../src/auth";

describe('Pruebas en authReducer', () => {

    test('debe retornar el estado por defecto', () => {
        const state = authReducer( { logged: false }, {} );
        expect( state ).toEqual( { logged: false } );
    });

    test('debe de llamar el login autenticar y establecer el user', () => {
        
        const user = { id: 'ABC', name: 'Rodrigo' };

        const action = {
            type: types.login,
            payload: user
        }

        const newState = authReducer( { logged: false } , action);
        expect( newState ).toEqual({ 
            logged: true, 
            user: action.payload 
        });
    });

    test('debe de borrar el name del usuario y logged en false', () => {
        
        const state = {
            logged: true,
            user: { id: '123', name: 'Juan' }
        }
        
        const action = {
            type: types.logout
        };

        const newState = authReducer( state, action );
        expect( newState ).toEqual( { logged: false } );
    });
});