// importing use state
import {useState,useEffect} from 'react';

// importing react-bootstrap tag
import {Container} from 'react-bootstrap';

// importing react redux library
import {useDispatch,useSelector} from 'react-redux';
import {getAboutAction} from "../redux/actions/about.actions";

// importing images for banner
import aboutImage from '../assets/images/about.jpg';

// importing banner component
import Banner from '../components/molecules/Banner';

// importing about us content(s)
import AboutContent2 from '../components/templates/AboutContent2';

// importing skeleton loading
import SkeletonAbout from '../components/organisms/SkeletonAbout';

function About() {

    const dispatch = useDispatch();
    // Storing content data from dispatch into state
    const [FormEdit, setFormEdit] = useState([]);
    const status = useSelector(state => state.about)

    // Dispatch to redux for data request
    useEffect(() => {
        dispatch(getAboutAction(setFormEdit))
    }, [dispatch])

    return (
        <Container fluid>
            
            <Banner bannerImage={aboutImage} style1={true} title={"about us"} active={"about"}  />
            {status.isInit &&  <SkeletonAbout/>}
            {!status.isInit &&  
                FormEdit && 
                    FormEdit.map((items,index)=>(
                    <AboutContent2
                        key={index}
                        image={items.image} 
                        title={items.title} 
                        word={items.text}
                        yearStart={items.yearStart} 
                        yearEnd={items.yearEnd}
                    />
                    ))
                
            }

        </Container>
    )
}

export default About
