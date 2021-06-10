// importing library from react
import {useState,useEffect} from 'react';

// importing library from react redux
import {useDispatch,useSelector} from 'react-redux';
import {getCategoryAction} from '../redux/actions/category.actions';

// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing image for emblem
import emblem from '../assets/images/ifgfLogoPlain.png'

// importing home text and title component
import HomeText from '../components/organisms/HomeText';

// importing skeleton loading
import SkeletonBanner from '../components/atoms/SkeletonBanner';
import SkeletonHomeText from '../components/organisms/SkeletonHomeText';

function Home() {

    const dispatch = useDispatch();
    // Storing category data from dispatch into state
    const [FormEdit, setFormEdit] = useState([]);
    const status = useSelector(state => state.category)  

    // IFGF Mataram Google Map URL
    let googleMap = `https://www.google.com/maps/place/IFGF+Mataram/@-8.6005785,116.1328989,16z/data=!4m5!3m4!1s0x2dcdbf8809bf3047:0xf158a9c3175a59f8!8m2!3d-8.5997874!4d116.1284162`;
    
    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getCategoryAction(setFormEdit))
    }, [dispatch])

    return (
        <Container fluid>
            {/* Main Banner */}
            {status.isInit && <SkeletonBanner/> } 
            {!status.isInit && 
                <Banner 
                    bannerImage={FormEdit.imgHome} 
                    style4={true} 
                    button1={"about us"} 
                    buttonLink1={"/about"}
                    button1WidthExtend={true}
                    headEmblem={emblem} 
                /> 
            }
            {/* Home Text */}
            {status.isInit && <SkeletonHomeText/> } 
            {!status.isInit && 
                <HomeText 
                    title={FormEdit.textHome} 
                    word={FormEdit.descHome} 
                />
            } 
            {/* Location Banner */}
            {status.isInit && <SkeletonBanner/> } 
            {!status.isInit && 
                <Banner 
                    bannerImage={FormEdit.imgLocation} 
                    style4={true} 
                    headTitle={"location"}
                    button1={"contact info"}
                    buttonLink1={"/contactus"} 
                    button2={"get directions"}
                    buttonLink2={googleMap}
                    text1={"IFGF MATARAM"}
                    text2={FormEdit.textLocation}
                    text3={FormEdit.descLocation} 
                    tail={"a church for your family"}
                />
            } 
            {/* Icare Banner */}
            {status.isInit && <SkeletonBanner/> } 
            {!status.isInit && 
                <Banner
                    bannerImage={FormEdit.imgIcare}
                    style3={true}
                    title={"connect to icare"}
                    text={FormEdit.textIcare}
                    buttonPortal={"search icare"}
                    buttonLink={"/icare"}                
                />
            } 
            {/* IFGF Youth Banner */}
            {status.isInit && <SkeletonBanner/> } 
            {!status.isInit &&  
                <Banner
                    bannerImage={FormEdit.imgIfgfyouth}
                    style2={true}
                    title={"ifgf youth"}
                    text={FormEdit.textIfgfyouth}
                    buttonPortal={"get connected"}
                    buttonLink={"/ifgfyouth"}
                    
                />
            } 
            {/* IFGF Kids Banner */}
            {status.isInit && <SkeletonBanner/> } 
            {!status.isInit &&  
                <Banner
                    bannerImage={FormEdit.imgIfgfkids}
                    style2={true}
                    title={"ifgf kids"}
                    text={FormEdit.textIfgfkids}
                    buttonPortal={"get connected"}
                    buttonLink={"/ifgfkids"}  
                />
            } 
            
        </Container>
    )
}

export default Home
