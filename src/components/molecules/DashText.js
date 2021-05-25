import React from 'react'

function DashText(props) {
    return (
        <div className="pt-3">
            <h4 className={props.colorWhite ? "text-white" : "" }>
                {props.word}
            </h4>
        </div>
    )
}

export default DashText
