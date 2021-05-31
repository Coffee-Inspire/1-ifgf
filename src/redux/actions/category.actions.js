import axios from 'axios';

export const REQUEST = "REQUEST";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";

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

export const getCategoryAction = (setFormEdit) => (dispatch) => {
    dispatch(request());

    return axios
            .get('http://api.yoshi.erwinata.com/category')
            .then(result => {
                let newData = {};
                result.data.forEach((item) => {
                    newData = {
                        ...newData,
                        ["text" + item.name.charAt(0).toUpperCase() + item.name.slice(1)] : item.text,
                        ["desc" + item.name.charAt(0).toUpperCase() + item.name.slice(1)] : item.description,
                        ["img" + item.name.charAt(0).toUpperCase() + item.name.slice(1)] : item.image
                    }
                })
                setFormEdit({
                    ...newData
                });
                dispatch(success(result.data));
            })
            .catch(err => dispatch(failed(err)))
};

export const uploadImageAction = (e, image, setProgressBar) => (dispatch) => {
    dispatch(request());
    e.preventDefault();

    let fd = new FormData();
    fd.append('image', image.file, image.name + "." + image.file.name.split('.').pop());

    return axios
        // .post('http://yoshi.erwinata.com/php/ImageUpload.php', fd, {
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
            console.log(result.data);
            dispatch(success());
        })
        .catch(err => dispatch(failed(err)))
};

export const editAction = (e, image, setProgressBar) => (dispatch) => {
    dispatch(request());
    e.preventDefault();

    if(image.file == null){
        console.log("empty");
    }
    else {
        dispatch(uploadImageAction(e, image, setProgressBar));
    }
};

// , {
//     headers: {
//         Authorization: 'Bearer ' + token
//     }}