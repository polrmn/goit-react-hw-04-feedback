import PropTypes from 'prop-types';
import { List, ListItem } from '@mui/material';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <List sx={{fontSize: 30}}>
            <ListItem sx={{justifyContent: 'center'}}>Good: {good}</ListItem>
            <ListItem sx={{justifyContent: 'center'}}>Neutral: {neutral}</ListItem>
            <ListItem sx={{justifyContent: 'center'}}>Bad: {bad}</ListItem>
            <ListItem sx={{justifyContent: 'center'}}>Total: {total}</ListItem>
            <ListItem sx={{justifyContent: 'center'}}>Positive feedback: {positivePercentage}%</ListItem>
        </List>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;