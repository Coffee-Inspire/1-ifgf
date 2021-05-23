function CenterTitle(props) {
    return (
        <div className={props.colorWhite 
            ? props.tail ? "text-white text-center" : "text-white text-center"
            : "text-center d-flex justify-content-center py-5 my-3 px-3 px-lg-0"
            }
        >
            <h1 className={props.colorWhite 
                    ? props.tail ? "text-uppercase fw-bold" : "text-uppercase display-3 fw-bold" 
                    : "text-uppercase"
                }
            >
                {props.word}
            </h1>
        </div>
    )
}

export default CenterTitle
