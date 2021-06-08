import axios from 'axios';

export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const success = (msg) => {
    return {
        type: SUCCESS,
        msg
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const sendEmailAction = (e, formEmail, setFormEmail) => (dispatch) => {
    e.preventDefault();
    dispatch(request());

    let fd = new FormData();

    fd.append("sendEmail", process.env.REACT_APP_URL_EMAIL);
    fd.append("name", formEmail.name);
    fd.append("email", formEmail.email);
    fd.append("no", formEmail.no);
    fd.append("subject", formEmail.subject);
    fd.append("msg", formEmail.msg);

    // return axios.post('https://yoshi.erwinata.com/php/SendEmail.php', fd)
    return axios.post(process.env.REACT_APP_URL_EMAIL, fd)
                .then(result => {
                    // console.log(result);
                    // console.log(result.data);
                    if(result.data.error){
                        dispatch(failed(result.data.error));
                    }else{
                        setFormEmail({
                            name : "",
                            email : "",
                            no : "",
                            subject : "",
                            msg : "",
                        });
                        dispatch(success(result.data.msg));
                    }
                })
                .catch(e => {
                    // console.log(e);
                    dispatch(failed("Server Error Cant Send Email !"));
                })
}