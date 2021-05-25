import React from 'react'

function DashTitle(props) {
    return (
        <div className="pt-3">
            <h2 className={props.colorWhite ? "text-white" : "" }>
                {props.word}
            </h2>
        </div>
    )
}

export default DashTitle
