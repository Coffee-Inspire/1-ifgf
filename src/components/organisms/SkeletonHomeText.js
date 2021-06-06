import React from 'react'
import {Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function SkeletonCenterButton() {
    return (
       <div className="d-flex flex-column align-items-center my-5 py-5"> 
            <Col className="text-center py-5 my-3" xs={7} lg={5}>
                <Skeleton duration={0.8} height={60}/>
            </Col>
            <Col className="py-5 my-3" xs={11} lg={8}>
                <Skeleton duration={0.8} height={30} count={3} />
            </Col>
        </div>
    )
}

export default SkeletonCenterButton
