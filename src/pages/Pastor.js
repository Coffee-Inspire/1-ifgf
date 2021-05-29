// importing react-bootstrap tag
import {Container} from 'react-bootstrap';

// importing images for banner
import aboutImage from '../assets/images/about.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing images for pastor content
import pastorImage from '../assets/images/pastor.jpg'

// importing pastor content
import PastorContent from '../components/templates/PastorContent';

function Pastor() {

    // inputing text for about us content(s)
    let word =  `God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission,
                 to show love and Compassion because he is a GOD of Covenant,
                 who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, 
                 made into champions by the promises of His Word.
                `;
    // mock data
    let DUMMY = {
        pastorImage:pastorImage,
        title:"our pastor",
        word:word,

    };

    return (
        <Container fluid>
                
            <Banner bannerImage={aboutImage} style1={true} title={"our pastor"} active={"pastor"} />
            <PastorContent image={DUMMY.pastorImage} title={DUMMY.title} word={DUMMY.word} />

        </Container>
    )
}

export default Pastor
