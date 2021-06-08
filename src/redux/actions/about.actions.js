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

export const getAboutAction = (setFormEdit, sorting=false) => (dispatch) => {
    dispatch(init());

    return axios
            .get('http://api.yoshi.erwinata.com/about')
            .then(result => {

                if(sorting === false){
                    setFormEdit(result.data);
                } else{
                    let sortData = result.data;
                    sortData.sort(function(a, b){
                        if(a.updated_at < b.updated_at){
                            return 1
                        }
                        else{
                            return -1
                        }}
                    );
                    setFormEdit(sortData);
                }

                dispatch(success(result.data));
            })
            .catch(err => dispatch(failed(err)))
};


export const deleteAboutAction = (id, index, formAboutList, setFormAboutList, setEditDisabled) => (dispatch) => {
    dispatch(request());

    return axios
            .delete('http://api.yoshi.erwinata.com/about/'+ id,{
                headers: {
                    Authorization: localStorage.ifgfToken
                }
            })
            .then(result => {
                if(result.data.status === "Token is Invalid"){
                    window.location = "/admin";
                }

                let newArray = [...formAboutList];
                newArray.splice(index, 1);

                setFormAboutList(newArray);

                setEditDisabled(true);

                dispatch(editSuccess());
            })
            .catch(err => dispatch(failed(err)))
}


export const editAboutAction = (e, image, setProgressBar, setShowProgressBar, 
    formEdit, setFormEdit, setImageEdit, setEditDisabled, formAboutList, setFormAboutList) => (dispatch) => {
    e.preventDefault();
    dispatch(request());

    if(image.file !== null){

        let uploadImg = dispatch(uploadImageAction(image, setProgressBar, formEdit.id));
        uploadImg.then(result => {
            dispatch(editAboutDataAction(e, setShowProgressBar, formEdit, 
                setFormEdit, result, setImageEdit, setEditDisabled, formAboutList, setFormAboutList));
        })
        .catch(err => dispatch(failed()));

    }
    else {
        dispatch(editAboutDataAction(e, setShowProgressBar, formEdit, 
            setFormEdit, "", setImageEdit, setEditDisabled, formAboutList, setFormAboutList));
    }

};


export const editAboutDataAction = (e, setShowProgressBar, formEdit, 
    setFormEdit, img, setImageEdit, setEditDisabled, formAboutList, setFormAboutList) => (dispatch) => {

    let data = {
        ...formEdit,
        [img !== "" && "image"] : img,
    }

    return axios
    .put('http://api.yoshi.erwinata.com/about/'+formEdit.id, data ,{
        headers: {
            Authorization: localStorage.ifgfToken
        }
    })
    .then(result => {
        if(result.data.status === "Token is Invalid"){
            window.location = "/admin";
        }

        setFormEdit({
            id : "",
            yearStart : "",
            yearEnd : "",
            title : "",
            text : "",
            image : "",
            hash : 1,
        })

        setShowProgressBar({
            showCurrent : false,
            showEdit : false,
        })

        setImageEdit({
            file: null,
            status: "",
            disable: false,
            name: "about"
        })
        e.target.image.value = null;

        setEditDisabled(true);

        let newArray = formAboutList.map((item) => {
            if(item.id === result.data.id){
                return result.data;
            }else{
                return item;
            }
        });

        let sortData = newArray;
            sortData.sort(function(a, b){
                if(a.updated_at < b.updated_at){
                    return 1
                }
                else{
                    return -1
                }}
            );

        setFormAboutList(sortData);

        dispatch(editSuccess());
    })
    .catch(err => 
        // console.log(err)
        dispatch(failed())
    );
};


export const postAboutAction = (e, image, setProgressBar, setShowProgressBar, 
    formCurrent, setFormCurrent, setImageCurrent, setEditDisabled, formAboutList, setFormAboutList) => (dispatch) => {
    e.preventDefault();
    dispatch(request());

    if(image.file !== null){

        axios.get('http://api.yoshi.erwinata.com/about/nextid',{
            headers: {
                Authorization: localStorage.ifgfToken
            }
        })
        .then(result => {
            let uploadImg = dispatch(uploadImageAction(image, setProgressBar, result.data.nextId));
            uploadImg.then(result => {
                dispatch(postAboutDataAction(e, setShowProgressBar, formCurrent, 
                    setFormCurrent, result, setImageCurrent, setEditDisabled, formAboutList, setFormAboutList));
            })
            .catch(err => dispatch(failed()));
        })
        .catch(err => dispatch(failed()));
        
    }
    else {
        dispatch(failed())
    }

};

export const postAboutDataAction = (e, setShowProgressBar, formCurrent, setFormCurrent, 
    img, setImageCurrent, setEditDisabled, formAboutList, setFormAboutList) => (dispatch) => {

    let data = {
        ...formCurrent,
        yearStart : formCurrent.yearStart.toString(),
        yearEnd : formCurrent.yearEnd.toString(),
        image : img,
    }

    return axios
        .post('http://api.yoshi.erwinata.com/about', data,{
            headers: {
                Authorization: localStorage.ifgfToken
            }
        })
        .then(result => {
            if(result.data.status === "Token is Invalid"){
                window.location = "/admin";
            }

            setFormAboutList([
                ...formAboutList,
                result.data
            ])

            setFormCurrent({
                yearStart : "",
                yearEnd : "",
                title : "",
                text : "",
            })

            setShowProgressBar({
                showCurrent : false,
                showEdit : false,
            })

            setImageCurrent({
                file: null,
                status: "",
                disable: false,
                name: "about"
            })

            setEditDisabled(true);

            e.target.image.value = null

            // plus new editable post
            let sortData = [...formAboutList,result.data];
            sortData.sort(function(a, b){
                if(a.updated_at < b.updated_at){
                    return 1
                }
                else{
                    return -1
                }}
            );

            setFormAboutList(sortData)

            dispatch(editSuccess());
        })
        .catch(err => dispatch(failed(err)))
}


export const uploadImageAction = (image, setProgressBar, nextId) => (dispatch) => {

    let fd = new FormData();
    fd.append('image', image.file, image.name + nextId + "." + image.file.name.split('.').pop());

    return axios
        .post('/php/ImageUpload.php', fd, {
        // .post('http://localhost:3333', fd, {
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