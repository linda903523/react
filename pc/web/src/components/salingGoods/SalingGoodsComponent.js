import React from 'react';
import { connect } from 'react-redux';
import DatagridComponent from '../datagrid/DatagridComponent';
import * as SalingGoodsAction from './SalingGoodsAction';
import './salingGoods.scss';

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