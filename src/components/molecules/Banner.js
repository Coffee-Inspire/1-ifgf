import {Container} from 'react-bootstrap';

function Banner(props) {
    return (
        <Container fluid className="p-0">
            
           <div id="imageBannerFrame">

                    <img
                        alt=""
                        src={props.bannerImage}
                        id="imageBanner"
                    />
                    
           </div>
                  
            
        </Container>
    )
}

export default Banner
