// importing react-bootstrap tags
import {Button} from 'react-bootstrap';

function ButtonCustom(props) {
    return (
        <div>
            <Button variant="none" className="border border-dark rounded-0 pt-3 w-100">
                <h4 className="text-uppercase  myButton">{props.word}</h4>    
            </Button>
        </div>
    )
}

export default ButtonCustom
