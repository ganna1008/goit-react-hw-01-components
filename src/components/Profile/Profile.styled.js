import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  color: #757575;
  font-size: 16px;
  background-color: #ffffff;
  width: 270px;
  margin: 0 auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
`;

export const Image = styled.img`
  display: inline-block;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 50%;
  border: 1px solid #80808029;
`;

export const Name = styled.p`
  font-size: 24px;
  color: #212121;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const UserLocation = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const Stats = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  background-color: #f5f4fa;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  border: 1px solid rgba(117, 117, 117, 0.27);
`;

export const Label = styled.span`
  margin-bottom: 8px;
`;

export const Quantity = styled.span`
  font-weight: 500;
  color: #212121;
`;
