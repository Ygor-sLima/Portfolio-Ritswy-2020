import React from 'react';

const FixedIconLink = (props) => {

	return (
		<div className={`fRow fixedLink ${props.right ? "right": ""}`} onClick={props.to}>
			{props.children}
		</div>
	);

}

export default FixedIconLink;
