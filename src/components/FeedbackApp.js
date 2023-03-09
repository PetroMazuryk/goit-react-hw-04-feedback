import { useState } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const FeedbackApp = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const handleBtnClick = event => {
    const value = event.target.value;

    if (value === 'good') {
      setGood(state => state + 1);
    }
    if (value === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (value === 'bad') {
      setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    const totalFeedbacks = good + neutral + bad;

    return totalFeedbacks;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round((good / countTotalFeedback()) * 100);
    return positivePercentage;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification message="There is no feedback"></Notification>
        </Section>
      )}
    </Container>
  );
};
