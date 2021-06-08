import axios from 'axios';

export const INIT = "INIT";
export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";
export const EDIT_SUCCESS = "EDIT_SUCCESS";

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

export const editSuccess = (data) => {
    return {
        type: EDIT_SUCCESS,
        payload: data
    };
};

export const failed = (err) => {
    return {
        type: FAILED,
        err,
    };
};

export const getEventAction = (setFormEdit, findActive=false) => (dispatch) => {
    dispatch(init());

    return axios
            .get(process.env.REACT_APP_URL_EVENT)
            .then(result => {
                if(findActive===true){
                    let newArray = result.data.filter(item => {
                        return item.status === 1;
                    })
                    setFormEdit(newArray);

                }else{
                    setFormEdit(result.data);
                }
                dispatch(success(result.data));
            })
            .catch(err => dispatch(failed(err)))
};

export const editEventAction = (e, id, data) => (dispatch) => {
    e.preventDefault();
    dispatch(request());

    console.log(data);

    return axios
            .put(process.env.REACT_APP_URL_EVENT+'/'+id, data ,{
                headers: {
                    Authorization: localStorage.ifgfToken
                }
            })
            .then(result => {
                if(result.data.status === "Token is Invalid"){
                    window.location = "/admin";
                }

                dispatch(editSuccess());
            })
            .catch(err => 
                // console.log(err)
                dispatch(failed())
            );
}