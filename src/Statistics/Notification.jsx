import PropTypes from 'prop-types';
import { NotificationText } from './Style/Style.styled';

const Notification = ({message }) => {
    return (
        <NotificationText>{ message}</NotificationText>

    )
 }

Notification.propTypes = {
    message:PropTypes.string,
}
export default Notification;


{/* <Notification message="There is no feedback"></Notification> */ }