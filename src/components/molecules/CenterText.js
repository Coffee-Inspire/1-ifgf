// importing react-bootstrap tagw
import {Col} from 'react-bootstrap';

function CenterText(props) {
    return (
            <div className={props.decreaseSpace 
                ? "text-center d-flex justify-content-center py-1 px-3 py-lg-3" 
                : "text-center d-flex justify-content-center py-5 my-3 px-3 px-lg-0"
                } 
            >
                <Col lg={8}>
                    <h4 className={props.colorWhite && "text-white"}>
                        {props.word}
                    </h4>
                </Col>
            </div>
    )
}

export default CenterText
