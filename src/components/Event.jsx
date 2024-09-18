import PropTypes from 'prop-types';

const Event = (props) => {
    return(
        <td className={'Event ' + props.color}>
            <h5 className="eventData">{ props.event }</h5>
            <h6 className='eventData'>{ props.location }</h6>
        </td>
    );
};

Event.propTypes = {
    color: PropTypes.any,
    event: PropTypes.any,
    location: PropTypes.string
}

export default Event;