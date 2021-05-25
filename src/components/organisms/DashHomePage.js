import React, {useState} from 'react';
import { Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupImage from '../molecules/FormGroupImage';

import { editAction } from '../../redux/actions/category.actions';

function DashHomePage() {
    const dispatch = useDispatch();
    const categoryStatus = useSelector(state => state.category);

    const [formEdit, setFormEdit] = useState({
        textHome : "value text Home",
        descHome : "value desc Home",
        textLocation : "value text Location",
        descLocation : "value desc Location",
    })

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
        disable: "",
    })

    const [imageLocation, setImageLocation] = useState({
        file: null,
        status: "",
        disable: "",
    })

    console.log(categoryStatus);
    console.log(imageHome);

    return (
        <Row className="w-100">
            <Col className="">
                <Row className="m-3">
                    <DashTitle word={"Home Page Details"} />
                    <hr></hr>
                    <Col xs={12} md={8} lg={7} className="mb-3">
                    <DashText word={"Home Details"} />
                    <Form onSubmit={(e) => {dispatch(editAction(e, imageHome, setProgressBar))}}>
                        <FormGroupImage 
                            label={"Home Image"}
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
                        <FormGroup 
                            id={"formBasicHome2"}
                            label={"Home Description"}
                            type={"text"}
                            placeholder={"Enter Description"}
                            name={"descHome"}
                            value={formEdit.descHome}
                            onChange={(e) => valueChange(e)}
                        />
                        <Button type="submit" variant="primary" disabled={()=>{}}>
                            Edit
                        </Button>
                        {!categoryStatus.isLoading && 
                            <div className="mt-3">
                                <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                            </div>
                        }
                    </Form>
                    </Col>
                    {/*  */}
                    <hr></hr>
                    <Col xs={12} md={8} lg={7} className="mb-3">
                    <DashText word={"Location Details"} />
                    <Form onSubmit={(e) => {}}>
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
                        <FormGroup 
                            id={"formBasicLocation2"}
                            label={"Location Description"}
                            type={"text"}
                            placeholder={"Enter Description"}
                            name={"descLocation"}
                            value={formEdit.descLocation}
                            onChange={(e) => valueChange(e)}
                        />
                        
                        <Button type="submit" variant="primary" disabled={()=>{}}>
                            Edit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default DashHomePage
