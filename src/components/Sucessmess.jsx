import React from 'react'
import PropTypes from 'prop-types';
const Sucessmess = (props) => {

	const {success , sucessMessage , } = props;
  return (
	<p className="text-white font-semibold text-lg fixed right-40 p-8 z-20 bg-green-500  rounded-b-full w-fit text-center animate__animated   animate__swing ">
	{success ? `${sucessMessage}` : null}
  </p>
  )
}

export default Sucessmess
Sucessmess.propTypes = {
	 success : PropTypes.bool,
	 sucessMessage : PropTypes.string,

};