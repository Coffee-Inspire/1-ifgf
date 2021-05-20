// importing use state
import {useState} from 'react';

// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing images for banner
import icareImage from '../assets/images/icare.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing template for centering text component
import CenterText from '../components/molecules/CenterText';

// importing event component
import Event from '../components/templates/Event';

// importing icare leader profile component
import IcareLeaderProfile from '../components/templates/IcareLeaderProfile';

// importing leader image
import youthLeader from '../assets/images/youthLeader.jpg';
import manLeader from '../assets/images/manLeader.jpg';
import womanLeader from '../assets/images/womanLeader.jpg';


function Icare() {
    // inputing text
    let wordCenter = ` God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission,
    to show love and Compassion because he is a GOD of Covenant,
    who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, 
    made into champions by the promises of His Word.`;

    // inputing title for banner caption
    let bannerTitle = 'Icare';

    // inputing text for banner caption
    let bannerText = 'ICare helps you to grow spiritually, and that requires more than meeting at Sunday services.';

    let DUMMY_LEADER = [
        {
            leaderImage : youthLeader,
            leaderTitle : "ICARE FOR YOUTH",
            leaderName : "Peter Jimie",
            leaderContact : "092739161823",
            leaderText : "Hello, i'm a leader of Icare For Youth", 
        },
        {
            leaderImage : manLeader,
            leaderTitle : "ICARE FOR MEN",
            leaderName : "Ethan White",
            leaderContact : "061255678590",
            leaderText : "Hello, i'm a leader of Icare For Men", 
        },
        {
            leaderImage : womanLeader,
            leaderTitle : "ICARE FOR WOMAN",
            leaderName : "Jessica Waber",
            leaderContact : "031756481875",
            leaderText : "Hello, i'm a leader of Icare For Woman", 
        },
    ];
    
    // declaring state for hovering event
    const [leader, setLeader] = useState(DUMMY_LEADER[0]);
    return (
        <Container fluid>

            <Banner bannerImage={icareImage} title={bannerTitle} text={bannerText} style3={true}/>
            <CenterText word={wordCenter}/>
            <Event data={DUMMY_LEADER} icare={true} setLeader={setLeader}/>
            {leader ?
                <IcareLeaderProfile data={leader}/>
                : null
            }
            
            
        </Container>
    )
}

export default Icare
