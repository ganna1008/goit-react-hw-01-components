import PropTypes from 'prop-types';
import {
  BodyColomn,
  BodyRow,
  Head,
  HeadColomn,
  HeadRow,
  TransactionHistoryWrapper,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryWrapper>
      <Head>
        <HeadRow>
          <HeadColomn>Type</HeadColomn>
          <HeadColomn>Amount</HeadColomn>
          <HeadColomn>Currency</HeadColomn>
        </HeadRow>
      </Head>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <BodyRow key={id}>
            <BodyColomn>{type}</BodyColomn>
            <BodyColomn>{amount}</BodyColomn>
            <BodyColomn>{currency}</BodyColomn>
          </BodyRow>
        ))}
      </tbody>
    </TransactionHistoryWrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
