import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import HomeComponent from '../components/home/HomeComponent'
import IssueComponent from '../components/issue/IssueComponent';
import SalingGoodsComponent from '../components/salingGoods/SalingGoodsComponent';
import WarehouseComponent from '../components/warehouse/WarehouseComponent';
import LoginComponent from '../components/login/LoginComponent';

export default (
   <Route>
   	<Route path="/" component={ HomeComponent }>
	   	<Route path="salingGoods" component={ SalingGoodsComponent } />
			<Route path="issue" component={ IssueComponent }/>
			<Route path="warehouse" component={ WarehouseComponent }/>
   	</Route>
		<Route path="login" component={ LoginComponent }/>
   </Route>
)