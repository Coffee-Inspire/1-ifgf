import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupArea from '../molecules/FormGroupArea';

import { editEventAction, getEventAction } from '../../redux/actions/event.actions';

function DashEvent() {
    const dispatch = useDispatch();
    const eventData = useSelector(state => state.event);

    const [formEdit, setFormEdit] = useState([]);

    const [editStatus, setEditStatus] = useState({})

    const checkBoxChange = (e, index) => {
        let newArray = formEdit.map((item, num) => {
            let bool = 0;
            if(index === num){
                if(e.target.checked === false){
                    bool = 0;
                }else {
                    bool = 1;
                }

                item["status"] = bool;
                return item;
            }
            else{
                return item
            }
        })

        setFormEdit([
            ...newArray
        ])
    };

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


    useEffect(() => {
        dispatch(getEventAction(setFormEdit));
    }, [dispatch])

    // console.log(formEdit);
    // console.log(editStatus);

    return (
        <>
        {
        eventData.isInit ? 
        <Row className="w-100 m-3">
            Loading...
        </Row>
        :
        <Row className="w-100">
            <Col className="">
                <div className="m-3">
                    <DashTitle word={"Event IFGF Youth and KIDS Details"} />
                    <hr></hr>

                    {
                        formEdit.map((item, index) => 
                        {
                            let title = "";
                            if(item.category === "ifgfyouth"){
                                title = "IFGF For Youth";


                            }else {
                                title = "Icare For Kids";

                            }

                        return (
                            <Col key={index} xs={12} md={8} lg={7} xl={5} className="mb-5">
                                <DashText word={ title + " Event"} />
                                {/* <Form onSubmit={(e) => dispatch(editEventAction(e, image, setProgressBar, setShowProgressBar, formEdit[index], formEdit, setFormEdit, setHash))}> */}
                                <Form onSubmit={(e) => dispatch(editEventAction(e, item.id, formEdit[index]))}>
                                    <Form.Check
                                        inline
                                        label="Active Event"
                                        name="status"
                                        type="checkbox"
                                        id={`checkbox-1`}
                                        checked={item.status}
                                        onChange={(e) => checkBoxChange(e, index)}
                                    />
                                    <FormGroup 
                                        id={"formBasicEvent"}
                                        label={"Event Title"}
                                        type={"text"}
                                        placeholder={"Enter Text"}
                                        name={"title"}
                                        value={item.title}
                                        onChange={(e) => valueChange(e, index)}
                                    />
                                    <FormGroupArea 
                                        id={"formBasicEvent2"}
                                        label={"Event Text"}
                                        type={"text"}
                                        placeholder={"Enter Description"}
                                        name={"text"}
                                        value={item.text}
                                        onChange={(e) => valueChange(e, index)}
                                    />
                                    <Button onClick={() => setEditStatus({...editStatus, [index] : true})} type="submit" variant="primary" disabled={(eventData.isLoading)}>
                                        {(eventData.isLoading) ? "Saving..." : "Save"}
                                    </Button>
                                    {eventData.editSuccess && editStatus[index] &&
                                        <div className="mt-3 text-success">
                                            Edit Success !
                                        </div>
                                    }
                                    {eventData.error && 
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

export default DashEvent
