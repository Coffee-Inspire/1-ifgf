// importing react-bootstrap tag(s)
import {Row,Col} from 'react-bootstrap';

function CenterText(props) {
    return (
            <Row className="text-center d-flex justify-content-center py-5 my-3 px-3 px-lg-0">
                <Col lg={8}>
                    <h4 className={props.colorWhite ? "text-white" : ""}>
                        {props.word}
                    </h4>
                </Col>
            </Row>
    )
}

export default CenterText
