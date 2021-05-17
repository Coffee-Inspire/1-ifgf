// importing react-bootstrap tags
import {Row} from 'react-bootstrap';

// importing event heading title component
import EventHeadingTitle from '../molecules/EventHeadingTitle';

// importing event content component
import EventContent from '../molecules/EventContent';


function Event(props) {
    return (
        <Row id="eventBanner" className="d-flex justify-content-center mx-lg-5 pb-5">
            <EventHeadingTitle title={props.title}/>
            <EventContent data={props.data} setEventText={props.setEventText}/>
            
        </Row>
    )
}

export default Event
