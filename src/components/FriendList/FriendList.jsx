import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </FriendListWrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
