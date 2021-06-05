import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, ProgressBar, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupArea from '../molecules/FormGroupArea';
import FormGroupImage from '../molecules/FormGroupImage';

import { getCategoryAction, editAction } from '../../redux/actions/category.actions';

function DashHomePage() {
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.category);

    const [formEdit, setFormEdit] = useState({})

    const valueChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name] : e.target.value
        })
    }

    const [progressBar, setProgressBar] = useState(0);
    
    const [showProgressBar, setShowProgressBar] = useState({
        showHome : false,
        showLocation : false,
        showIcare : false,
        showIfgfyouth: false,
        showIfgfkids: false,
    });

    const [imageHome, setImageHome] = useState({
        file: null,
        status: "",
        disable: false,
        name: "home"
    })

    const [imageLocation, setImageLocation] = useState({
        file: null,
        status: "",
        disable: false,
        name: "location"
    })

    const [imageIcare, setImageIcare] = useState({
        file: null,
        status: "",
        disable: false,
        name: "icare"
    })

    const [imageIfgfyouth, setImageIfgfyouth] = useState({
        file: null,
        status: "",
        disable: false,
        name: "ifgfyouth"
    })

    const [imageIfgfkids, setImageIfgfkids] = useState({
        file: null,
        status: "",
        disable: false,
        name: "ifgfkids"
    })

    useEffect(() => {
        dispatch(getCategoryAction(setFormEdit));
    }, [dispatch])

    // console.log(categoryData);
    // console.log(formEdit);
    // console.log(imageHome);

    return (
        <>
        {
        categoryData.isInit ? 
        <Row className="w-100 m-3">
            Loading...
        </Row>
        :
        <Row className="w-100">
            <Col className="">
                <Row className="m-3">

                    {/* Home Page */}
                    <DashTitle word={"Home Page Details"} />
                    <hr></hr>
                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                        <DashText word={"Home Details"} />
                        <Card className="w-100 mb-3">
                        <Card.Img variant="top" className="dashImage" src={`${formEdit.imgHome}?${formEdit.hash}`} onError={(e)=>{e.target.onerror = null; e.target.src="uploads/imgNotFound.jpg"}} />
                        <Card.Header className="text-center">
                            <Card.Title>Preview Image Home</Card.Title>
                        </Card.Header>
                        </Card>
                        <Form onSubmit={(e) => {dispatch(editAction(e, imageHome, setProgressBar, setShowProgressBar, formEdit.idHome, 
                            formEdit.textHome, formEdit.descHome, formEdit ,setFormEdit))}}>
                            <FormGroupImage 
                                label={"Home Image (Upload a image from your device, jpg or png at least 1000px x 500px for better result)"}
                                image={imageHome}
                                setImage={setImageHome}
                                
                            />
                            <FormGroup 
                                id={"formBasicHome"}
                                label={"Home Text"}
                                type={"text"}
                                placeholder={"Enter Text"}
                                name={"textHome"}
                                value={formEdit.textHome}
                                onChange={(e) => valueChange(e)}
                            />
                            <FormGroupArea 
                                id={"formBasicHome2"}
                                label={"Home Description"}
                                type={"text"}
                                placeholder={"Enter Description"}
                                name={"descHome"}
                                value={formEdit.descHome}
                                onChange={(e) => valueChange(e)}
                            />
                            <Button onClick={() => setShowProgressBar({...showProgressBar, showHome : true})} type="submit" variant="primary" disabled={(categoryData.isLoading || imageHome.disable)}>
                                {(categoryData.isLoading || imageHome.disable) ? "Saving..." : "Save"}
                            </Button>
                            {categoryData.isLoading && showProgressBar.showHome &&
                                <div className="mt-3">
                                    <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                                </div>
                            }
                            {categoryData.error && 
                                <div className="mt-3 text-danger">
                                    Error Edit Failed !
                                </div>
                            }
                        </Form>
                    </Col>

                    {/* Location Page */}
                    <hr></hr>
                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                        <DashText word={"Location Details"} />
                        <Card className="w-100 mb-3">
                        <Card.Img variant="top" className="dashImage" src={`${formEdit.imgLocation}?${formEdit.hash}`} onError={(e)=>{e.target.onerror = null; e.target.src="uploads/imgNotFound.jpg"}} />
                        <Card.Header className="text-center">
                            <Card.Title>Preview Image Location</Card.Title>
                        </Card.Header>
                        </Card>
                        <Form onSubmit={(e) => {dispatch(editAction(e, imageLocation, setProgressBar, setShowProgressBar, formEdit.idLocation, 
                            formEdit.textLocation, formEdit.descLocation, formEdit ,setFormEdit))}}>
                            <FormGroupImage 
                                label={"Location Image (Upload a image from your device, jpg or png at least 1000px x 500px for better result)"}
                                image={imageLocation}
                                setImage={setImageLocation}
                            />
                            <FormGroup 
                                id={"formBasicLocation"}
                                label={"Location Text"}
                                type={"text"}
                                placeholder={"Enter Text"}
                                name={"textLocation"}
                                value={formEdit.textLocation}
                                onChange={(e) => valueChange(e)}
                            />
                            <FormGroupArea 
                                id={"formBasicLocation2"}
                                label={"Location Description"}
                                type={"text"}
                                placeholder={"Enter Description"}
                                name={"descLocation"}
                                value={formEdit.descLocation}
                                onChange={(e) => valueChange(e)}
                            />
                            
                            <Button onClick={() => setShowProgressBar({...showProgressBar, showLocation : true})} type="submit" variant="primary" disabled={(categoryData.isLoading || imageLocation.disable)}>
                            {(categoryData.isLoading || imageHome.disable) ? "Saving..." : "Save"}
                            </Button>
                            {categoryData.isLoading && showProgressBar.showLocation &&
                                <div className="mt-3">
                                    <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                                </div>
                            }
                            {categoryData.error && 
                                <div className="mt-3 text-danger">
                                    Error Edit Failed !
                                </div>
                            }
                        </Form>
                    </Col>

                    {/* Icare Page */}
                    <hr></hr>
                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                        <DashText word={"Icare Details"} />
                        <Card className="w-100 mb-3">
                        <Card.Img variant="top" className="dashImage" src={`${formEdit.imgIcare}?${formEdit.hash}`} onError={(e)=>{e.target.onerror = null; e.target.src="uploads/imgNotFound.jpg"}} />
                        <Card.Header className="text-center">
                            <Card.Title>Preview Image Icare</Card.Title>
                        </Card.Header>
                        </Card>
                        <Form onSubmit={(e) => {dispatch(editAction(e, imageIcare, setProgressBar, setShowProgressBar, formEdit.idIcare, 
                            formEdit.textIcare, formEdit.descIcare, formEdit ,setFormEdit))}}>
                            <FormGroupImage 
                                label={"Icare Image (Upload a image from your device, jpg or png at least 1000px x 500px for better result)"}
                                image={imageIcare}
                                setImage={setImageIcare}
                                
                            />
                            <FormGroup 
                                id={"formBasicIcare"}
                                label={"Icare Text"}
                                type={"text"}
                                placeholder={"Enter Text"}
                                name={"textIcare"}
                                value={formEdit.textIcare}
                                onChange={(e) => valueChange(e)}
                            />
                            <FormGroupArea 
                                id={"formBasicIcare2"}
                                label={"Icare Description"}
                                type={"text"}
                                placeholder={"Enter Description"}
                                name={"descIcare"}
                                value={formEdit.descIcare}
                                onChange={(e) => valueChange(e)}
                            />
                            <Button onClick={() => setShowProgressBar({...showProgressBar, showIcare : true})} type="submit" variant="primary" disabled={(categoryData.isLoading || imageIcare.disable)}>
                                {(categoryData.isLoading || imageIcare.disable) ? "Saving..." : "Save"}
                            </Button>
                            {categoryData.isLoading && showProgressBar.showIcare &&
                                <div className="mt-3">
                                    <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                                </div>
                            }
                            {categoryData.error && 
                                <div className="mt-3 text-danger">
                                    Error Edit Failed !
                                </div>
                            }
                        </Form>
                    </Col>

                    {/* Ifgf Youth */}
                    <hr></hr>
                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                        <DashText word={"IFGF Youth Details"} />
                        <Card className="w-100 mb-3">
                        <Card.Img variant="top" className="dashImage" src={`${formEdit.imgIfgfyouth}?${formEdit.hash}`} onError={(e)=>{e.target.onerror = null; e.target.src="uploads/imgNotFound.jpg"}} />
                        <Card.Header className="text-center">
                            <Card.Title>Preview Image IFGF Youth</Card.Title>
                        </Card.Header>
                        </Card>
                        <Form onSubmit={(e) => {dispatch(editAction(e, imageIfgfyouth, setProgressBar, setShowProgressBar, formEdit.idIfgfyouth, 
                            formEdit.textIfgfyouth, formEdit.descIfgfyouth, formEdit ,setFormEdit))}}>
                            <FormGroupImage 
                                label={"IFGF Youth Image (Upload a image from your device, jpg or png at least 1000px x 500px for better result)"}
                                image={imageIfgfyouth}
                                setImage={setImageIfgfyouth}
                                
                            />
                            <FormGroup 
                                id={"formBasicIfgfyouth"}
                                label={"Ifgfyouth Text"}
                                type={"text"}
                                placeholder={"Enter Text"}
                                name={"textIfgfyouth"}
                                value={formEdit.textIfgfyouth}
                                onChange={(e) => valueChange(e)}
                            />
                            <FormGroupArea 
                                id={"formBasicIfgfyouth2"}
                                label={"Ifgfyouth Description"}
                                type={"text"}
                                placeholder={"Enter Description"}
                                name={"descIfgfyouth"}
                                value={formEdit.descIfgfyouth}
                                onChange={(e) => valueChange(e)}
                            />
                            <Button onClick={() => setShowProgressBar({...showProgressBar, showIfgfyouth : true})} type="submit" variant="primary" disabled={(categoryData.isLoading || imageIcare.disable)}>
                                {(categoryData.isLoading || imageIfgfyouth.disable) ? "Saving..." : "Save"}
                            </Button>
                            {categoryData.isLoading && showProgressBar.showIfgfyouth &&
                                <div className="mt-3">
                                    <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                                </div>
                            }
                            {categoryData.error && 
                                <div className="mt-3 text-danger">
                                    Error Edit Failed !
                                </div>
                            }
                        </Form>
                    </Col>

                    {/* Ifgf Kids */}
                    <hr></hr>
                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                        <DashText word={"IFGF Kids Details"} />
                        <Card className="w-100 mb-3">
                        <Card.Img variant="top" className="dashImage" src={`${formEdit.imgIfgfkids}?${formEdit.hash}`} onError={(e)=>{e.target.onerror = null; e.target.src="uploads/imgNotFound.jpg"}} />
                        <Card.Header className="text-center">
                            <Card.Title>Preview Image IFGF Kids</Card.Title>
                        </Card.Header>
                        </Card>
                        <Form onSubmit={(e) => {dispatch(editAction(e, imageIfgfkids, setProgressBar, setShowProgressBar, formEdit.idIfgfkids, 
                            formEdit.textIfgfkids, formEdit.descIfgfkids, formEdit ,setFormEdit))}}>
                            <FormGroupImage 
                                label={"IFGF Kids Image (Upload a image from your device, jpg or png at least 1000px x 500px for better result)"}
                                image={imageIfgfkids}
                                setImage={setImageIfgfkids}
                                
                            />
                            <FormGroup 
                                id={"formBasicIfgfkids"}
                                label={"Ifgfkids Text"}
                                type={"text"}
                                placeholder={"Enter Text"}
                                name={"textIfgfkids"}
                                value={formEdit.textIfgfkids}
                                onChange={(e) => valueChange(e)}
                            />
                            <FormGroupArea 
                                id={"formBasicIfgfkids2"}
                                label={"Ifgfkids Description"}
                                type={"text"}
                                placeholder={"Enter Description"}
                                name={"descIfgfkids"}
                                value={formEdit.descIfgfkids}
                                onChange={(e) => valueChange(e)}
                            />
                            <Button onClick={() => setShowProgressBar({...showProgressBar, showIfgfkids : true})} type="submit" variant="primary" disabled={(categoryData.isLoading || imageIcare.disable)}>
                                {(categoryData.isLoading || imageIfgfkids.disable) ? "Saving..." : "Save"}
                            </Button>
                            {categoryData.isLoading && showProgressBar.showIfgfkids &&
                                <div className="mt-3">
                                    <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                                </div>
                            }
                            {categoryData.error && 
                                <div className="mt-3 text-danger">
                                    Error Edit Failed !
                                </div>
                            }
                        </Form>
                    </Col>

                </Row>
            </Col>
        </Row>
        }
        </>
    )
}

export default DashHomePage
