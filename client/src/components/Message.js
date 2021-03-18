import React from 'react';

const Message = ({ message: { user, text }, name }) => {
	let isSentByCurrentUser = false;

	const trimmedName = name.trim().toLowerCase();

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className='justify-end flex px-3 mt-2'>
			<p className='flex items-center text-gray-800 tracking-tight pr-3'>
				{trimmedName}
			</p>
			<div className='bg-blue-400 rounded-md py-2 px-5 text-white inline-block max-w-4/5'>
				<p className='text-white w-full tracking-normal text-xl break-words float-left'>
					{text}
				</p>
			</div>
		</div>
	) : (
		<div className='justify-start flex px-3 mt-2'>
			<div className='bg-gray-100 rounded-md py-2 px-5 text-white inline-block max-w-4/5'>
				<p className='text-gray-900 w-full tracking-normal text-xl break-words float-left'>
					{text}
				</p>
			</div>
			<p className='flex items-center text-gray-800 tracking-tight pl-3'>
				{user}
			</p>
		</div>
	);
};

export default Message;
