// importing react-bootstrap tag(s)
import {Row,Col} from 'react-bootstrap';

function CenterTitle(props) {
    return (
        <Row className="text-center d-flex justify-content-center py-5 my-3 px-3 px-lg-0">
            <Col lg={8}>
                <h1 className="text-uppercase">
                    {props.word}
                </h1>
            </Col>
        </Row>
    )
}

export default CenterTitle
