import {Row,Image} from 'react-bootstrap';

function Banner(props) {
    return (
        <>
            <Row> 
                <div id="imageBannerFrame" className="position-relative d-flex justify-content-center align-items-center p-0">       
                    <Image
                        alt=""
                        src={props.bannerImage}
                        id="imageBanner"
                    />
                    <p id="aboutHeadCaption" className="position-absolute text-white display-2 fw-bold">{props.title}</p>
                            
                </div>
            </Row>
        </>
    )
}

export default Banner
