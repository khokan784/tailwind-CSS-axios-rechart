import PropTypes from 'prop-types';
import { AiOutlineCheckCircle  } from "react-icons/ai";

const Features = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'><AiOutlineCheckCircle  className='text-green-950'></AiOutlineCheckCircle >{feature}</p>
        </div>
    );
};
Features.propTypes = {
    feature: PropTypes.object
}
export default Features;