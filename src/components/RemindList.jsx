import PropTypes from 'prop-types';
import {Link } from 'react-router-dom'
import {LuPencilLine} from 'react-icons/lu'
import {RiDeleteBin6Fill} from 'react-icons/ri'
const RemindList = (props) => {
	const {id ,title , price , date , content , deleteReminder } = props
	
  return (
	<div className="bg-[#00000016] p-5 h-48 rounded-lg  relative overflow-y-auto">
	<div className="flex flex-row justify-between gap-4">
	  <h2 className="font-semibold">
	
		<Link 
		  className="  text-2xl text-custom-yellow rounded-md inline-block me-2 cursor-pointer align-middle" to={`update/${id}`}> 
		 <LuPencilLine className='align-middle'/>
		</Link>
		{title}
	  </h2>
	  <div>
		<p className="text-green-400">${price}</p>
		<p className="text-white font-semibold">{new Date(date).toLocaleDateString()}</p>
	  </div>
	</div>
	<div className="flex flex-col justify-between gap-8">
	  <div className="mt-5">
		<p className="leading-6">{content }</p>
	  </div>
	  <div className="absolute -bottom-5 right-0 left-0 w-full flex flex-col">
		<button onClick={() => deleteReminder()} className="bg-red-500 rounded-b-x  text-white w-full font-bold flex items-center justify-center p-5">
		<RiDeleteBin6Fill className='text-2xl '/>
	  </button>
	  </div>
	</div>
  </div>
  )
}

export default RemindList
RemindList.propTypes = {
	id : PropTypes.string,
	title: PropTypes.string,  
	price: PropTypes.number,
	date: PropTypes.string, 
	content: PropTypes.string,
	deleteReminder: PropTypes.func,
  };
  