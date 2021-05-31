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
    return axios
        .post("http://api.yoshi.erwinata.com/admin/login", data)
        .then(result => {
            if(result.data.token !== undefined) {
                localStorage.ifgfToken = result.data.token
                localStorage.ifgfPayload = JSON.stringify(result.data.user);
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
        .catch(err => {
            setStatus({
                error : true,
                text : "Login failed, no connection or server error !",
            })
            dispatch(authFailed(err))
        })
};