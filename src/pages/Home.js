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

function Home() {

    const dispatch = useDispatch();
    // Storing category data from dispatch into state
    const [FormEdit, setFormEdit] = useState([]);
    const status = useSelector(state => state.category)

    // IFGF Mataram Google Map URL
    let googleMap = `https://www.google.com/maps/place/IFGF+MATARAM/@-8.6013855,116.1439476,17z/data=!3m1!4b1!4m5!3m4!1s0x2dcdb8b7a3d866d7:0xa6585d8d50d86791!8m2!3d-8.6013908!4d116.1461363`;
    
    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getCategoryAction(setFormEdit))
    }, [dispatch])

    return (
        <Container fluid>
            {/* Main Banner */}
            { !status.isInit && 
            <>
                <Banner 
                    bannerImage={FormEdit.imgHome} 
                    style4={true} 
                    button1={"about us"} 
                    buttonLink1={"/about"}
                    button1WidthExtend={true}
                    button2={"watch sermon"} 
                    headEmblem={emblem} 
                /> 
                <HomeText 
                    title={FormEdit.textHome} 
                    word={FormEdit.descHome} 
                />
                {/* Location Banner */}
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
                {/* Icare Banner */}
                <Banner
                    bannerImage={FormEdit.imgIcare}
                    style3={true}
                    title={"connect to icare"}
                    text={FormEdit.textIcare}
                    buttonPortal={"search icare"}
                    buttonLink={"/icare"}                
                />
                {/* IFGF Youth Banner */}
                <Banner
                    bannerImage={FormEdit.imgIfgfyouth}
                    style2={true}
                    title={"ifgf youth"}
                    text={FormEdit.textIfgfyouth}
                    buttonPortal={"get connected"}
                    buttonLink={"/ifgfyouth"}
                    
                />
                {/* IFGF Kids Banner */}
                <Banner
                    bannerImage={FormEdit.imgIfgfkids}
                    style2={true}
                    title={"ifgf kids"}
                    text={FormEdit.textIfgfkids}
                    buttonPortal={"get connected"}
                    buttonLink={"/ifgfkids"}
                    
                />
            </>
            } 
        </Container>
    )
}

export default Home
