// importing react-bootstrap tag
import {Row,Col,Image} from 'react-bootstrap';

function PastorContent(props) {
    return (
        <Row className="aboutContentRow m-lg-5">
           <Col className="px-0" lg={6}>
                <Image
                    alt=""
                    src={props.image}
                    className="myPastorImage"
                />
           </Col> 
           <Col className="text-center text-lg-start px-5 py-5" lg={6}>
                <h1 className="text-uppercase fw-bold pb-5">{props.title}</h1>
                <h5 className=" pe-lg-5">{props.word}</h5>
           </Col> 
        </Row>
    )
}

export default PastorContent
