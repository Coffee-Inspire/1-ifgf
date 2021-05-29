// importing react-bootstrap tag
import {Container} from 'react-bootstrap';

// importing images for banner
import aboutImage from '../assets/images/about.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';
import MissionContent from '../components/templates/MissionContent';

// importing Vision and Mission content
import VisionContent from '../components/templates/VisionContent';

function VisionMission() {

    // inputing text for about us content(s)
    let word =  `God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission,
                 to show love and Compassion because he is a GOD of Covenant,
                 who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, 
                 made into champions by the promises of His Word.
                `;
    // mock data
    let DUMMY = {
        visionTitle : "vision title here",
        visionText : word,
        missionTitle : "mission title here",
        missionText : word
    };


    return (
        <Container fluid>
                
            <Banner bannerImage={aboutImage} style1={true} title={"vision & mission"} active={"visionMission"}/>
            <VisionContent title={DUMMY.visionTitle} word={DUMMY.visionText}/>
            <MissionContent title={DUMMY.missionTitle} word={DUMMY.missionText}/>

        </Container>
    )
}

export default VisionMission;
