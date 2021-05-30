// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing images for banner
import imageBanner from '../assets/images/about-content-1.jpg';

function PrayerMeetings() {
    let bannerTitle = `prayer meetings`;
    let bannerText = `"ICare helps you to grow spiritually, and that requires more than meeting at Sunday services."`;
    return (
        <Container fluid>

            <Banner bannerImage={imageBanner} title={bannerTitle} text={bannerText} style3={true}/>
        
        </Container>
    )
}

export default PrayerMeetings
