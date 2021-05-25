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
    fd.append('file', image.file);
    fd.append('name', image.file.name);

    return axios
        .post('../src/php/reactimageupload.php', fd, {
            onUploadProgress: ProgressEvent => {
                // console.log('Upload progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%');
                setProgressBar(Math.round(ProgressEvent.loaded / ProgressEvent.total * 100));
            }
        })
        .then(result => {
            console.log(result);
            dispatch(success());
        })
        .catch(err => dispatch(failed(err)))
};
