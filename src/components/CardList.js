import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponents = robots.map((user,index) => {
       return (
			<Card
                key={index}
				id={user.id}
				name={user.name}
				email={user.email}
				
			/>
		);
    })
	return (
		<div>
			{cardComponents}
			
		</div>
	);
};

export default CardList;
