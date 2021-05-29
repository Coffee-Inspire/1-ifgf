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

export const editAction = (e, image, setProgressBar) => (dispatch) => {
    dispatch(request());
    e.preventDefault();

    let fd = new FormData();
    fd.append('image', image.file, image.file.name);

    return axios
        .post('/php/ImageUpload.php', fd, {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          }, {
            onUploadProgress: ProgressEvent => {
                setProgressBar(Math.round(ProgressEvent.loaded / ProgressEvent.total * 100));
            }
        })
        .then(result => {
            console.log(result.data.url);
            dispatch(success());
        })
        .catch(err => dispatch(failed(err)))
};

