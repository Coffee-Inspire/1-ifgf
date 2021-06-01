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
            [e.target.name] : [e.target.value]
        })
    }

    const [progressBar, setProgressBar] = useState(0);

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

    useEffect(() => {
        dispatch(getCategoryAction(setFormEdit));
    }, [dispatch])

    console.log(categoryData);
    console.log(formEdit);
    // console.log(imageHome);

    return (
        <>
        {
        categoryData.isLoading ? 
        <Row>Loading</Row>
        :
        <Row className="w-100">
            <Col className="">
                <Row className="m-3">
                    <DashTitle word={"Home Page Details"} />
                    <hr></hr>
                    <Col xs={12} md={8} lg={5} className="mb-5">
                    <DashText word={"Home Details"} />
                    <Card className="w-100 mb-3">
                    <Card.Img variant="top" className="dashImage" src={formEdit.imgHome} onError={(e)=>{e.target.onerror = null; e.target.src="uploads/imgNotFound.jpg"}} />
                    <Card.Header className="text-center">
                        <Card.Title>Preview Image Home</Card.Title>
                    </Card.Header>
                    </Card>
                    <Form onSubmit={(e) => {dispatch(editAction(e, imageHome, setProgressBar))}}>
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
                        <Button type="submit" variant="primary" disabled={(categoryData.isLoading || imageHome.disable)}>
                            Save
                        </Button>
                        {categoryData.isLoading && 
                            <div className="mt-3">
                                <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                            </div>
                        }
                    </Form>
                    </Col>
                    {/*  */}

                    <hr></hr>
                    <Col xs={12} md={8} lg={5} className="mb-5">
                    <DashText word={"Location Details"} />
                    <Card className="w-100 mb-3">
                    <Card.Img variant="top" className="dashImage" src={formEdit.imgLocation} onError={(e)=>{e.target.onerror = null; e.target.src="uploads/imgNotFound.jpg"}} />
                    <Card.Header className="text-center">
                        <Card.Title>Preview Image Location</Card.Title>
                    </Card.Header>
                    </Card>
                    <Form onSubmit={(e) => {dispatch(editAction(e, imageLocation, setProgressBar))}}>
                        <FormGroupImage 
                            label={"Location Image"}
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
                        
                        <Button type="submit" variant="primary" disabled={categoryData.isLoading}>
                            Edit Location
                        </Button>
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
