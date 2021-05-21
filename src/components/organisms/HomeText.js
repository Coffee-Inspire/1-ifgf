// importing template for centering text component
import CenterTitle from '../molecules/CenterTitle';

// importing template for centering text component
import CenterText from '../molecules/CenterText';

function HomeText(props) {
    return (
        <div className="my-5 py-5"> 
            <CenterTitle word={props.title} />
            <CenterText word={props.word} />   
        </div>
    )
}

export default HomeText
