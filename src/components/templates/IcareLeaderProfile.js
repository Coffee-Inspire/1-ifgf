// importing react-bootstrap tags
import {Row,Col,Image} from 'react-bootstrap';

// importing customed button component
import ButtonCustom from '../atoms/ButtonCustom';

// importing centered text component
import CenterText from '../molecules/CenterText';

// importing image not found picture for handling event
import imgNotFoundPotrait from '../../assets/images/imgNotFoundPotrait.jpg'

function IcareLeaderProfile(props) {
    // API link for whatsapp site
   let whatsappAPI = `https://api.whatsapp.com/send?phone=${props.data.number}`;
    return (
        <>
            <CenterText word={props.data.text}/>
                <Row >
                    <Col className="text-center text-lg-end px-lg-5" xs={12} lg={6}>
                        <div className="myIcareLeaderImageFrame" >
                            <Image
                                alt=""
                                src={props.data.image}
                                className="myIcareLeaderImage" 
                                onError={(e)=>{ e.target.src=imgNotFoundPotrait}}
                            />
                        </div>
                    </Col>
                    <Col className="text-center text-lg-start d-flex flex-column justify-content-lg-end mt-4" lg={4}>
                        <Col className="border-bottom border-dark mb-5 align-self-center" xs={11} lg={12}>
                            <h2 className="">Leader</h2>
                            <h2 className="fw-light">{props.data.name}</h2>
                        </Col>
                        <Col className="border-bottom border-dark mb-5 align-self-center" xs={11} lg={12}>
                            <h2 className="">Mobile Phone</h2>
                            <h2 className="fw-light">+{props.data.number}</h2>
                        </Col>
                        <Col className="align-self-center align-self-lg-start" xs={11} lg={6}>
                            <ButtonCustom word={"join with us !"} buttonLink={whatsappAPI} newPage={true}/>
                        </Col>
                    </Col>
                </Row>
        </>
            )
}

export default IcareLeaderProfile
