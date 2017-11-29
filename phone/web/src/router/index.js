import React from 'react';
import {Router,Route,Link,IndexRoute} from 'react-router';
import HomeComponent from '../components/home/HomeComponent';
import SearchComponent from '../components/search/SearchComponent';
import ResultComponent from '../components/result/ResultComponent.js';
import ShoppingComponent from '../components/shopping/ShoppingComponent.js';
import ListComponent from '../components/list/ListComponent.js';
import ListTypeComponent from '../components/listType/ListTypeComponent.js';
import DetailComponent from '../components/detail/DetailComponent.js';
import LoginComponent from '../components/login/LoginComponent'
import Login from '../components/login/login_link'
import Register from '../components/login/register_link'
import IndComponent from '../components/ind/ind'
import MyComponent from '../components/my/MyComponent';
import OrderComponent from '../components/Order/OrderComponent';
import AllComponent from '../components/all/allComponent';
import AwaitComponent from '../components/cawait/cawaitComponent';
import EvaluateComponent from '../components/evaluate/evaluateComponent';
import ReceivingComponent from '../components/receiving/receivingComponent';
import ShipmentsComponent from '../components/shipments/shipmentsComponent';
import BuycarComponent from '../components/buycar/buycarComponent';
import DuComponent from '../components/du/duComponent';
import OpinionComponent from '../components/opinion/opinionComponent';
import SetComponent from '../components/set/setComponent';
import MoComponent from '../components/moren/morenComponent';
import ListOrderComponent from '../components/listOrder/listOrderComponent';
import BrowseComponent from '../components/browse/browseComponent';
import MoneyComponent from '../components/money/moneyComponent';

export default(
    <Router>
        <Route path="/" component={HomeComponent}></Route>
        <Route path="/home" component={HomeComponent}></Route>
        <Route path="/search" component={SearchComponent}></Route>
        <Route path="/result" component={ResultComponent}></Route>
        <Route path="/browse" component={BrowseComponent}></Route>
        <Route path="/money" component={MoneyComponent}></Route>
        <Route path="/shopping" component={ShoppingComponent}>
            <IndexRoute component={ListComponent}/>
            <Route path="/list" component={ListComponent}></Route>
            <Route path="/listType/:type" component={ListTypeComponent}></Route>
        </Route>
        <Route path="/detail/:id" component={DetailComponent}></Route>
        <Route path="log" component={LoginComponent}>
            <IndexRoute component={Login}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Route>        
        <Route path="/my" component={MyComponent}></Route>
        <Route path="/listOrder" component={ListOrderComponent}></Route>
        <Route path="/buycar" component={BuycarComponent}></Route>
        <Route path="/du" component={DuComponent}></Route>
        <Route path="/set" component={SetComponent}></Route>
        <Route path="/opinion" component={OpinionComponent}></Route>
        <Route path="/order" component={OrderComponent}>
            <IndexRoute  component={MoComponent}></IndexRoute>
            <Route path="/all" component={AllComponent}/>
            <Route path="/await" component={AwaitComponent}/>
            <Route path="/evaluate" component={EvaluateComponent}/>
            <Route path="/receiving" component={ReceivingComponent}/>
            <Route path="/shipments" component={ShipmentsComponent}/>
        </Route>
    </Router>
)