import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { Container } from './Style/Style.styled';




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
    
    render() {
        const { good, neutral, bad } = this.state;
        const countTotalFeedback = good + neutral + bad;
        const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);
        return (
            <Container>
                <Section title="Please leave feedback" children={<FeedbackOptions onLeaveFeedback={{
                        good: this.countFeedbackGood,
                        neutral: this.countFeedbackNeutral,
                        bad: this.countFeedbackBad
                    }} />}>
                    
                </Section>
            
                <Section title="Statistics" children={countTotalFeedback===0 ? <Notification message="There is no feedback"></Notification> :
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback}
                        positivePercentage={countTotalFeedback === 0 ? 0:countPositiveFeedbackPercentage} />
                 } ></Section>

            </Container>
        )
     }
}
export default StatisticsFeedback;
