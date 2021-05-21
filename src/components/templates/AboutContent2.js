// importing react-bootstrap tag(s)
import {Row,Col} from 'react-bootstrap';

function AboutContent2(props) {
    return (
                <Row id="aboutContentRow" className="m-lg-5 pb-5 pb-lg-0"> 
                    <Col className="p-0" lg={7}>
                        <div className="aboutContentImageFrame">
                            <img
                                alt=""
                                src={props.image}
                                id="aboutContentImage"
                            />
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-start" xs={12} lg={5}>
                        <div className="px-3 px-lg-5 text-center text-lg-start">
                            <h4 className="fw-bold my-5">OUR CHURCH</h4>
                            <h4 className="fw-normal"> 
                                {props.word}
                            </h4>
                        </div>
                    </Col>
                </Row>
    )
}

export default AboutContent2
