import styled from 'styled-components';

export const TransactionHistoryWrapper = styled.table`
  color: #a9abab;
  font-size: 16px;
  background-color: #fff;
  width: 700px;
  margin: 30px auto;
  border-spacing: 0px;
  overflow: hidden;
  border-radius: 3px;
  /* border-radius work only with overflow:hidden */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
`;

export const Head = styled.thead`
  background-color: #0ee0eb;
  text-transform: uppercase;
  color: #fff;
`;

export const HeadRow = styled.tr``;

export const HeadColomn = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;
  &:not(:last-child) {
    border-right: 1px solid #dee0e0;
  }
`;

export const BodyRow = styled.tr`
  &:nth-child(even) {
    background-color: #edf5f5;
  }
`;

export const BodyColomn = styled.td`
  padding-top: 15px;
  padding-bottom: 15px;
  &:not(:last-child) {
    border-right: 1px solid #dee0e0;
  }
  text-align: center;
  &:first-child {
    text-transform: capitalize;
  }
`;
