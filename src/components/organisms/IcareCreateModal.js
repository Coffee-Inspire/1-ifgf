import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Modal, Form, Row, Col, Button, ProgressBar } from "react-bootstrap";
import DashText from "../molecules/DashText";
import FormGroupImageRequired from "../molecules/FormGroupImageRequired";
import FormGroupArea from "../molecules/FormGroupArea";
import FormGroup from "../molecules/FormGroup";
import { postIcareAction, getIcareAction } from "../../redux/actions/icare.actions";

// import {
//   editIcareAction,
//   getIcareAction,
// } from "../../redux/actions/icare.actions";

function IcareCreateModal({ modalState, closeModal, setFormEdit }) {
	const dispatch = useDispatch();
	const [progressBar, setProgressBar] = useState(0);
	const [showProgressBar, setShowProgressBar] = useState(false);

	const [imageCurrent, setImageCurrent] = useState({
		file: null,
		status: "",
		disable: false,
		name: "",
	});

	const [paramData, setParamData] = useState({
		category: "",
		name: "",
		text: "",
		number: "",
	});

	const valueChange = (e) => {
		setParamData({ ...paramData, [e.target.name]: e.target.value });
	};

	const postIcare = (e, bodyParam, imageParam) => {
		console.log("bodyParam", bodyParam);
		console.log("imageParam", imageParam);
		dispatch(postIcareAction(e, bodyParam, imageParam, setProgressBar, setShowProgressBar));
		dispatch(getIcareAction(setFormEdit));
		closeModal();
		// e,bodyParam,imageParam
		// dispatch to action...
	};

	return (
		<Modal show={modalState} onHide={closeModal}>
			<Modal.Header>
				<Modal.Body>
					<Col className="mb-5">
						<DashText word={"Create New Icare"} />
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								postIcare(e, paramData, imageCurrent);
							}}
						>
							<FormGroup
								id={"categoty"}
								label={"Enter Category"}
								type={"text"}
								placeholder={"Enter Category"}
								name={"category"}
								value={paramData.title}
								onChange={(e) => {
									valueChange(e);
									setImageCurrent({
										...imageCurrent,
										name: `icare-${e.target.value}`,
									});
								}}
							/>
							<FormGroup
								id={"leaderName"}
								label={"Enter Leader Name"}
								type={"text"}
								placeholder={"Enter Leader Name"}
								name={"name"}
								value={paramData.name}
								onChange={(e) => valueChange(e)}
							/>
							<FormGroup
								id={"phoneNumber"}
								label={"Phone Number"}
								type={"number"}
								placeholder={"Enter Phone Number"}
								name={"number"}
								value={paramData.number}
								onChange={(e) => valueChange(e)}
							/>

							<FormGroupImageRequired
								id={"icareImage"}
								label={"Icare Image"}
								image={imageCurrent}
								setImage={setImageCurrent}
							/>
							<FormGroupArea
								id={"description"}
								label={"About Text"}
								type={"text"}
								placeholder={"Enter Description"}
								name={"text"}
								value={paramData.text}
								onChange={(e) => valueChange(e)}
							/>
							<Button
								// onClick={() => {
								//   //   setShowProgressBar({ ...showProgressBar, showCurrent: true });
								//   //   setEditStatus({ current: true, edit: false });
								// }}
								type="submit"
								variant="primary"
								// disabled={aboutData.isLoading}
							>
								Click
								{/* {aboutData.isLoading ? "Saving..." : "Save"} */}
							</Button>
							{/* {aboutData.isLoading && showProgressBar.showCurrent && (
                <div className="mt-3">
                  <ProgressBar
                    animated
                    striped
                    variant="primary"
                    className=""
                    now={progressBar}
                  />
                </div>
              )}
              {aboutData.editSuccess && editStatus.current && (
                <div className="mt-3 text-success">Post Success !</div>
              )}
              {yearError && editStatus.current && (
                <div className="mt-3 text-danger">
                  Year Start cant exceed Year End or Empty !
                </div>
              )}
              {aboutData.error && editStatus.current && (
                <div className="mt-3 text-danger">Error Edit Failed !</div>
              )} */}
						</Form>
					</Col>
				</Modal.Body>
			</Modal.Header>
		</Modal>
	);
}

export default IcareCreateModal;
