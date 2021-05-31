// importing react-bootstrap tags
import {Button} from 'react-bootstrap';

function ButtonCustom(props) {
    return (
        <a href={props.buttonLink}>  
            <Button  variant="none" className={props.outlineWhite ? "border border-white text-white rounded-0 pt-3 pb-2 px-5 " : "border border-dark rounded-0 pt-3 w-100" }>
                <h4 className="text-uppercase">{props.word}</h4>  
            </Button>
        </a>
    )
}

export default ButtonCustom
