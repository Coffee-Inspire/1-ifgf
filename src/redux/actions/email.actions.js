import axios from 'axios';

export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const success = () => {
    return {
        type: SUCCESS,
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const sendEmailAction = (e, name, email, no, subject, msg) => (dispatch) => {
    dispatch(request());

    let fd = new FormData();

    fd.append("name", "Namaku");
    fd.append("email", "yoshi.dharman@ti.ukdw.ac.id");
    fd.append("no", "087839927684");
    fd.append("subject", "Testing");
    fd.append("msg", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaabbbbbbbbbb");

    return axios.post('https://yoshi.erwinata.com/php/SendEmail.php', fd)
                .then(result => {
                    console.log(result);
                    dispatch(success());
                })
                .catch(e => {
                    dispatch(failed());
                    console.log(e);
                })
}