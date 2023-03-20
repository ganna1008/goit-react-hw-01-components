import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  Image,
  Label,
  Stats,
  Description,
  Name,
  Tag,
  UserLocation,
  Quantity,
  StatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <UserLocation>{location}l</UserLocation>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
