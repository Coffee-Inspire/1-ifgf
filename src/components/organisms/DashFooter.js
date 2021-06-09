import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupArea from '../molecules/FormGroupArea';

import { editFooterAction, getFooterAction } from '../../redux/actions/footer.actions';

function DashFooter() {
    const dispatch = useDispatch();
    const footerData = useSelector(state => state.footer);

    const [formEdit, setFormEdit] = useState({});

    const valueChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        dispatch(getFooterAction(setFormEdit));
    }, [dispatch])

    // console.log(formEdit);

    return (
        <>
        {
        footerData.isInit ? 
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
                    <DashText word={"Footer Details"} />
                    <Form onSubmit={(e) => dispatch(editFooterAction(e, formEdit))}>
                        <FormGroup 
                            id={"formBasicFooter"}
                            label={"Footer Title"}
                            type={"text"}
                            placeholder={"Enter Text"}
                            name={"title"}
                            value={formEdit.title}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroupArea 
                            id={"formBasicFooter2"}
                            label={"Footer Hotline"}
                            type={"text"}
                            placeholder={"Enter Description"}
                            name={"hotline"}
                            value={formEdit.hotline}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroupArea 
                            id={"formBasicFooter3"}
                            label={"Footer Description"}
                            type={"text"}
                            placeholder={"Enter Description"}
                            name={"description"}
                            value={formEdit.description}
                            onChange={(e) => valueChange(e)}
                        />


                        <Button type="submit" variant="primary" disabled={(footerData.isLoading)}>
                            {(footerData.isLoading) ? "Saving..." : "Save"}
                        </Button>
                        {footerData.editSuccess &&
                                <div className="mt-3 text-success">
                                    Edit Success !
                                </div>
                            }
                        {footerData.error && 
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

export default DashFooter
