import PropTypes from 'prop-types';
import cardImage from '../images/Rectangle 2.png';
const Card = (props) => {
  const {expense , category , date } = props;
  return (
    
        <div className="border-2 border-custom-gray rounded-2xl w-full p-5 flex flex-row justify-between items-center">
          <div>
            <div className="bg-[#000000] rounded-full p-3 w-12 inline-block align-middle">
              <img className="w-10" src={cardImage} alt="" />
            </div>
            <div className="inline-block align-middle ms-2">
              <p className="font-extrabold">{category}</p>
            </div>
          </div>
          <div className="text-end">
            <p className="font-semibold">-{expense}</p>
            <span className="text-end font-extrabold text-sm text-secondary">
             {new Date(date).toLocaleDateString()}
            </span>
          </div>
        </div>
  );
};

export default Card;
Card.propTypes = {
	expense: PropTypes.number,
	category: PropTypes.string, 
	date: PropTypes.string,
  };
  
