import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,Route,hashHistory,Link} from 'react-router';
import router from './router/index.js';
import configStore from './redux/configStore.js';
var store = configStore();

ReactDOM.render(   
    <Provider store={store}>
        <Router history={hashHistory} routes={router}/>
    </Provider>,
    document.getElementById('app')
)