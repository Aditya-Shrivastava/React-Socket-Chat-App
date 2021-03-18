import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';

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
		<div className='flex justify-center items-center bg-black h-screen w-full'>
			<div className='w-1/2 h-1/2 rounded-md flex justify-between flex-col bg-white'>
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
