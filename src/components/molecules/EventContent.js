// importing react-bootstrap tags
import {Col,Image} from 'react-bootstrap';

// importing slider tag
import Slider from 'react-slick';

// importing image for event content
import eventImage from  '../../assets/images/event.jpg';

// importing image not found picture for handling event
import imgNotFound from '../../assets/images/imgNotFound.jpg';

function EventContent(props) {
    // slider display configuration

    const settings = {
        arrows : false,
        dots : true,
        infinite : false,
        speed : 500,
        slidesToShow: props.data.length,
        slidesToScroll: props.data.length,
        initialSlide: 0,    
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: props.data.length,
            slidesToScroll: props.data.length,
            dots : true,
            infinite : true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            // creating responsive function for rendering event text based on current event focus
            afterChange: function(index) {
              if(props.icare){
                props.setLeader(props.data[index])
              } else {
                props.setEventText(props.data[index].text )
              }
            },
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // creating responsive function for rendering event text based on current event focus 
            afterChange: function(index) {
              if(props.icare){
                props.setLeader(props.data[index])
              } else {
                props.setEventText(props.data[index].text )
              }
            },
          }
        }
      ]
    };

    return (
        <Col lg={12} className="px-0 px-lg-1">
            <Slider {...settings} >
                {props.data.map((items,index)=>(
                    <div key={index} className="d-flex flex-column align-items-center">
                        <div className="eventContentImageFrame" onMouseOver={()=>props.icare ? props.setLeader(items) : props.setEventText(items.text)} >
                           <Image
                                alt=""
                                src={eventImage ? eventImage : imgNotFound}
                                className="eventContentImage"
                            />
                        </div>
                        <h4 className="text-white position-absolute bottom-50 text-uppercase">
                          {props.icare && items.category==="icareyouth" && "icare for youth"}
                          {props.icare && items.category==="icaremen" && "icare for men" }
                          {props.icare && items.category==="icarewoman" && "icare for woman"}
                          {!props.icare && items.title}
                        </h4>
                   </div>
                )) }
            </Slider>
        </Col>
    )
}

export default EventContent
