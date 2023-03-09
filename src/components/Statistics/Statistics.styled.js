import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const StatItem = styled.li`
  font-size: 18px;
  padding: 5px;
  box-shadow: -5px -5px 9px #fff inset, 2px 2px 18px -10px #000 inset;
`;

export const StatText = styled.span`
  font-weight: bold;
`;
