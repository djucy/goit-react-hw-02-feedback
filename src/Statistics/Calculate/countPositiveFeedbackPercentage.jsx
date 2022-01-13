export default function countPositiveFeedbackPercentage(good, neutral, bad) {
    const sum = good + neutral + bad;
    const percentage = good / sum * 100;
    return percentage;

}