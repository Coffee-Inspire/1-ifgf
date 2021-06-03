// importing use state
import {useState,useEffect} from 'react';

// importing react redux library
import {useDispatch} from 'react-redux';
import {getEventAction} from '../redux/actions/event.actions';
import {getCategoryAction} from "../redux/actions/category.actions";

// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing template for centering text component
import CenterText from '../components/molecules/CenterText';

// importing event component
import Event from '../components/templates/Event';

// importing centered position button component
import CenterButton from '../components/molecules/CenterButton';

function IfgfYouth() {

    const dispatch = useDispatch();
    // Storing event data from dispatch into state
    const [FormEdit, setFormEdit] = useState([]);
    // Storing category data from dispatch into state
    const [FormEdit2, setFormEdit2] = useState({});

    // Function for filtering IFGF Youth Events
    let FormEditIFGFYouth = FormEdit.filter(function(i){return i.category==="ifgfyouth"});

    // inputing title for event heading
    let eventHeadingTitle = `youth event's`;
  
    // declaring state for hovering event
    const [eventText, setEventText] = useState(null);

    //  Function for selecting first event text
    if(FormEditIFGFYouth.length>0 && eventText == null){
        setEventText(FormEditIFGFYouth[0].text)
    };
    
    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getEventAction(setFormEdit))
        dispatch(getCategoryAction(setFormEdit2))
    }, [dispatch])

    return (
        <Container fluid>

            <Banner bannerImage={FormEdit2.imgIfgfyouth} title={"ifgf youth"} text={FormEdit2.textIfgfyouth} style2={true}/>
            <CenterText word={FormEdit2.descIfgfyouth}/>
            <Event title={eventHeadingTitle} data={FormEditIFGFYouth} setEventText={setEventText}/>
            {FormEditIFGFYouth.length>0 && <CenterText word={eventText} />}
            {FormEditIFGFYouth.length>0 && <CenterButton word={"join with us !"}/>}
            <CenterButton word={"contact us"}  buttonLink={"/contactus"}/>
            
        </Container>
    )
}

export default IfgfYouth
