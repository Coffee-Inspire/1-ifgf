import axios from 'axios';

export const INIT = "INIT";
export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

export const init = () => {
    return {
        type: INIT,
    };
};

export const request = () => {
    return {
        type: REQUEST,
    };
};

export const success = (data) => {
    return {
        type: SUCCESS,
        data: data
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const getIcareAction = (setFormEdit) => (dispatch) => {
    dispatch(init());

    return axios
            .get('http://api.yoshi.erwinata.com/icare')
            .then(result => {
                setFormEdit(result.data);
                dispatch(success(result.data));
            })
            .catch(err => dispatch(failed(err)))
};

