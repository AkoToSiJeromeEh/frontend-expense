import { useState } from "react";	

const ToggleState = (initialValue = false) => {

	const [isTrue , setValue] = useState(initialValue)
	const toggle = () => {
		 
		 setValue(preval => !preval)
	}
	return [isTrue, toggle];

}

export default ToggleState