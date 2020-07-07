import React from 'react';

const Footer = ({history}) => {

	return (
		<footer className="fRow page">
			<button>Home</button>|
			<button style={{cursor: 'not-allowed'}}>3D Modeling</button>|
			<button onClick={ () => {history.push('/movies');}}>Movies</button>|
			<button onClick={ () => {history.push('/games');}}>Games</button>|
			<button style={{cursor: 'not-allowed'}}>Music</button>
		</footer>
	);
}

export default Footer;
