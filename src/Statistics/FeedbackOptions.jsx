

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <ul>
                <li><button onClick={onLeaveFeedback.good}>Good</button></li>
                <li><button  onClick={onLeaveFeedback.neutral}>Neutral</button></li>
                <li><button  onClick={onLeaveFeedback.bad}>Bad</button></li>
            </ul>
) 
}
export default FeedbackOptions;

{/* <ul>
                <li><button onClick={this.countFeedbackGood}>Good</button></li>
                <li><button  onClick={this.countFeedbackNeutral }>Neutral</button></li>
                <li><button  onClick={this.countFeedbackBad}>Bad</button></li>
            </ul> */}

{/* <FeedbackOptions options={ } onLeaveFeedback={ } /> */}