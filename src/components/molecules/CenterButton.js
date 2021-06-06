// importing react-bootstrap tags
import {Row,Col} from 'react-bootstrap';

// importing button custom component
import ButtonCustom from '../atoms/ButtonCustom';

function CenterButton(props) {
    return (
        // <a href={props.buttonLink}>
        <Row className="d-flex justify-content-center mt-4">
            <Col xs={11} md={12} lg={2}>
                <ButtonCustom word={props.word} buttonLink={props.buttonLink}/>
            </Col>
        </Row>
        // </a>
    )
}

export default CenterButton
