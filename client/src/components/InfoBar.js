import React from 'react';

import closeIcon from '../icons/closeIcon.png';
import onlineIcon from '../icons/onlineIcon.png';

const InfoBar = ({ room }) => {
	return (
		<div className='flex items-center justify-between h-14 w-full rounded-t-md bg-blue-500'>
			<div className='flex flex-1 items-center ml-5 text-white'>
				<img src={onlineIcon} className='mr-5' alt='online' />
				<h3>{room}</h3>
			</div>
			<div className='flex flex-1 justify-end mr-5'>
				<a href='/'>
					<img src={closeIcon} alt='close' />
				</a>
			</div>
		</div>
	);
};

export default InfoBar;
