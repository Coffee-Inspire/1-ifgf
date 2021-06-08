import React from 'react'
import Skeleton from 'react-loading-skeleton';

function SkeletonEvent() {
    return (
        <div className="mx-lg-5">
            <Skeleton duration={0.8} height={400}/>
        </div>
    )
}

export default SkeletonEvent
