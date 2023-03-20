import styled from 'styled-components';
import data from 'data.json';

export const StatisticsSection = styled.section`
  color: white;
  font-size: 24px;
  background-color: #fff;
  width: 500px;
  margin: 30px auto;
  border-radius: 4px;
`;

export const Title = styled.h2`
  color: gray;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 500;
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
`;

export const Item = styled.li`
  background-color: ${getRandomHexColor};
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / ${data.length});
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
`;

function getRandomHexColor() {
  let colorHex = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
    .toUpperCase();
  if (colorHex === 'FFFFFF') {
    colorHex = 'F5F5F5F';
  }
  return `#${colorHex}`;
}
