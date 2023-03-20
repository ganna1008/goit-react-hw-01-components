import PropTypes from 'prop-types';
import {
  Item,
  Label,
  StatisticsSection,
  StatList,
  Title,
} from './Statistics.styled';

export const Statistics = data => {
  const { title, stats } = data;
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
          <Item key={item.id}>
            <Label>{item.label}</Label>
            <span>{item.percentage}%</span>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  }),
};
