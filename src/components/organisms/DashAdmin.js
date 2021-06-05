import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form, ProgressBar, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupNoRequired from '../molecules/FormGroupNoRequired';

import { editAdminAction } from '../../redux/actions/auth.actions';

function DashAdmin() {
    const dispatch = useDispatch();
    const authData = useSelector(state => state.auth);

    const [formEdit, setFormEdit] = useState({
        email : "",
        password : "",
        password_confirmation : "",
        password_old : "",
    });

    let currentEmail = "";

    const valueChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name] : e.target.value
        })
    }

    if(localStorage.ifgfPayload){
        try {
            currentEmail = JSON.parse(localStorage.ifgfPayload).email;
        } catch(e) {
            window.location = '/admin';
        }
        
    }else{
        window.location = '/admin';
    }

    useEffect(() => {
        setFormEdit({
            ...formEdit,
            email : JSON.parse(localStorage.ifgfPayload).email
        });
    }, [])

    return (
        <>
        <Row className="w-100">
            <Col className="">
                <div className="m-3">
                    <DashTitle word={"Admin Details"} />
                    <hr></hr>

                    <Col xs={12} md={8} lg={7} xl={5} className="mb-5">
                    {/* <DashText word={"Pastor Details"} /> */}
                    {/* <Form onSubmit={(e) => dispatch(editAdminAction(e, imagePastor, setProgressBar, setShowProgressBar, formEdit, setFormEdit, setHash))}> */}
                    <Form onSubmit={(e) => dispatch(editAdminAction(e, currentEmail, formEdit, setFormEdit))}>

                        <DashText word={"Vision Details"} />
                        <FormGroup 
                            id={"formBasicEmail"}
                            label={"Email"}
                            type={"email"}
                            placeholder={"Enter Email"}
                            name={"email"}
                            value={formEdit.email}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroupNoRequired 
                            id={"formBasicNewPassword"}
                            label={"New Password (if you dont want change new password leave it empty)"}
                            type={"password"}
                            placeholder={"Enter Password"}
                            name={"password"}
                            value={formEdit.password}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroupNoRequired 
                            id={"formBasicNewPassword2"}
                            label={"New Password Confirmation"}
                            type={"password"}
                            placeholder={"Enter Password"}
                            name={"password_confirmation"}
                            value={formEdit.password_confirmation}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroup 
                            id={"formBasicPassword"}
                            label={"Old Password"}
                            type={"password"}
                            placeholder={"Enter Password"}
                            name={"password_old"}
                            value={formEdit.password_old}
                            onChange={(e) => valueChange(e)}
                        />



                        <Button type="submit" variant="primary" disabled={(authData.isLoading)}>
                            {(authData.isLoading) ? "Saving..." : "Save"}
                        </Button>
                        {/* {authData.isLoading && showProgressBar.profileWeb &&
                            <div className="mt-3">
                                <ProgressBar animated striped variant="primary" className="" now={progressBar} />
                            </div>
                        } */}
                        {authData.editSuccess &&
                            <div className="mt-3 text-success">
                                Edit Success !
                            </div>
                        }
                        {authData.error && 
                            <div className="mt-3 text-danger">
                                Error Edit Failed !
                            </div>
                        }
                    </Form>
                    
                    </Col>

                </div>
            </Col>
        </Row>
        </>
    )
}

export default DashAdmin
