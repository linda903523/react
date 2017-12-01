import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './Issue.scss';
import * as IssueAction from './IssueAction';
import FormComponent from '../form/FormComponent';

import { Input, Button, Select, Upload, message, Icon } from 'antd';
const Option = Select.Option;
/*
	
	constructor() {
	   super();
	   this.state = {
	      options: [{
	      	value: 'aa',
	      	html: 'aaaa'
	      },{
	      	value: 'bbb',
	      	html: 'bbbbb'
	      },{
	      	value: 'asasdsa',
	      	html: 'asasdsaa'
	      }]
	   };
	}
*/

//设置提示框
message.config({
  top: 100
});

const formParams = {
	    	goodsClassify: '衣服',
	    	collocate: [{
	    		name: '',
	    		list: []
	    	}]
	   }

const type = 'issueGoods';

class IssueComponent extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			classify: '',
			children: [],
			options: [{
				value: '衣服',
				html: '衣服'
			},{
				value: '童装',
	      	html: '童装'
			},{
				value: '裤子',
	      	html: '裤子'
			}]
		}
	}

	//发布新品
	onIssueGoods(newParams){
		const newGoodsParams = {
			type: 'issueGoods',
			data: JSON.stringify(newParams)
		}
		console.log('a',this.props)
		this.props.issueGoods(this.props.location.state.state.api, newGoodsParams);
	}

	render(){

		return (
		   <div className="issueGoods">
				<FormComponent 
					api={ this.props.location.state.state.api }
					formParams={ formParams } 
					onIssueGoods={ this.onIssueGoods.bind(this) }
				/>
		   </div>
		)
	}
}

const mapStateToProps = function(state){
	return {}
}

export default connect (mapStateToProps, IssueAction)(IssueComponent);