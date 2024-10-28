import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li>
            <li className="mr-10 px-6 hover:bg-purple-400"><a href={`route.path`}>{route.name}</a></li>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;