import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return (
		<div className='flex h-screen w-100 justify-center items-center bg-green-400'>
			<div
				className='w-4/5
			 h-1/2 md:w-3/5 lg:w-1/2 bg-white rounded shadow-lg px-8 py-8 font-mono flex justify-evenly flex-col'
			>
				<h1 className='font-black text-4xl uppercase mb-3'>Join</h1>
				<div>
					<input
						className='w-full h-12 px-4 text-xl focus:outline-none rounded-md focus:ring focus:border-blue-200 bg-gray-200'
						placeholder='Name'
						type='text'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</div>
				<div>
					<input
						className='w-full h-12 px-4 text-xl focus:outline-none rounded-md focus:ring focus:border-blue-200 bg-gray-200'
						placeholder='Room'
						type='text'
						onChange={(e) => setRoom(e.target.value)}
						value={room}
					/>
				</div>
				<Link
					onClick={(e) =>
						!name || !room ? e.preventDefault() : null
					}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button
						className='p-2 w-40 rounded-md shadow-md bg-blue-500 text-white font-semibold text-xl hover:bg-green-400 transition duration-500 ease-in-out hover:shadow-2xl'
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
