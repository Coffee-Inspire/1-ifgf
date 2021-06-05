import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form, ProgressBar, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupArea from '../molecules/FormGroupArea';
import FormGroupImage from '../molecules/FormGroupImage';

import { editEventAction, getEventAction } from '../../redux/actions/event.actions';

function DashEvent() {
    const dispatch = useDispatch();
    const eventData = useSelector(state => state.event);

    const [formEdit, setFormEdit] = useState([]);


    useEffect(() => {
        dispatch(getEventAction(setFormEdit));
    }, [dispatch])

    console.log(formEdit);

    return (
        <>
        {
        eventData.isInit ? 
        <Row className="w-100 m-3">
            Loading...
        </Row>
        :
            null
        }
        </>
    )
}

export default DashEvent
