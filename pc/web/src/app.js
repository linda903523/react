import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './redux/configStore';
import router from './router/index';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

const store = configStore();

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ hashHistory } routes={ router } />
	</Provider>,
	document.getElementById('app')
)