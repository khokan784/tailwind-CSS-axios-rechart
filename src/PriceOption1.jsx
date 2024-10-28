import PropTypes from 'prop-types';
import Features from './features';
const PriceOption1 = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-sky-200 rounded-xl p-6 my-6 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className="text-3xl text-center">{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className='mt-8 w-full text-white bg-fuchsia-600 rounded py-3 font-bold hover:bg-amber-950'>Buy Now</button>
        </div>
    );
};

PriceOption1.propTypes = {
    option: PropTypes.object
}
export default PriceOption1;