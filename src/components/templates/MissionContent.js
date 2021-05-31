// importing react-bootstrap tag(s)
import {Row,Col} from 'react-bootstrap';

function MissionContent(props) {
    return (
                <Row className="aboutContentRow m-lg-5 pb-5 pb-lg-5 mb-5">
                    <Col className="bg-white pb-3 separator " lg={12}>
                        <h3 className="fw-bold">MISSION</h3>
                    </Col>
                    <Col className="text-center py-5 my-5" lg={12}>
                        <h1 className="fw-bold text-uppercase">{props.title}</h1>
                    </Col> 
                    <Col className="px-5 pb-5" lg={12}>
                        <h4>{props.word}</h4>
                    </Col>
                   
                </Row>
    )
}

export default MissionContent
