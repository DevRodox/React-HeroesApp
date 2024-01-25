import { useReducer } from 'react';
import { AuthContext, authReducer } from './';
import { types } from '../../types/types';

const initialState = {
    logged: false,
};

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState );

    const login = async( name = '') => {
        
        const action = {
            type: types.login ,
            payload: {
                id: 'ABC',
                name
            }
        };
        
        dispatch( action );
    };

    // const logout = async() => {
    //     const action = {
    //         type: types.logout
    //     }

    //     dispatch( action )
    // }

    return(
        <AuthContext.Provider value={{
            ...authState, 
            login: login,
            // logout: logout
        }}>
            { children }
        </AuthContext.Provider>
    );
};