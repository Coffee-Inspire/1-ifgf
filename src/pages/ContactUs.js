// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing images for banner
import imageBanner from '../assets/images/about-content-2.jpg';

// importing form from component
import FormContact from '../components/organisms/FormContact';

function ContactUs() {
    let bannerTitle = `contact us`;
    let bannerText = `Contact us to help you to grow spiritually, and that requires more than meeting at Sunday services.`;
    return (
        <Container fluid>

            <Banner bannerImage={imageBanner} title={bannerTitle} text={bannerText} style3={true}/>
            <FormContact/>
        
        </Container>
    )
}

export default ContactUs
