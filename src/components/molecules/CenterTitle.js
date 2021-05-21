// importing react-bootstrap tag(s)
import {Row,Col} from 'react-bootstrap';

function CenterTitle(props) {
    return (
        <div className={props.colorWhite 
            ? "text-white text-center"
            : "text-center d-flex justify-content-center py-5 my-3 px-3 px-lg-0"
            }
        >
            <h1 className="text-uppercase">
                {props.word}
            </h1>
        </div>
    )
}

export default CenterTitle
