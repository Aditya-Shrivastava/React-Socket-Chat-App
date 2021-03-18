import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
	return (
		<form className='flex border-gray-200 border-t-4'>
			<input
				className='border-none rounded-none p-5 w-2/5 text-xl focus:outline-none flex-1'
				type='text'
				placeholder='Type a message...'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
			/>
			<button
				className='text-white uppercase no-underline bg-blue-500 p-3 inline-block border-none w-1/5'
				onClick={(e) => sendMessage(e)}
			>
				Send
			</button>
		</form>
	);
};

export default Input;
