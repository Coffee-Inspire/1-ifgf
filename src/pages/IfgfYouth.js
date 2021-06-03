// importing use state
import {useState,useEffect} from 'react';

// importing react redux library
import {useDispatch} from 'react-redux';
import {getEventAction} from '../redux/actions/event.actions';

// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing images for banner
import ifgfKidsImage from '../assets/images/youth.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing template for centering text component
import CenterText from '../components/molecules/CenterText';

// importing event component
import Event from '../components/templates/Event';

// importing image for event content
import eventImage from  '../assets/images/event.jpg';

// importing centered position button component
import CenterButton from '../components/molecules/CenterButton';

function IfgfYouth() {

    const dispatch = useDispatch();
    // Store data from dispatch into state
    const [FormEdit, setFormEdit] = useState([]);

    // Function for filtering IFGF Youth Events
    let FormEditIFGFYouth = FormEdit.filter(function(i){return i.category==="ifgfyouth"});

    // inputing text
    let wordCenter = ` God shaped us as an apostolic denomination with specific DNA to fulfill the Great Commission,
    to show love and Compassion because he is a GOD of Covenant,
    who declare our purpose in creation. We are called to be a cutting edge church that follows God’s progressive vision, 
    made into champions by the promises of His Word.`;

    // inputing title for banner caption
    let bannerTitle = 'ifgf youth';

    // inputing text for banner caption
    let bannerText = 'ICare helps you to grow spiritually, and that requires more than meeting at Sunday services.';

    // inputing title for event heading
    let eventHeadingTitle = `youth event's`;

    // mock data for event
    let DUMMY = [
        {
            eventName : "EVENT A",
            eventImage : eventImage,
            eventText : "You are hovering on Event A"
        },
        {
            eventName : "EVENT B",
            eventImage : eventImage,
            eventText : "You are hovering on Event B"
        },
        {
            eventName : "EVENT C",
            eventImage : eventImage,
            eventText : "You are hovering on Event C"
        }
    ];

    
    // declaring state for hovering event
    const [eventText, setEventText] = useState(null);

    //  Function for selecting first event text
    if(FormEditIFGFYouth.length>0 && eventText == null){
        setEventText(FormEditIFGFYouth[0].text)
    };
    
    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getEventAction(setFormEdit))
    }, [dispatch])

    return (
        <Container fluid>

            <Banner bannerImage={ifgfKidsImage} title={bannerTitle} text={bannerText} style2={true}/>
            <CenterText word={wordCenter}/>
            <Event title={eventHeadingTitle} data={FormEditIFGFYouth} setEventText={setEventText}/>
            {FormEditIFGFYouth.length>0 && <CenterText word={eventText} />}
            {FormEditIFGFYouth.length>0 && <CenterButton word={"join with us !"}/>}
            <CenterButton word={"contact us"}  buttonLink={"/contactus"}/>
            
        </Container>
    )
}

export default IfgfYouth
