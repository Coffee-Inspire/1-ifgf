// importing use state
import {useState,useEffect} from 'react';

// importing react redux library
import {useDispatch,useSelector} from 'react-redux';
import {getIcareAction} from "../redux/actions/icare.actions";
import {getCategoryAction} from "../redux/actions/category.actions";

// importing react-bootstrap tags
import {Container} from 'react-bootstrap';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing template for centering text component
import CenterText from '../components/molecules/CenterText';

// importing event component
import Event from '../components/templates/Event';

// importing icare leader profile component
import IcareLeaderProfile from '../components/templates/IcareLeaderProfile';

// importing skeleton loading
import SkeletonEvent from '../components/atoms/SkeletonEvent';
import SkeletonDesc from '../components/atoms/SkeletonDesc';
import SkeletonCenterButton from '../components/atoms/SkeletonCenterButton';
import SkeletonBanner from '../components/atoms/SkeletonBanner';
import SkeletonLeaderProfile from '../components/organisms/SkeletonLeaderProfile';

function Icare(props) {

    const dispatch = useDispatch();
    // Storing leader data from dispatch into state
    const [FormEdit, setFormEdit] = useState([]);
    // Storing category data from dispatch into state
    const [FormEdit2, setFormEdit2] = useState({});
    const statusLeader = useSelector(state => state.icare)
    const statusCategory = useSelector(state => state.category)

    // declaring state for hovering event
    const [leader, setLeader] = useState(null);

    // Function for selecting first leader
    if(FormEdit.length>0 && leader == null){
        setLeader(FormEdit[0])
    }

    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getIcareAction(setFormEdit))
        dispatch(getCategoryAction(setFormEdit2))
    }, [dispatch])

    return (
        <Container fluid>

            {statusCategory.isInit &&  <SkeletonBanner/>}
            {!statusCategory.isInit &&  <Banner bannerImage={FormEdit2.imgIcare} title={"icare"} text={FormEdit2.textIcare} style3={true}/>}
            {statusCategory.isInit && <SkeletonDesc/>}
            {!statusCategory.isInit && <CenterText word={FormEdit2.descIcare}/>}
            {statusLeader.isInit && <SkeletonEvent/>}  
            {!statusLeader.isInit && <Event data={FormEdit} icare={true} setLeader={setLeader}/>}
            {statusLeader.isInit && <SkeletonLeaderProfile/>}  
            {!statusLeader.isInit && leader && <IcareLeaderProfile data={leader}/>}  
            
        </Container>
    )
}

export default Icare
