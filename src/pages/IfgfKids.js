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

function IfgfKids() {

    const dispatch = useDispatch();
    // Storing event data from dispatch into state
    const [FormEdit, setFormEdit] = useState([]);
    // Storing category data from dispatch into state
    const [FormEdit2, setFormEdit2] = useState({});

    // Function for filtering IFGF Kids Events
    let FormEditIFGFKids = FormEdit.filter(function(i){return i.category==="ifgfkids"});

    // inputing title for event heading
    let eventHeadingTitle = `kids event's`;

    // declaring state for hovering event
    const [eventText, setEventText] = useState(null);

    //  Function for selecting first event text
    if(FormEditIFGFKids.length>0 && eventText == null){
        setEventText(FormEditIFGFKids[0].text)
    }

    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getEventAction(setFormEdit))
        dispatch(getCategoryAction(setFormEdit2))
    }, [dispatch])

    return (
        <Container fluid>

            <Banner bannerImage={FormEdit2.imgIfgfkids} title={"ifgf kids"} text={FormEdit2.textIfgfkids} style2={true}/>
            <CenterText word={FormEdit2.descIfgfkids}/>
            <Event title={eventHeadingTitle} data={FormEditIFGFKids} setEventText={setEventText}/>
            {FormEditIFGFKids.length>0 && <CenterText word={eventText} />}
            {FormEditIFGFKids.length>0 && <CenterButton word={"join with us !"}/>}
            <CenterButton word={"contact us"} buttonLink={"/contactus"}/>

        </Container>
    )
}

export default IfgfKids
