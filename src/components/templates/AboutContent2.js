// importing react-bootstrap tag(s)
import {Row,Col} from 'react-bootstrap';

function AboutContent2(props) {
    return (
                <Row className="aboutContentRow m-lg-5 pb-5 pb-lg-0 mb-5"> 
                    <Col className="bg-white pb-3 separator " lg={12}>
                        <h3>{props.yearStart} - {props.yearEnd}</h3>
                    </Col>
                    <Col className="p-0" xs={12} lg={7}>
                        <div>
                            <img
                                alt=""
                                src={props.image}
                                id="aboutContentImage"
                            />
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-start" >
                        <div className="px-3 px-lg-5 text-center text-lg-start">
                            <h4 className="fw-bold text-uppercase my-5">{props.title}</h4>
                            <h4 className="fw-normal">{props.word}</h4>
                        </div>
                    </Col>
                </Row>
    )
}

export default AboutContent2
