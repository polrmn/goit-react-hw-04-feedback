import PropTypes from 'prop-types';
import { Button, Box } from '@mui/material';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
            {options.map(option => (
                <Button key={option}
                    variant={option ==='neutral' ? 'outlined' : 'contained'}
                    sx={{ fontSize: 30 }}
                    name={option}
                    type="button"
                    onClick={onLeaveFeedback}
                    color={option ==='bad' ? 'error' : 'success'}
                >
                    {option}
                </Button> 
            ))}
        </Box>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;