import PropTypes from 'prop-types';
import { FeedbackName } from './FeedbackTitle.styled';

export const FeedbackTitle = ({ name }) => {
  return <FeedbackName>{name}</FeedbackName>;
};

FeedbackTitle.propTypes = {
  name: PropTypes.string,
};
