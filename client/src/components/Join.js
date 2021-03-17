import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return (
		<div className='flex h-screen w-100 justify-center items-center bg-black'>
			<div
				className='w-2/5
			  rounded font-mono flex justify-cente items-center flex-col'
			>
				<h1 className='font-semibold text-4xl mb-6 text-white text-center border-b w-full'>
					Join
				</h1>
				<div className='w-full'>
					<input
						className='w-full h-12 px-4 text-xl focus:outline-none focus:ring focus:border-blue-200 bg-gray-200 mb-3'
						placeholder='Name'
						type='text'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</div>
				<div className='w-full'>
					<input
						className='w-full h-12 px-4 text-xl focus:outline-none focus:ring focus:border-blue-200 bg-gray-200 mb-3'
						placeholder='Room'
						type='text'
						onChange={(e) => setRoom(e.target.value)}
						value={room}
					/>
				</div>
				<Link
					className='w-full'
					onClick={(e) =>
						!name || !room ? e.preventDefault() : null
					}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button
						className='p-2 mt-2 bg-blue-700 text-white font-regular text-xl hover:bg-green-400 transition duration-500 ease-in-out w-full'
						type='submit'
					>
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;
