import { ButtonList, Button } from './Style/Style.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <ButtonList>
                <li><Button onClick={onLeaveFeedback.good}>Good</Button></li>
                <li><Button  onClick={onLeaveFeedback.neutral}>Neutral</Button></li>
                <li><Button  onClick={onLeaveFeedback.bad}>Bad</Button></li>
            </ButtonList>
) 
}
FeedbackOptions.propTypes = {
 onLeaveFeedback:PropTypes.object.isRequired,   
}
export default FeedbackOptions;
