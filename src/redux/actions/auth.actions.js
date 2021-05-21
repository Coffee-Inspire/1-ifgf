import axios from 'axios';

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_FAILED = "AUTH_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const authRequest = () => {
    return {
        type: AUTH_REQUEST,
    };
};

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
};

export const authFailed = (err) => {
    return {
        type: AUTH_FAILED,
        err,
    };
};

export const logoutAction = () => {
    return {
        type: LOGOUT,
    };
}

export const loginAction = (data, event, history, setLogin, setFail) => (dispatch) => {
    event.preventDefault();
    dispatch(authRequest());
    
    return axios
        .post("https://bumbuku.herokuapp.com/auth/login", data)
        .then(result => {
            if(result.data.token !== undefined) {
                localStorage.token = result.data.token
                localStorage.payload = JSON.stringify(result.data.data);
                dispatch(loginSuccess(result.data.token))
                
                history.push('/');
            } else{
                setLogin({
                    ...data,
                    password: ""
                })
                setFail({
                    result: false
                })
                dispatch(authFailed("invalid"));
            }
            
        })
        .catch(err => dispatch(authFailed(err)))
};