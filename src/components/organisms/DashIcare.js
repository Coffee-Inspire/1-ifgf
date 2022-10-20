import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, ProgressBar, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import DashTitle from "../molecules/DashTitle";
import DashText from "../molecules/DashText";
import FormGroup from "../molecules/FormGroup";
import FormGroupArea from "../molecules/FormGroupArea";
import FormGroupImage from "../molecules/FormGroupImage";

import { editIcareAction, postIcareAction, getIcareAction, deleteIcareAction } from "../../redux/actions/icare.actions";
import IcareCreateModal from "./IcareCreateModal";

function DashIcare() {
	const dispatch = useDispatch();
	const icareData = useSelector((state) => state.icare);

	const [formEdit, setFormEdit] = useState([]);

	const [editStatus, setEditStatus] = useState({});

	const [createModalState, setCreateModalState] = useState(false);

	const openCreateModal = () => {
		setCreateModalState(true);
	};
	const closeCreateModal = () => {
		setCreateModalState(false);
	};

	const valueChange = (e, index) => {
		let newArray = formEdit.map((item, num) => {
			if (index === num) {
				item[e.target.name] = e.target.value;
				return item;
			} else {
				return item;
			}
		});

		setFormEdit([...newArray]);
	};

	const [hash, setHash] = useState(1);

	const [progressBar, setProgressBar] = useState(0);

	const [showProgressBar, setShowProgressBar] = useState({
		ifgfyouth: false,
		ifgfmen: false,
		ifgfwoman: false,
	});

	const [imageIcareyouth, setImageicareyouth] = useState({
		file: null,
		status: "",
		disable: false,
		name: "leadericareyouth",
	});

	const [imageIcaremen, setImageicaremen] = useState({
		file: null,
		status: "",
		disable: false,
		name: "leadericaremen",
	});

	const [imageIcarewoman, setImageicarewoman] = useState({
		file: null,
		status: "",
		disable: false,
		name: "leadericarewoman",
	});

	const postIcare = (e, bodyParam, imageParam) => {
		dispatch(postIcareAction(e, bodyParam, imageParam, setProgressBar, setShowProgressBar, setFormEdit));
		closeCreateModal();
		dispatch(getIcareAction(setFormEdit));
	};

	useEffect(() => {
		dispatch(getIcareAction(setFormEdit));
		if (formEdit.length > 0) {
			//setFormEdit()
		}
	}, [dispatch]);

	// useEffect(() => {}, [formEdit]);

	// console.log(formEdit);
	// console.log(editStatus);

	return (
		<>
			{icareData.isInit ? (
				<Row className="w-100 m-3">Loading...</Row>
			) : (
				<Row className="w-100">
					<Col className="">
						<div className="m-3">
							<Row className="mx-1 d-flex align-items-center">
								<Col md={6}>
									<DashTitle word={"Icare Leader and Details"} />
								</Col>
								<Col md={6} className="text-end w-50">
									<Button variant="primary" onClick={() => openCreateModal()}>
										Create
									</Button>
								</Col>
							</Row>

							<hr></hr>

							{formEdit.map((item, index) => {
								// let title = "";
								let image = "";
								let setImage = "";
								if (item.category === "icareyouth") {
									// title = "Icare For Youth";
									image = imageIcareyouth;
									setImage = setImageicareyouth;
								} else if (item.category === "icaremen") {
									// title = "Icare For Men";
									image = imageIcaremen;
									setImage = setImageicaremen;
								} else {
									// title = "Icare For Woman";
									image = imageIcarewoman;
									setImage = setImageicarewoman;
								}

								return (
									<Col key={index} xs={12} md={8} lg={7} xl={5} className="mb-5">
										{/* <DashText word={title + " Details"} /> */}
										<DashText clas word={`Icare For ${item.category}`} />
										<div className="">
											<Card className="mb-3 dashImagePotraitFrame">
												<Card.Img
													variant="top"
													className="dashImagePotrait"
													src={`${item.image}?${hash}`}
													onError={(e) => {
														e.target.onerror = null;
														e.target.src = "/uploads/imgNotFoundPotrait.jpg";
													}}
												/>
												<Card.Header className="text-center">
													<Card.Title>Preview Image Leader</Card.Title>
												</Card.Header>
											</Card>
										</div>
										<Form
											onSubmit={(e) =>
												dispatch(
													editIcareAction(
														e,
														image,
														setProgressBar,
														setShowProgressBar,
														formEdit[index],
														formEdit,
														setFormEdit,
														setHash
													)
												)
											}
										>
											<FormGroupImage
												label={item.category + " Image (Upload a image from your device)"}
												image={image}
												setImage={setImage}
											/>
											<FormGroup
												id={"formBasicicare"}
												label={`Icare For ${item.category} Leader Name`}
												type={"text"}
												placeholder={"Enter Text"}
												name={"name"}
												value={item.name}
												onChange={(e) => valueChange(e, index)}
											/>
											<FormGroup
												id={"formBasicicare"}
												label={`Icare For ${item.category} Leader phone Number (start with 62)`}
												type={"text"}
												placeholder={"Enter Text"}
												name={"number"}
												value={item.number}
												onChange={(e) => valueChange(e, index)}
											/>
											<FormGroupArea
												id={"formBasicicare2"}
												label={`Icare For ${item.category} Text`}
												type={"text"}
												placeholder={"Enter Description"}
												name={"text"}
												value={item.text}
												onChange={(e) => valueChange(e, index)}
											/>
											<Button
												onClick={() => {
													setShowProgressBar({
														...showProgressBar,
														[item.category]: true,
													});
													setEditStatus({ ...editStatus, [index]: true });
												}}
												type="submit"
												variant="primary"
												disabled={icareData.isLoading || image.disable}
												className="me-2"
											>
												{icareData.isLoading ? "Saving..." : "Save"}
											</Button>
											<Button
												onClick={() => {
													setShowProgressBar({
														...showProgressBar,
														[item.category]: true,
													});
													dispatch(deleteIcareAction(item.id, setFormEdit));
													dispatch(getIcareAction(setFormEdit));
												}}
												type="submit"
												variant="danger"
												disabled={icareData.isLoading || image.disable}
												className="ms-2"
											>
												{icareData.isLoading ? "Deleting..." : "Delete"}
											</Button>
											{icareData.isLoading && showProgressBar[item.category] && (
												<div className="mt-3">
													<ProgressBar animated striped variant="primary" className="" now={progressBar} />
												</div>
											)}
											{icareData.editSuccess && editStatus[index] && (
												<div className="mt-3 text-success">Edit Success !</div>
											)}
											{icareData.error && <div className="mt-3 text-danger">Error Edit Failed !</div>}
										</Form>
									</Col>
								);
							})}
						</div>
					</Col>
				</Row>
			)}
			<IcareCreateModal
				modalState={createModalState}
				closeModal={closeCreateModal}
				// setFormEdit={setFormEdit}
				postIcare={postIcare}
			/>
		</>
	);
}

export default DashIcare;
