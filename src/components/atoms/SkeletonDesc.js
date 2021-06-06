import React from 'react'
import Skeleton from 'react-loading-skeleton';
import {Col} from 'react-bootstrap';

function SkeletonDesc(props) {
    return (
        <div className="d-flex justify-content-center py-5 my-3 mx-lg-5">
            <Col xs={10} lg={8}>
            <Skeleton duration={0.8} height={20}  count={3}/>
            </Col>
        </div>
    )
}

export default SkeletonDesc
