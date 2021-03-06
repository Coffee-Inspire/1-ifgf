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

export const getCategoryAction = (setFormEdit) => (dispatch) => {
    dispatch(init());
    return axios
            .get(process.env.REACT_APP_URL_CATEGORY)
            .then(result => {
                let newData = {};
                result.data.forEach((item) => {
                    newData = {
                        ...newData,
                        ["text" + item.name.charAt(0).toUpperCase() + item.name.slice(1)] : item.text,
                        ["desc" + item.name.charAt(0).toUpperCase() + item.name.slice(1)] : item.description,
                        ["img" + item.name.charAt(0).toUpperCase() + item.name.slice(1)] : item.image,
                        ["id" + item.name.charAt(0).toUpperCase() + item.name.slice(1)] : item.id,
                        hash : Date.now()
                    }
                })
                setFormEdit({
                    ...newData
                });
                dispatch(success(result.data));
            })
            .catch(err => dispatch(failed(err)))
};

export const uploadImageAction = (image, setProgressBar) => (dispatch) => {
    // e.preventDefault();
    // dispatch(request());

    let fd = new FormData();
    fd.append('image', image.file, image.name + "." + image.file.name.split('.').pop());

    return axios
        .post(process.env.REACT_APP_URL_IMAGE, fd, {
        // .post('https://localhost:3333', fd, {
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

export const editDataAction = (e, setShowProgressBar, id, text, desc, img, formEdit, setFormEdit) => (dispatch) => {

    let data = {
        text : text,
        description : desc,
        [img !== "" && "image"] : img,
    }

    return axios
            .put(process.env.REACT_APP_URL_CATEGORY+"/"+id, data ,{
                headers: {
                    Authorization: localStorage.ifgfToken
                }
            })
            .then(result => {
                if(result.data.status === "Token is Invalid"){
                    window.location = "/admin";
                }
                
                setFormEdit({
                    ...formEdit,
                    ["text" + result.data.name.charAt(0).toUpperCase() + result.data.name.slice(1)] : result.data.text,
                    ["desc" + result.data.name.charAt(0).toUpperCase() + result.data.name.slice(1)] : result.data.description,
                    ["img" + result.data.name.charAt(0).toUpperCase() + result.data.name.slice(1)] : result.data.image,
                    ["id" + result.data.name.charAt(0).toUpperCase() + result.data.name.slice(1)] : result.data.id,
                    hash : Date.now()
                });
                setShowProgressBar({
                    showHome : false,
                    showLocation : false,
                    showIcare : false,
                    showIfgfyouth: false,
                    showIfgfkids: false,
                });
                e.target.image.value = null;
                // console.log("result ", result.data);
                dispatch(editSuccess());
            })
            .catch(err => 
                // console.log(err)
                dispatch(failed())
            );
            
}

export const editAction = (e, image, setProgressBar, setShowProgressBar, id, text, desc, formEdit, setFormEdit) => (dispatch) => {
    e.preventDefault();
    dispatch(request());

    if(image.file !== null){
        let uploadImg = dispatch(uploadImageAction(image, setProgressBar));
        uploadImg.then(result => {
            dispatch(editDataAction(e, setShowProgressBar, id, text, desc, result, formEdit, setFormEdit));
        })
        .catch(err => dispatch(failed()));
    }
    else {
        dispatch(editDataAction(e, setShowProgressBar, id, text, desc, "", formEdit, setFormEdit));
    }
};

// , {
//     headers: {
//         Authorization: 'Bearer ' + token
//     }}