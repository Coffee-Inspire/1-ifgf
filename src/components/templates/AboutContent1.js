// importing react-bootstrap tag(s)
import {Row,Col,Button} from 'react-bootstrap';

function AboutContent1(props) {
    return (
                <Row id="aboutContentRow" className="mb-3 m-lg-5">
                    <Col className="d-flex flex-column justify-content-start" xs={12} lg={5}>
                        <div className="px-3 px-lg-5 text-center text-lg-start">
                            <h4 className="fw-bold my-5 text-center text-lg-start">PRAYER MEETINGS</h4>
                            <h4 className="fw-normal"> 
                                {props.word}
                            </h4>
                            <Button className="w-75 my-5 " id="aboutContentButton" variant="none">
                                <h4>PRAYER MEETINGS</h4>
                            </Button>
                        </div>
                    </Col>
                    <Col className="p-0" lg={7}>
                        <div className="aboutContentImageFrame">
                            <img
                                alt=""
                                src={props.image}
                                id="aboutContentImage"
                            />
                        </div>
                    </Col>
                </Row>
    )
}

export default AboutContent1
