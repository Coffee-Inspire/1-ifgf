// importing react-bootstrap tags
import {Row,Col} from 'react-bootstrap';

// importing button custom component
import ButtonCustom from '../atoms/ButtonCustom';

function CenterButton(props) {
    return (
        <Row className="d-flex justify-content-center mt-4">
            <Col xs={11} md={12} lg={2}>
                <ButtonCustom word={props.word}/>
            </Col>
        </Row>
    )
}

export default CenterButton
