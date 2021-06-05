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

export const getProfileWebAction = (setFormEdit) => (dispatch) => {
    dispatch(init());

    return axios
            .get('http://api.yoshi.erwinata.com/profileweb')
            .then(result => {
                setFormEdit(...result.data);
                dispatch(success(result.data));
            })
            .catch(err => dispatch(failed(err)))
};

export const uploadImageAction = (image, setProgressBar) => (dispatch) => {

    let fd = new FormData();
    fd.append('image', image.file, image.name + "." + image.file.name.split('.').pop());

    return axios
        // .post('http://yoshi.erwinata.com/php/ImageUpload.php', fd, {
        // .post('php/ImageUpload.php', fd, {
        .post('http://localhost:3333', fd, {
            headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          }, 
            onUploadProgress: ProgressEvent => {
                setProgressBar(Math.round(ProgressEvent.loaded / ProgressEvent.total * 100));
            }
        })
        .then(result => {
            // dispatch(success());
            return result.data.url;
        })
        .catch(err => {
            dispatch(failed());
            return err;
        })
};

export const editDataAction = (setShowProgressBar, img, formEdit, setFormEdit, setHash) => (dispatch) => {

    let data = {
        ...formEdit,
        [img !== "" && "pastorImage"] : img,
    }

    return axios
            .put('http://api.yoshi.erwinata.com/profileweb/'+data.id, data ,{
                headers: {
                    Authorization: localStorage.ifgfToken
                }
            })
            .then(result => {
                if(result.data.status === "Token is Invalid"){
                    window.location = "/admin";
                }
                
                setFormEdit({
                    ...result.data
                });

                setHash(Date.now());

                setShowProgressBar({
                    profileWeb: false,
                });
                dispatch(editSuccess());
            })
            .catch(err => {
                console.log(err)
                dispatch(failed())
            });
            
}

export const editProfileWebAction = (e, image, setProgressBar, setShowProgressBar, formEdit, setFormEdit, setHash) => (dispatch) => {
    e.preventDefault();
    dispatch(request());

    if(image.file !== null){
        let uploadImg = dispatch(uploadImageAction(image, setProgressBar));
        uploadImg.then(result => {
            dispatch(editDataAction(setShowProgressBar, result, formEdit, setFormEdit, setHash));
        })
        .catch(err => dispatch(failed()));
    }
    else {
        dispatch(editDataAction(setShowProgressBar, "", formEdit, setFormEdit, setHash));
    }
};