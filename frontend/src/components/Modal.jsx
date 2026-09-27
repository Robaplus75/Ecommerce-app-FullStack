import React from 'react';
import PropTypes from 'prop-types';

export default function Modal({isModelOpen, setIsModelOpen, children}){
	if(!isModelOpen) return null
	return (
		<div className=" z-10 fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
			<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
				<button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={()=>setIsModelOpen(false)}>
					&times;
				</button>
				{React.cloneElement(children, { setIsModelOpen })}
			</div>
		</div>
	)
}

Modal.propTypes = {
	isModelOpen: PropTypes.bool.isRequired,
	setIsModelOpen: PropTypes.func.isRequired,
	children: PropTypes.element.isRequired,
}
