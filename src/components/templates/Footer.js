import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// importing react-bootstrap tags
import {Container,Row,Col} from 'react-bootstrap';

import { getFooterAction } from '../../redux/actions/footer.actions';

import SkeletonFooter from '../organisms/SkeletonFooter';

function Footer() {
    const dispatch = useDispatch();
    const footerData = useSelector(state => state.footer);

    const [formFooter, setFormFooter] = useState({});

    useEffect(() => {
        dispatch(getFooterAction(setFormFooter));
    }, [dispatch])

    // inputing footer title
    let footerTitle = `IFGF Mataram`;

    // inputing footer caption
    // let footerCaption = 'GREATER DESTINY';

    // inputing footer hotline
    // let footerHotline = 'Sekretariat IFGF Mataram :  +62 817 578 1441 (M)  | Email : ifgfgisi_mataram@yahoo.co.id';

    // inputing footer text 
    // let footerText = 'IFGF MATARAM, Komp. Central Plaza, Jl. A. A Gede Ngurah, Abian Tubuh Baru, Kec. Cakranegara, Kota Mataram, Nusa Tenggara Barat. 83232, Indonesia';
    
    // inputing footer copyright
    let footerCopyright = '@2021 by IFGF Mataram';
    return (
        <Container fluid id="footerContainer">

            <Row className="d-flex justify-content-center text-center px-3">
            {footerData.isInit &&  <SkeletonFooter/>}
            {!footerData.isInit &&  
                <>
                <Col className=" border-top border-2 pt-4 pb-2" lg={11}>
                    <h4>{footerTitle}</h4>
                    <p>{formFooter.title}</p>
                </Col>
                <Col lg={11}>
                    <p>{formFooter.hotline}</p>
                </Col>
                <Col  lg={6}>
                    <p>{formFooter.description}</p>
                </Col>
                <Col className="mt-5 mb-3" lg={11}>
                    <h5>{footerCopyright}</h5>
                </Col>
                </>
            }
            </Row>
    
        </Container>
    )
}

export default Footer


