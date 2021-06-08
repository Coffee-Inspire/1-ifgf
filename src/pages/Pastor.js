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

// importing pastor content
import PastorContent from '../components/templates/PastorContent';

function Pastor() {

    const dispatch = useDispatch();
    // Storing content data from dispatch into state
    const [FormEdit, setFormEdit] = useState({});

    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getProfileWebAction(setFormEdit))
    }, [dispatch])

    return (
        <Container fluid>
                
            <Banner bannerImage={aboutImage} style1={true} title={"our pastor"} active={"pastor"} />
            <PastorContent image={FormEdit.pastorImage} title={FormEdit.pastorName} word={FormEdit.pastorText} />

        </Container>
    )
}

export default Pastor
