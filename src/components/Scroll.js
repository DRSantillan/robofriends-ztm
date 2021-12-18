import React from 'react';

const Scroll = (props) => {
	return (
		<div
			style={{
				overflow: 'scroll',
				border: '20px solid black;',
				height: '100vh',
			}}
		>
			{props.children}
		</div>
	);
};

export default Scroll;