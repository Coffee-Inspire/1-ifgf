import { AUTH_REQUEST, AUTH_FAILED, LOGIN_SUCCESS, LOGOUT } from '../actions/auth.actions'

const token = localStorage.ifgfToken;

const initialState = (token !== undefined && token !== null) ? {
    isLogged: true,
    isLoading : false,
    error: false,
} : {
    isLogged: false,
    isLoading : false,
    error: false,
}

const auth = (state = initialState, action) => {
    switch (action.type){
        case AUTH_REQUEST: 
            return {
                ...state,
                isLoading: true,
            };

        case AUTH_FAILED:
            return {
                ...state,
                error: true,
                isLoading: false,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                isLoading: false,
                error: false,
            }

        case LOGOUT:
            return {
                ...state,
                isLogged: false,
                isLoading: false,
                error: false,
            }

        default:
            return  state;
    }
}

export default auth;