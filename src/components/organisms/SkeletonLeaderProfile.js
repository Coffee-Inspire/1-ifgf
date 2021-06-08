import React from 'react'
import {Row,Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import SkeletonDesc from '../atoms/SkeletonDesc';

function SkeletonLeaderProfile() {
    return (
        <>
            <SkeletonDesc count={1}/>
             <Row >
                    <Col className="text-center text-lg-end px-lg-5" xs={12} lg={6}>
                        <div className="myIcareLeaderImageFrame d-flex justify-content-center justify-content-lg-end" >
                            <div className="mySkeletonLeaderImage"><Skeleton duration={0.8} height={"100%"}/></div>
                        </div>
                    </Col>
                    <Col className="text-center text-lg-start d-flex flex-column justify-content-lg-end mt-4" lg={4}>
                        <Col className="mb-5 d-flex flex-column align-self-center" xs={11} lg={12}>
                            <Col xs={8} lg={6} className="align-self-center align-self-lg-start">
                                <Skeleton duration={0.8} height={50}/>
                            </Col>
                            <Skeleton duration={0.8} height={35}/>
                        </Col>
                        <Col className="mb-5 d-flex flex-column align-self-center" xs={11} lg={12}>
                            <Col xs={8} lg={6} className="align-self-center align-self-lg-start">
                                <Skeleton duration={0.8} height={50}/>
                            </Col>
                            <Skeleton duration={0.8} height={35}/>
                        </Col>
                        <Col className="align-self-center align-self-lg-start" xs={11} lg={6}>
                            <Skeleton duration={0.8} height={60}/>
                        </Col>
                    </Col>
                </Row>
        </>
    )
}

export default SkeletonLeaderProfile
