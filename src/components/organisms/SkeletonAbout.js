import React from 'react'
import {Row,Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
// import SkeletonDesc from '../atoms/SkeletonDesc';

function SkeletonAbout() {
    return (
        <Row className="mySkeletonAboutContentRow aboutContentRow m-lg-5 pb-5 pb-lg-0 mb-5"> 
            <Col className="p-0" xs={12} lg={7}>
                <Skeleton height={"100%"}/>
            </Col>
            <Col className="d-flex flex-column justify-content-start" >
                <div className="px-3 px-lg-5 text-center text-lg-start">
                    <Skeleton height={50} width={"50%"} className="my-5"/>
                    <Skeleton height={25} count={5}/>
                </div>
            </Col>
        </Row>
    )
}

export default SkeletonAbout
