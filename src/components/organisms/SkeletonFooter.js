import React from 'react'
import {Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function SkeletonFooter() {
    return (
        <>
        <Col className=" border-top border-2 pt-4 pb-2" lg={11}>
            <div className="d-flex justify-content-center flex-column">
                <Skeleton width={200} height={40} count={1}/>
                <Skeleton width={200} height={40} count={1}/>
            </div>
        </Col>
        <Col lg={11}>
            <Skeleton height={30} count={1}/>
        </Col>
        <Col  lg={6}>
            <Skeleton height={30} count={2}/>
        </Col>
        <Col className="mt-5 mb-3" lg={11}>
            <Skeleton width={200} height={30} count={1}/>
        </Col>
        </>
    )
}

export default SkeletonFooter
