import { Component } from "react";
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import countTotalFeedback from './Calculate/countTotalFeedback';
import countPositiveFeedbackPercentage from './Calculate/countPositiveFeedbackPercentage';
// import countPositiveFeedbackPercentage from './Calculate';



export class StatisticsFeedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    countFeedbackGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
    }
    countFeedbackNeutral = () => {
        this.setState(prevState => ({
            neutral:prevState.neutral+1
        }))
    }
    countFeedbackBad = () => {
        this.setState(prevState => ({
           bad:prevState.bad +1 
        }))
    }
    // good: prevState.good + 1,
   
    render() {
        const { good, neutral, bad} = this.state;
        return (
            <div>
                <FeedbackOptions onLeaveFeedback={{
                    good:this.countFeedbackGood,
                    neutral:this.countFeedbackNeutral,
                    bad: this.countFeedbackBad
                }} />
            
            
            
            <h2>Statistics</h2>
            

                <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback(good, neutral, bad)} positivePercentage={countPositiveFeedbackPercentage(good,neutral,bad)} />


            </div>
        )
     }


}
export default StatisticsFeedback;

// positivePercentage={}
// this.countFeedbackGood