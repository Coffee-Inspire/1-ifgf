import React from 'react'
import Skeleton from 'react-loading-skeleton';
import {Row} from 'react-bootstrap';

function SkeletonCenterButton() {
    return (
        <Row className="mySkeletonBannerRow">
            <div className="imageBannerFrame p-0">
                <Skeleton duration={0.8} height={"100%"} className="mySkeletonBanner"/>
            </div>
        </Row>
    )
}

export default SkeletonCenterButton
