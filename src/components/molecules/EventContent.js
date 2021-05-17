// importing react-bootstrap tags
import {Col,Image} from 'react-bootstrap';

// importing slider tag
import Slider from 'react-slick'

function EventContent(props) {
    // slider display configuration
    const settings = {
        arrows : false,
        dots : true,
        infinite : false,
        speed : 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,    
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
              props.setEventText(props.data[index].eventText)
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
              props.setEventText(props.data[index].eventText)
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
                        <div className="eventContentImageFrame" onMouseOver={()=>props.setEventText(items.eventText)} >
                            <Image
                                alt=""
                                src={items.eventImage}
                                className="eventContentImage"
                            />
                        </div>
                        <h4 className="text-white position-absolute bottom-50">{items.eventName}</h4>
                   </div>
                ))}
            </Slider>
        </Col>
    )
}

export default EventContent
