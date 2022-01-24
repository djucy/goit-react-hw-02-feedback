import { SecondaryTitle } from './Style/Style.styled';
import PropTypes from 'prop-types';



const Section = ({ title, children }) => {
    return (
        <section>
            <SecondaryTitle>{title}</SecondaryTitle>
            {children}
        </section>
        
    )
};
export default Section;

Section.propTypes = {

    title: PropTypes.string.isRequired,
    children:PropTypes.object.isRequired,
}