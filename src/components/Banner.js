// import '../App.css';
import test from '../assets/images/banner1.jpg';
import {Container,Row,Col } from 'react-bootstrap';

function Banner() {
    return (
        <Container fluid className="p-0">
            
           <div className="p-0 m-0" id="imageBannerFrame">
               
                    <img
                        alt=""
                        src={test}
                        id="imageBanner"
                    />
                    
               
           </div>
                  
            
        </Container>
    )
}

export default Banner
