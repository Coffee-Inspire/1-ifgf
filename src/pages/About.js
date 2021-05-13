import {Container} from 'react-bootstrap';
import Banner from '../components/molecules/Banner';
import aboutImage from '../assets/images/about.jpg';
import aboutContentImage1 from '../assets/images/about-content-1.jpg'
import aboutContentImage2 from '../assets/images/about-content-2.jpg'
import AboutContent1 from '../components/templates/AboutContent1';
import AboutContent2 from '../components/templates/AboutContent2';

function About() {

    return (
        <Container fluid className="p-0 m-0">
                
            <Banner bannerImage={aboutImage} />
            <h1 id="aboutHeadCaption">ABOUT US</h1>
            <AboutContent1 image={aboutContentImage1}/>
            <AboutContent2 image={aboutContentImage2}/>
                
        </Container>
    )
}

export default About
