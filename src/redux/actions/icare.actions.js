import axios from "axios";

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
		data: data,
	};
};

export const editSuccess = (data) => {
	return {
		type: EDIT_SUCCESS,
		payload: data,
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
		.get(process.env.REACT_APP_URL_ICARE)
		.then((result) => {
			setFormEdit(result.data);
			dispatch(success(result.data));
		})
		.catch((err) => dispatch(failed(err)));
};

export const uploadImageAction = (image, setProgressBar) => (dispatch) => {
	// e.preventDefault();
	// dispatch(request());

	let fd = new FormData();
	fd.append("image", image.file, image.name + "." + image.file.name.split(".").pop());

	return axios
		.post(process.env.REACT_APP_URL_IMAGE, fd, {
			// .post('https://localhost:3333', fd, {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			onUploadProgress: (ProgressEvent) => {
				setProgressBar(Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100));
			},
		})
		.then((result) => {
			// dispatch(success());
			return result.data.url;
		})
		.catch((err) => {
			dispatch(failed());
			return err;
		});
};

export const editDataAction = (e, setShowProgressBar, dataSend, img, formEdit, setFormEdit, setHash) => (dispatch) => {
	let data = {
		...dataSend,
		[img !== "" && "image"]: img,
	};

	return axios
		.put(process.env.REACT_APP_URL_ICARE + "/" + data.id, data, {
			headers: {
				Authorization: localStorage.ifgfToken,
			},
		})
		.then((result) => {
			if (result.data.status === "Token is Invalid") {
				window.location = "/admin";
			}

			let newArray = formEdit.map((item) => {
				if (item.id === result.data.id) {
					return data;
				} else {
					return item;
				}
			});

			setFormEdit(newArray);

			setHash(Date.now());

			setShowProgressBar({
				ifgfyouth: false,
				ifgfmen: false,
				ifgfwoman: false,
			});

			e.target.image.value = null;

			dispatch(editSuccess());
		})
		.catch((err) =>
			// console.log(err)
			dispatch(failed())
		);
};

export const editIcareAction =
	(e, image, setProgressBar, setShowProgressBar, data, formEdit, setFormEdit, setHash) => (dispatch) => {
		e.preventDefault();
		dispatch(request());

		if (image.file !== null) {
			let uploadImg = dispatch(uploadImageAction(image, setProgressBar));
			uploadImg
				.then((result) => {
					dispatch(editDataAction(e, setShowProgressBar, data, result, formEdit, setFormEdit, setHash));
				})
				.catch((err) => dispatch(failed()));
		} else {
			dispatch(editDataAction(e, setShowProgressBar, data, "", formEdit, setFormEdit, setHash));
		}
	};

export const postIcareAction = (e, bodyParam, image, setProgressBar, setShowProgressBar) => (dispatch) => {
	e.preventDefault();
	dispatch(request());

	if (image.file !== null) {
		let uploadImg = dispatch(uploadImageAction(image, setProgressBar));
		uploadImg
			.then((result) => {
				dispatch(postIcareDataAction(e, setShowProgressBar, bodyParam, result));
			})
			.catch((err) => dispatch(failed()));
	} else {
		dispatch(failed());
	}
};

export const postIcareDataAction = (e, setShowProgressBar, bodyParam, result) => (dispatch) => {
	let data = {
		...bodyParam,
		image: result,
	};

	return axios
		.post(process.env.REACT_APP_URL_ICARE, data, {
			headers: {
				Authorization: localStorage.ifgfToken,
			},
		})
		.then((result) => {
			if (result.data.status === "Token is Invalid") {
				window.location = "/admin";
			}
			setShowProgressBar(false);
			dispatch(success());
		});
};

export const deleteIcareAction = (id) => (dispatch) => {
	dispatch(request());

	return axios
		.delete(process.env.REACT_APP_URL_ICARE + "/" + id, {
			headers: {
				Authorization: localStorage.ifgfToken,
			},
		})
		.then((result) => {
			if (result.data.status === "Token is Invalid") {
				window.location = "/admin";
			}

			dispatch(success());
		})
		.catch((err) => dispatch(failed(err)));
};
