import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const Button = styled.button`
  width: 110px;
  height: 30px;

  border-radius: 10px;

  transition: transform 250ms linear;
  color: ${props => props.value === 'good' && 'var(--btn-green)'};
  color: ${props => props.value === 'neutral' && 'var(--btn-blue)'};
  color: ${props => props.value === 'bad' && 'var(--btn-tomato)'};

  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;

  font-size: 20px;
  font-weight: bold;

  :hover {
    transform: scale(1.1);
  }
`;
