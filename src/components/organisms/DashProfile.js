import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form, ProgressBar, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupArea from '../molecules/FormGroupArea';
import FormGroupImage from '../molecules/FormGroupImage';

import { editProfileWebAction, getProfileWebAction } from '../../redux/actions/profileWeb.actions';

function DashProfile() {
    const dispatch = useDispatch();
    const profileWebData = useSelector(state => state.profileWeb);

    const [formEdit, setFormEdit] = useState([]);

    const valueChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name] : e.target.value
        })
    }

    const [hash, setHash] = useState(1);

    const [progressBar, setProgressBar] = useState(0);

    const [showProgressBar, setShowProgressBar] = useState({
        profileWeb: false,
    });

    const [imagePastor, setImagePastor] = useState({
        file: null,
        status: "",
        disable: false,
        name: "pastor"
    });

    useEffect(() => {
        dispatch(getProfileWebAction(setFormEdit));
    }, [dispatch])

    // console.log(formEdit);

    return (
        <>
        {
        profileWebData.isInit ? 
        <Row className="w-100 m-3">
            Loading...
        </Row>
        :
        <Row className="w-100">
            <Col className="">
                <div className="m-3">
                    <DashTitle word={"Profile Web Details"} />
                    <hr></hr>

                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                    <DashText word={"Pastor Details"} />
                    <div className="">
                    <Card className="mb-3 dashImagePotraitFrame">
                    <Card.Img variant="top" className="dashImagePotrait" src={`${formEdit.pastorImage}?${hash}`} onError={(e)=>{e.target.onerror = null; e.target.src="/uploads/imgNotFoundPotrait.jpg"}} />
                    <Card.Header className="text-center">
                        <Card.Title>Preview Image Pastor</Card.Title>
                    </Card.Header>
                    </Card>
                    </div>
                    <Form onSubmit={(e) => dispatch(editProfileWebAction(e, imagePastor, setProgressBar, setShowProgressBar, formEdit, setFormEdit, setHash))}>
                        <FormGroupImage 
                            label={"Pastor Image (Upload a image from your device)"}
                            image={imagePastor}
                            setImage={setImagePastor}
                            
                        />
                        <FormGroup 
                            id={"formBasicProfileweb"}
                            label={"Pastor Name"}
                            type={"text"}
                            placeholder={"Enter Text"}
                            name={"pastorName"}
                            value={formEdit.pastorName}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroupArea 
                            id={"formBasicProfileweb2"}
                            label={"Pastor Text"}
                            type={"text"}
                            placeholder={"Enter Description"}
                            name={"pastorText"}
                            value={formEdit.pastorText}
                            onChange={(e) => valueChange(e)}
                        />

                        <DashText word={"Vision Details"} />
                        <FormGroup 
                            id={"formBasicVision"}
                            label={"Vision Title"}
                            type={"text"}
                            placeholder={"Enter Title"}
                            name={"visionTitle"}
                            value={formEdit.visionTitle}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroupArea 
                            id={"formBasicVision2"}
                            label={"Vision Text"}
                            type={"text"}
                            placeholder={"Enter Text"}
                            name={"visionText"}
                            value={formEdit.visionText}
                            onChange={(e) => valueChange(e)}
                        />

                        <DashText word={"Mission Details"} />
                        <FormGroup 
                            id={"formBasicMission"}
                            label={"Mission Title"}
                            type={"text"}
                            placeholder={"Enter Title"}
                            name={"missionTitle"}
                            value={formEdit.missionTitle}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroupArea 
                            id={"formBasicMission2"}
                            label={"Mission Text"}
                            type={"text"}
                            placeholder={"Enter Text"}
                            name={"missionText"}
                            value={formEdit.missionText}
                            onChange={(e) => valueChange(e)}
                        />


                        <Button onClick={() => setShowProgressBar({...showProgressBar, profileWeb : true})} type="submit" variant="primary" disabled={(profileWebData.isLoading || imagePastor.disable)}>
                            {(profileWebData.isLoading) ? "Saving..." : "Save"}
                        </Button>
                        {profileWebData.isLoading && showProgressBar.profileWeb &&
                            <div className="mt-3">
                                <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                            </div>
                        }
                        {profileWebData.editSuccess &&
                                <div className="mt-3 text-success">
                                    Edit Success !
                                </div>
                            }
                        {profileWebData.error && 
                            <div className="mt-3 text-danger">
                                Error Edit Failed !
                            </div>
                        }
                    </Form>
                    </Col>

                </div>
            </Col>
        </Row>
        }
        </>
    )
}

export default DashProfile
