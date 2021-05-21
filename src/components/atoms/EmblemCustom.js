// importing react-bootstrap tags
import {Image} from 'react-bootstrap';
import CenterTitle from '../molecules/CenterTitle';

function EmblemCustom(props) {
    return (
            <div className="myBannerEmblemFrame position-absolute">
                {props.headEmblem &&  <Image className="myBannerEmblem" src={props.headEmblem}/> }
                {props.headTitle && <CenterTitle word={props.headTitle} colorWhite={true}/>}
            </div>
    )
}

export default EmblemCustom
