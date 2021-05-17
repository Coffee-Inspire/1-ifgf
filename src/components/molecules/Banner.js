import {Row,Image} from 'react-bootstrap';

function Banner(props) {
    return (
        <>
            <Row className="position-relative bg-warning"> 
                <div id="imageBannerFrame" className="position-relative d-flex justify-content-center align-items-center p-0">       
                    <Image
                        alt=""
                        src={props.bannerImage}
                        id="imageBanner"
                    />
                    {props.style2 ? 
                        null
                        : <p className="position-absolute text-white display-2 fw-bold">{props.title}</p>       
                    }

                    {props.style2 ?
                        <div className="centerOverlay position-absolute top-75 w-100 text-center px-5" >
                            <Row className="py-5">
                                <h1 className="text-white text-uppercase display-1 fw-bold">{props.title}</h1>
                            </Row>
                            <Row className="mb-5">
                                <p className="text-white fs-4">"{props.text}"</p>
                            </Row>
                        </div>
                        : null
                    }
                </div>
            </Row>
        </>
    )
}

export default Banner
