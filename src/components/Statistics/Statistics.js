import React from 'react';

import PropTypes from 'prop-types';
import { StatList, StatItem, StatText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatList>
        <StatItem>
          Good: <StatText>{good}</StatText>
        </StatItem>
        <StatItem>
          Neutral: <StatText>{neutral}</StatText>
        </StatItem>
        <StatItem>
          Bad: <StatText>{bad}</StatText>
        </StatItem>
        <StatItem>
          Total: <StatText>{total}</StatText>
        </StatItem>
        <StatItem>
          Positive feedback:{' '}
          <StatText>{total > 0 ? positivePercentage : '0'}%</StatText>
        </StatItem>
      </StatList>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
