import PropTypes from 'prop-types';
import  Typography  from "@mui/material/Typography"

const Section = ({ title, children }) => {
    return (
        <section>
            <Typography variant="h1" sx={{textAlign: 'center', fontSize: 64, m: 2}}>{title}</Typography>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section;