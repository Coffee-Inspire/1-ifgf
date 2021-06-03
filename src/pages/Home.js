// importing library from react
import {useState,useEffect} from 'react';

// importing library from react redux
import {useDispatch} from 'react-redux';
import {getEventAction} from '../redux/actions/event.actions';

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
                 made into champions by the promises of His Word.
                 `;
    let homeAddress = `Komp. Central Plaza, Jl. A. A Gede Ngurah, Abian Tubuh Baru, Kec. Cakranegara, Kota Mataram.`;
    let homeTime = 'SUNDAY 08.00 A.M';
    let icareBannerTitle = `connect to icare`;
    let youthBannerTitle = `ifgf youth`;
    let kidsBannerTitle = `ifgf kids`;
    let icareText = '"ICare helps you to grow spiritually, and that requires more than meeting at Sunday services."';
    let youthText = `"IFGF Youth helps you to grow spiritually, and that requires more than meeting at Sunday services."`;
    let kidsText = `"IKids helps you to grow spiritually, and that requires more than meeting at Sunday services."`;
    let googleMap = `https://www.google.com/maps/place/IFGF+MATARAM/@-8.6013855,116.1439476,17z/data=!3m1!4b1!4m5!3m4!1s0x2dcdb8b7a3d866d7:0xa6585d8d50d86791!8m2!3d-8.6013908!4d116.1461363`;
    

    return (
        <Container fluid>
            {/* Main Banner */}
            <Banner 
                bannerImage={homeBanner} 
                style4={true} 
                button1={"get connected"} 
                button2={"watch sermon"} 
                headEmblem={emblem} 
            />
            <HomeText 
                title={title} 
                word={word} 
            />
            {/* Location Banner */}
            <Banner 
                bannerImage={locationBanner} 
                style4={true} 
                headTitle={"location"}
                button1={"contact info"}
                buttonLink1={"/contactus"} 
                button2={"get directions"}
                buttonLink2={googleMap}
                text1={"IFGF MATARAM"}
                text2={homeAddress}
                text3={homeTime} 
                tail={"a church for your family"}
            />
            {/* Icare Banner */}
            <Banner
                bannerImage={icareBanner}
                style3={true}
                title={icareBannerTitle}
                text={icareText}
                buttonPortal={"search icare"}
                buttonLink={"/icare"}
                
            />
            {/* IFGF Youth Banner */}
             <Banner
                bannerImage={youthBanner}
                style2={true}
                title={youthBannerTitle}
                text={youthText}
                buttonPortal={"get connected"}
                buttonLink={"/ifgfyouth"}
                
            />
             {/* IFGF Kids Banner */}
             <Banner
                bannerImage={kidsBanner}
                style2={true}
                title={kidsBannerTitle}
                text={kidsText}
                buttonPortal={"get connected"}
                buttonLink={"/ifgfkids"}
                
            />
            
        </Container>
    )
}

export default Home
