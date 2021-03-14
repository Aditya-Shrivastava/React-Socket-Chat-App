import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Join} />
				<Route path='/chat' component={Chat} />
			</Switch>
		</Router>
	);
};

export default App;
