// importing react-bootstrap tags
import {Col} from 'react-bootstrap';

function EventHeadingTitle(props) {
    return (
        <Col  className="text-center py-4" lg={12}>
            <h4 className="text-uppercase fw-bold">{props.title}</h4>
        </Col>
    )
}

export default EventHeadingTitle
