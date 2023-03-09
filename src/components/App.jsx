import React from 'react';
import { FeedbackTitle } from './FeedbackTitle/FeedbackTitle';
import { FeedbackApp } from './FeedbackApp';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <FeedbackTitle name="Feedback 4"></FeedbackTitle>
      <FeedbackApp />
    </div>
  );
};
