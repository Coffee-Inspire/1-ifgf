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

export const loginAction = (data, history, setStatus) => (dispatch) => {
    dispatch(authRequest());
    console.log(data);
    return axios
        .post("http://localhost:8000/admin/login", data)
        .then(result => {
            if(result.data.token !== undefined) {
                localStorage.token = result.data.token
                localStorage.payload = JSON.stringify(result.data.user);
                dispatch(loginSuccess(result.data.token))
                
                history.push('/dashboard');
            } else{
                setStatus({
                    error : true,
                    text : "Email dan atau password anda salah !",
                })
                dispatch(authFailed("invalid"));
            }
        })
        .catch(err => dispatch(authFailed(err)))
};