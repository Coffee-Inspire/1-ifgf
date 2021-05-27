// importing react-bootstrap tags
import {Button} from 'react-bootstrap';

function ButtonNav(props) {
    return (
        <Button variant="none" className="myButtonNav rounded-0 text-white border-none">
            <h3 className="text-uppercase fw-bold">{props.word}</h3>    
        </Button>
    )
}

export default ButtonNav
