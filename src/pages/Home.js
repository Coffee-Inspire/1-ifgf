// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing image for main banner
import homeBanner from '../assets/images/banner1.jpg';
import locationBanner from '../assets/images/banner2.jpg';
import icareBanner from '../assets/images/icare.jpg';
import youthBanner from '../assets/images/youth.jpg';
import kidsBanner from '../assets/images/ifgf-kids.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing image for emblem
import emblem from '../assets/images/ifgfLogoPlain.png'

// importing home text and title component
import HomeText from '../components/organisms/HomeText';

function Home() {
    
    let title = `this is our church`;
    let word = ` God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission,
    to show love and Compassion because he is a GOD of Covenant,
    who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, 
    made into champions by the promises of His Word.`;
    let homeAddress = `Komp. Central Plaza, Jl. A. A Gede Ngurah, Abian Tubuh Baru, Kec. Cakranegara, Kota Mataram.`;
    let homeTime = 'SUNDAY 08.00 A.M';

    // mock data
    let DUMMY = null;

    return (
        <Container fluid>
            <Banner 
                bannerImage={homeBanner} 
                style4={true} 
                button1={"get connected"} 
                button2={"watch sermon"} 
                emblem={emblem} 
            />
            <HomeText 
                title={title} 
                word={word} 
            />
            <Banner 
                bannerImage={locationBanner} 
                style4={true} 
                button1={"contact info"} 
                button2={"get directions"}
                text1={"IFGF MATARAM"}
                text2={homeAddress}
                text3={homeTime} 
            />
            
        </Container>
    )
}

export default Home
