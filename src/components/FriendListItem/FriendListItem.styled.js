import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 15px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
  border-radius: 0px 0px 2px 2px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
  border-radius: 50%;
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
