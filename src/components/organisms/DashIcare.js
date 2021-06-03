import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form, ProgressBar, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupArea from '../molecules/FormGroupArea';
import FormGroupImage from '../molecules/FormGroupImage';

import { getIcareAction } from '../../redux/actions/icare.actions';

function DashIcare() {
    const dispatch = useDispatch();
    const icareData = useSelector(state => state.icare);

    const [formEdit, setFormEdit] = useState([]);

    const valueChange = (e, index) => {
        let newArray = formEdit.map((item, num) => {
            if(index === num){
                item[e.target.name] = e.target.value;
                return item;
            }
            else{
                return item
            }
        })

        setFormEdit([
            ...newArray
        ])
        
    }

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
        name: "leadericareyouth"
    });

    const [imageIcaremen, setImageicaremen] = useState({
        file: null,
        status: "",
        disable: false,
        name: "leadericaremen"
    });

    const [imageIcarewoman, setImageicarewoman] = useState({
        file: null,
        status: "",
        disable: false,
        name: "leadericarewoman"
    });

    useEffect(() => {
        dispatch(getIcareAction(setFormEdit));
    }, [dispatch])

    console.log(formEdit);

    return (
        <>
        {
        icareData.isInit ? 
        <Row className="w-100 m-3">
            Loading...
        </Row>
        :
        <Row className="w-100">
            <Col className="">
                <div className="m-3">
                    <DashTitle word={"Icare Leader and Details"} />
                    <hr></hr>

                    {
                        formEdit.map((item, index) => 
                        {
                            let title = "";
                            let image = "";
                            if(item.category == "icareyouth"){
                                title = "Icare For Youth";
                                image = imageIcareyouth;
                            }else if(item.category == "icaremen"){
                                title = "Icare For Men";
                                image = imageIcaremen
                            }else {
                                title = "Icare For Woman";
                                image = imageIcarewoman
                            }

                        return (
                            <Col key={index} xs={12} md={8} lg={5} className="mb-5">
                                {/* {item.category == "icareyouth" ?
                                    <DashText word={"Icare For Youth Details"} />
                                :
                                item.category == "icaremen" ?
                                    <DashText word={"Icare For Men Details"} />
                                :
                                    <DashText word={"Icare For Woman Details"} />
                                } */}

                                <DashText word={ title + " Details"} />
                                <Card className="w-100 mb-3">
                                <Card.Img variant="top" className="dashImage" src={`/${formEdit.image}?${hash}`} onError={(e)=>{e.target.onerror = null; e.target.src="/uploads/imgNotFound.jpg"}} />
                                <Card.Header className="text-center">
                                    <Card.Title>Preview Image Leader</Card.Title>
                                </Card.Header>
                                </Card>
                                <Form onSubmit={(e) => {}}>
                                    <FormGroupImage 
                                        label={ title + " Image (Upload a image from your device, jpg or png at least 1000px x 500px for better result)"}
                                        image={image}
                                        setImage={"setImage"+item.category}
                                        
                                    />
                                    <FormGroup 
                                        id={"formBasicicare"}
                                        label={ title + " Leader Name"}
                                        type={"text"}
                                        placeholder={"Enter Text"}
                                        name={"name"}
                                        value={item.name}
                                        onChange={(e) => valueChange(e, index)}
                                    />
                                    <FormGroupArea 
                                        id={"formBasicicare2"}
                                        label={ title + " Text"}
                                        type={"text"}
                                        placeholder={"Enter Description"}
                                        name={"text"}
                                        value={item.text}
                                        onChange={(e) => valueChange(e, index)}
                                    />
                                    <Button onClick={() => setShowProgressBar({...showProgressBar, [item.category] : true})} type="submit" variant="primary" disabled={(icareData.isLoading || ["image" + item.category].disable)}>
                                        {(icareData.isLoading || ["image" + item.category].disable) ? "Saving..." : "Save"}
                                    </Button>
                                    {icareData.isLoading && showProgressBar[item.category] &&
                                        <div className="mt-3">
                                            <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                                        </div>
                                    }
                                    {icareData.error && 
                                        <div className="mt-3 text-danger">
                                            Error Edit Failed !
                                        </div>
                                    }
                                </Form>
                            </Col>
                        )})
                    }

                </div>
            </Col>
        </Row>
        }
        </>
    )
}

export default DashIcare
