import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList,StatisticsItem } from './Style/Style.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage=0}) => {
    return (
        <StatisticsList>
        <StatisticsItem><span>Good:</span>{good}</StatisticsItem>
        <StatisticsItem><span>Neutral:</span> {neutral}</StatisticsItem>
        <StatisticsItem><span>Bad:</span>{bad}</StatisticsItem>
        <StatisticsItem><span>Total:</span>{total}</StatisticsItem>
            <StatisticsItem><span>Positive feedback:</span>{positivePercentage}%</StatisticsItem>
        </StatisticsList>
    )
}
    
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,


}
export default Statistics;