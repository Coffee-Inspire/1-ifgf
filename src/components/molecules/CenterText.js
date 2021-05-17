// importing react-bootstrap tag(s)
import {Row,Col} from 'react-bootstrap';

function CenterText(props) {
    return (
            <Row className="text-center d-flex justify-content-center py-5 my-3">
                <Col lg={8}>
                    <h4>
                        {props.word}
                    </h4>
                </Col>
            </Row>
    )
}

export default CenterText
