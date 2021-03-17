import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');
	const ENDPOINT = 'http://localhost:5000';

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT, {
			transports: ['websocket', 'polling', 'flashsocket'],
		});

		setName(name);
		setRoom(room);

		socket.emit('join', { name, room }, () => {});

		return () => {
			socket.emit('disconnect');

			socket.off();
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	const sendMessage = (e) => {
		e.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => {
				setMessage('');
			});
		}
	};

	console.log(messages, message);

	return (
		<div className='flex justify-center items-center bg-blue-400 h-screen w-100'>
			<div className='w-full'>
				<input
					className='w-full h-12 px-4 text-xl focus:outline-none focus:ring focus:border-blue-200 bg-gray-200 mb-3'
					placeholder='Room'
					type='text'
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					onKeyPress={(e) =>
						e.key === 'Enter' ? sendMessage(e) : null
					}
				/>
			</div>
		</div>
	);
};

export default Chat;
