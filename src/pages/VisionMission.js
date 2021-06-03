// importing use state
import {useState,useEffect} from 'react';

// importing react-bootstrap tag
import {Container} from 'react-bootstrap';

// importing react redux library
import {useDispatch} from 'react-redux';
import {getProfileWebAction} from "../redux/actions/profileWeb.actions";


// importing images for banner
import aboutImage from '../assets/images/about.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';
import MissionContent from '../components/templates/MissionContent';

// importing Vision and Mission content
import VisionContent from '../components/templates/VisionContent';

function VisionMission() {

    const dispatch = useDispatch();
    // Storing content data from dispatch into state
    const [FormEdit, setFormEdit] = useState({});

    // Dispatch to redux for data request
     useEffect(() => {
        dispatch(getProfileWebAction(setFormEdit))
    }, [dispatch])


    return (
        <Container fluid>
                
            <Banner bannerImage={aboutImage} style1={true} title={"vision & mission"} active={"visionMission"}/>
            <VisionContent title={FormEdit.visionTitle} word={FormEdit.visionText}/>
            <MissionContent title={FormEdit.missionTitle} word={FormEdit.missionText}/>

        </Container>
    )
}

export default VisionMission;
