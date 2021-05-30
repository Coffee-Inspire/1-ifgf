// importing react-bootstrap tags
import {Button} from 'react-bootstrap';

import {Link} from 'react-router-dom'

function ButtonNav(props) {
    return (
        <Link to={props.buttonLink}>
            <Button variant="none" className={props.active ? "myButtonNavActive rounded-0 text-white border-none w-100" : "myButtonNav rounded-0 text-white border-none w-100"  } >
                <h3 className="myButtonNavWord text-uppercase fw-bold">{props.word}</h3>    
            </Button>
        </Link>
    )
}

export default ButtonNav
