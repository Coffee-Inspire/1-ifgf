import React from 'react'
import {Row,Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function SkeletonVisionMission(props) {
    return (
        <Row className="aboutContentRow m-lg-5 pb-5 pb-lg-0 mb-5 justify-content-center">
            <Col className="bg-white pb-3 separator " lg={12}>
                <h3 className="fw-bold text-uppercase">{props.title}</h3>
            </Col>
            <Col className="text-center py-5 my-5" xs={6} lg={3}>
                <Skeleton height={60}/>
            </Col> 
            <Col className="px-5 pb-5" xs={12} lg={12}>
                <Skeleton duration={0.8} height={30} count={3}/>
            </Col>
        </Row>
    )
}

export default SkeletonVisionMission
