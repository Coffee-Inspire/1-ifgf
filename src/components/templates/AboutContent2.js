import {Container,Row,Col,Button} from 'react-bootstrap';

function AboutContent2(props) {
    return (
        <Container fluid className="p-5">

            <Container fluid className="my-5">
                <Row id="aboutContentRow">
                    <Col className="p-0" lg={7}>
                        <div className="aboutContentImageFrame">
                            <img
                                src={props.image}
                                id="aboutContentImage"
                            />
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-start px-5" lg={5}>
                         <h4 className="fw-bold my-5">OUR CHURCH</h4>
                        <h4 className="fw-normal"> 
                            God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission,
                            to show love and Compassion because he is a GOD of Covenant,
                            who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, 
                            made into champions by the promises of His Word.
                        </h4>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}

export default AboutContent2
