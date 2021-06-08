// importing react-bootstrap tags
import {Row} from 'react-bootstrap';

// importing event heading title component
import EventHeadingTitle from '../molecules/EventHeadingTitle';

// importing event content component
import EventContent from '../molecules/EventContent';

function Event(props) {
    return (
        <>
            {props.data.length ?
                <Row className="myEventBanner d-flex justify-content-center mx-lg-5 pb-5">
                  <EventHeadingTitle title={props.title}/>
                  <EventContent data={props.data} setEventText={props.setEventText} icare={props.icare} setLeader={props.setLeader}/>
                </Row>
                : <Row className="myEventBanner text-center py-3 mx-lg-5 mb-5">
                    <h1 className="fw-light">No Event Available</h1>
                </Row> 
            }
        </>
    )
}

export default Event
