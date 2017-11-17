import React from 'react';
import { connect } from 'react-redux';

import DatagridComponent from '../datagrid/DatagridComponent';
import * as SalingGoodsAction from './SalingGoodsAction';
import './salingGoods.scss';


//如果参数中有 可编辑
/*if(location.state.edit){
	var edit = <th>编辑</th>;
	var editBtn = <td><button onclick={this.handleClick.bind(this)}>编辑</button></td>;
}*/

class SalingGoodsComponent extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			index:0
		}
	}
	
	render(){
		return (
		 	<div className="saling-goods">
		 		<DatagridComponent api={ this.props.location } salingGoodsInit={ this.props.salingGoodsInit } />
		 	</div>
		)
	}
}

const stateToProps = function(state){
	return {
		dataset: state.salingGoods.dataset || []
		
	}
}

export default connect(stateToProps, SalingGoodsAction)(SalingGoodsComponent);

/*
	 width ="100px"  style = {{"disply:${}``}}>
	return (
	 	 	<div>
	 	 		<h2>{console.log('props', this.props.location)}</h2>
	 	 		<table>
	 	 			<thead>
	 	 				<tr>
	 	 					{
	 	 						location.state.th.cn.map(function(key, idx){
	 	 							return <th key={'th' + idx}>{key}</th>
	 	 						})
	 	 					}{ edit }
	 	 				</tr>
	 	 			</thead>
	 	 			<tbody>
	 	 				{
	 	 					this.props.dataset.map(function(val, idx){
	 	 						return (<tr key={ 'tr' + idx }>
	 								{
	 									Object.keys(val).map(function(key, i){
	 										if(location.state.th.en.indexOf(key) > -1){
	 											return <td key={ 'td' + i }>{val[key]}</td>
	 										}
	 										this.shouldRender(i)
	 									})
	 								}{ editBtn }
	 	 						</tr>)
	 	 					})
	 	 				}
	 	 			</tbody>
	 	 		</table>
	 	 		<Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
	 	 	</div>
	)
*/