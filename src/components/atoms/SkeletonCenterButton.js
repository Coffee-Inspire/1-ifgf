import React from 'react'
import Skeleton from 'react-loading-skeleton';
import {Row,Col} from 'react-bootstrap';

function SkeletonCenterButton() {
    return (
        <Row className="d-flex justify-content-center mt-4">
            <Col xs={11} md={12} lg={2}>
                <Skeleton duration={0.8} height={60}/>
            </Col>
        </Row>
    )
}

export default SkeletonCenterButton
