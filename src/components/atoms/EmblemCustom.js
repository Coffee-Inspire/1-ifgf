// importing react-bootstrap tags
import {Image} from 'react-bootstrap';

function EmblemCustom(props) {
    return (
            <div className="myBannerEmblemFrame position-absolute">
                <Image className="myBannerEmblem" src={props.emblem}/>
            </div>
    )
}

export default EmblemCustom
