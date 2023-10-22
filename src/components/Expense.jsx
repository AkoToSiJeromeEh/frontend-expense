import PropTypes from 'prop-types';
import {FaHamburger} from 'react-icons/fa'
import { FaSchool } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { HiMiniHomeModern } from "react-icons/hi2";
import { FaMoneyBill } from "react-icons/fa";
import {RiDeleteBin6Fill} from 'react-icons/ri'

 const Expense = (props) => {

	const {expense , date , category , deleteExpense} = props
  return (

	<div className="bg-[#00000016]  rounded-t-xl w-full p-5 flex flex-row justify-between items-center h-fit gap-4 relative ">
	<div>
	  <div className="rgb-add rounded-full p-3 w-12 inline-block align-middle ">
	  {		  category == "Food" ? (
              <FaHamburger className="w-10 text-2xl" />
            ) : category == "Travel" ? (
              <PiAirplaneTiltFill className="w-10 text-2xl" />
            ) : category == "School" ? (
              <FaSchool className="w-10 text-2xl" />
            ) : category == "Home" ? (
              <HiMiniHomeModern className="w-10 text-2xl" />
            ) : category == "Bills" ? (
              <FaMoneyBill className="w-10 text-2xl" />
            ) : category == "Entertainment" ? (
              <BiSolidCameraMovie className="w-10 text-2xl" />
            ) : (
              ""
            )}
	  </div>
	  <div className="inline-block align-middle ms-2">
		<p className="font-semibold">{category}</p>
	  </div>
	</div>
	<div className="text-end">
	  <p className="font-bold">-{expense}</p>
	  <span className="text-end font-normal text-sm text-secondary">{new Date(date).toLocaleDateString()}</span>
	</div>
	<div className="absolute -bottom-16 z-20 right-0 left-0 w-full flex ">
	  <button onClick={() => deleteExpense()} className="bg-custom-navy rounded-b-x  text-white w-full font-bold flex items-center justify-center p-5">
		<RiDeleteBin6Fill className='text-2xl '/>
	  </button>
	</div>
  </div>
  )
}

export default Expense
Expense.propTypes = {
	expense: PropTypes.number,
	category: PropTypes.string, 
	date: PropTypes.string,
	deleteExpense : PropTypes.func
};