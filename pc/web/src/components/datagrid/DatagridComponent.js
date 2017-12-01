import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import * as DatagridAction from './DatagridAction';
import './Datagrid.scss';

import FormComponent from '../form/FormComponent';

import { Popconfirm, message, Menu, Breadcrumb, Icon, Pagination, Button, Input, Modal, Select } from 'antd';
const SubMenu = Menu.SubMenu;
const Option = Select.Option;


//表单组件参数
/*
<FormComponent 
	formParams={formParams} 
	onIssueGoods={ this.onIssueGoods.bind(this) }
/>
*/
const formParams = {
	    	goodsClassify: '衣服',
	    	collocate: [{
	    		name: '',
	    		list: []
	    	}]
	   }
for (let i = 10; i < 10; i++) {
	formParams.collocate.list.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const type = 'issueGoods';

const searchTxt = {
	type: 'search',
	condition: '',
	content: ''
};

var pageNum = {};

//如果参数中有 可编辑
/*if(location.state.edit){
	var edit = <th>编辑</th>;
	var editBtn = <td><button onclick={this.handleClick.bind(this)}>编辑</button></td>;
}*/

class DatagridComponent extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			data: '',
			ModalText: 'Content of the modal',
		   visible: false,
		   confirmLoading: false,
		   saveNewData: {}
		}
		
	}
	componentDidMount(){
		/*this.props.Begin().then(response => {
		           console.log(response)
		       });*/
		this.props.dataGridInit(this.props.api.state.api);
		/*const { dataset } = this.props;
		const { index } = dataset
		this.setState({
			index
		})*/
	}
	//选择搜索条件
	changeSearchOpt(idx){
		if(idx == "全部") {
			this.props.dataGridInit(this.props.api.state.api);
		}
		searchTxt.condition = this.props.api.state.th.en[idx];
	}
	//搜索框失去焦点，保存输入的内容
	saveSearchTxt(e){
		console.log('e', e.target.value)
		searchTxt.content = e.target.value;
	}
	//搜索按钮点击
	sendSearch(){
		if(searchTxt.content == ''){
			return;
		}
		this.props.dataGridSearch(this.props.api.state.api, searchTxt);
	}
	/**
	 * yongyue .....
	 * @param {String} current - 当前时间
	 * @param {String} pageSize - jj
	 * @retun {String}
	*/
	/*onShowSizeChange(current, pageSize) {
	  this.props.salingGoodsInit(current, pageSize);
	  // this.setState({index:this.state.index++})
	}*/
	onChange(page, pageSize){
		console.log('222', this.props)
		let params = {
			type: 'getTotal',
			pageNo: page,
			pageSize: pageSize
		}
		pageNum = params;
		this.props.salingGoodsInit(this.props.api.state.api, params).then(response => {
			this.setState({
				visible: false
			})
		});
	}

 	handleCancel = () => {
 	  this.setState({
 	    visible: false,
 	  });
 	}

 	onIssueGoods(self){
 		const newGoodsParams = {
 			type: 'issueGoods'
 		}
 		console.log('a',this.props)
 		// self.props.issueGoods(this.props.api.state.api, formParams);
 		this.onChange(1, 10)
 	}
	
	/*handleClick(){
		const key = {};
		key.index = 1;
		key.name = 'jack';
		//
		const { salingGoodsInit } = this.props;
		salingGoods(key)
	}*/
	//点击编辑按钮
	onEdit(btn, idx, self, location){
		const temp = [...self.props.dataset.data][idx];
		console.log('new', idx, formParams, temp);

		const aa = [];
		formParams.decorations = temp.decorations;
		formParams.name = temp.name;
		// formParams.goodsPrice = temp.dealerPrice;
		formParams.price = temp.price;
		
		//颜色
		let params1 = {
			name: '',
			list: []
		}
		params1.name = "颜色";
		temp.color.split(',').forEach((item) => {
			params1.list.push(item);
		})
		aa.push(params1);

		//尺寸
		let params2 = {
			name: '',
			list: []
		}
		params2.name = "尺寸";
		temp.size.split(',').forEach((item) => {
			params2.list.push(item);
		})
		aa.push(params2);

		formParams.collocate = aa;

		self.setState({
			visible: true,
			saveNewData: formParams
		});
		/*if(btn == 'edit'){
			//已经处于编辑状态
			if(newData[idx]['isAlter']){
				newData.map((item, i) => {
					if(i == idx){
						return (
							item.showInput = false,
							item.isAlter = false
						)
					} else {
						return item;
					}
				})

		self.setState({data: newData})
		console.log(newData, self)*/
	}

	//点击删除按钮
	onDel(idx, self, location){
		const id = [...self.props.dataset.data][idx]['id'];
		// temp.splice(idx, 1);
		const data = {
			type: 'delItem',
			pageNo: pageNum.pageNo,
			pageSize: pageNum.pageSize,
			id: id
		}
		self.props.delItem(self.props.api.state.api, data).then(() => {
			message.success('删除成功！');
		});
	}

	//渲染thead
	renderGridThead(location){
		return location.th.cn.map(function(key, idx){
			if(location.th.disable.indexOf(key) < 0){
				return <th key={'th' + idx}>{key}</th>
			}
		})
	}
	
	render(){

		let arr = this.props.dataset;
		let location = this.props.api.state;
		const self = this;

		const { visible, confirmLoading, ModalText } = this.state;

		return (
		 	<div className="data-grid">
		 		<div className="searchModule">
		 			<Select 
			 			className="searchClassify" 
			 			onChange={ (value) => { this.changeSearchOpt(value) } } 
			 			defaultValue="选择搜索内容" 
			 			style={{ width: 120 }}
		 			>	
		 				<Option value="全部">全部</Option>
	 			      {
	 			      	location.th.cn.map((item, idx) => {
								return (
								   <Option 
								   key={'searchOpt' + idx} 
								   value={idx + ''}
								   >{ item }</Option>
								)
	 			      	})
	 			      }
	 			   </Select>
		 			<Input onBlur={ self.saveSearchTxt.bind(self) }/>
		 			<Button 
		 				className="searchBtn"
			 			type="primary" 
			 			shape="circle" 
			 			icon="search" 
			 			onClick={ self.sendSearch.bind(self) }
		 			/>
		 		</div>
		 		
		 		<table>
		 			<thead>
		 				<tr>
		 					{ this.renderGridThead(location) }
		 					{ location.edit ? <th>编辑</th> : null }
		 					{ location.del ? <th>删除</th> : null }
		 				</tr>
		 			</thead>
		 			<tbody>
		 				{
	 					   this.props.dataset.data 
	 					   ? this.props.dataset.data.map(function(val, idx){
	 						return (<tr key={ 'tr' + idx }>
	 							{
	 								Object.keys(val).map(function(key, i){
	 									if(location.th.en.indexOf(key) > -1 && location.th.disable.indexOf(key) < 0){
	 										if(key == 'img'){
	 											return (
													<td key={ 'td' + i }>
														<img src={ val[key] } />
			 										</td>
		 										)
	 										} else {
	 											return (
													<td key={ 'td' + i }>
			 											{ val[key] }
			 										</td>
		 										)
	 										}
	 										return (
												<td key={ 'td' + i }>
		 											{ val[key] }
		 										</td>
	 										)
	 									}
	 								})
	 							}
	 							{ 
	 								location.edit 
	 								? <td><Button 
	 									className="editBtn"
		 								key={'edit' + idx} 
		 								onClick={ self.onEdit.bind(this, 'edit', idx, self, location) }
	 								><Icon type="edit" /></Button></td> 
	 								: null 
	 							}
	 							{ 
	 								location.del 
	 								? <td>
	 									<Popconfirm title="Are you sure delete this task?" onConfirm={ self.onDel.bind(this, idx, self, location)} onCancel={ self.cancel} okText="Yes" cancelText="No">
			 								<Button 
			 									className="delBtn"
				 								key={'del' + idx} 
			 								><Icon type="delete" /></Button>
		 								</Popconfirm>
	 								</td> 
	 								: null 
	 							}
	 						</tr>)
	 						})
	 						: null
		 				}
		 			</tbody>
		 		</table>
		 		<Pagination 
		 			showQuickJumper
		 			defaultPageSize={10}
		 			onChange={this.onChange.bind(this)} 
		 			defaultCurrent={1} 
		 			total={this.props.dataset.total ? this.props.dataset.total[0].pageTotal *1 : 20} 
		 		/>
		 		<div>
		 			{
		 				self.state.visible 
		 				? <Modal 
			 		       	className="alterWindow"
			 		      	title="编辑商品信息"
			 		      	width="1000px"
			 		        	visible={visible}
			 		        	footer={null}
			 		        	confirmLoading={confirmLoading}
			 		        	onCancel={this.handleCancel}
			 		      >
		 		         <FormComponent 
		 		         	className="formWindow"
		 		         	api={ this.props.api.state.api }
		 		         	submitBtnTxt="确认修改"
			 		         formParams={ self.state.saveNewData }
			 		         onIssueGoods={ self.onIssueGoods.bind(self, self) }
		 		         />
	 		      	</Modal>
		 		      : null
		 			}
 		      </div>
		 	</div>
		)
	}
}

const stateToProps = function(state){
	console.log('state', state)
	return {
		dataset: state.datagrid.dataset || []
		
	}
}

export default connect(stateToProps, DatagridAction)(DatagridComponent);

/*
	//渲染编辑按钮
	renderEdit(location, isTh){
		if(location.edit){
			if(isTh == 'th'){
				return <th>编辑</th>
			} else {
				return <td><Button key={'edit' + isTh}>编辑</Button></td>
			}
		}
	}
	//渲染删除按钮
	renderDel(location, isTh){
		if(location.del){
			if(isTh == 'th'){
				return <th>删除</th>
			} else {
				return <td><Button key={'del' + isTh}>删除</Button></td>
			}
		}
	}

	//渲染tbody
	renderGridBody(location, arr, self){
		console.log(this.props.dataset)
		if(this.props.dataset.data){
			return (
			   this.props.dataset.data.map(function(val, idx){
				return (<tr key={ 'tr' + idx }>
					{
						Object.keys(val).map(function(key, i){
							if(location.th.en.indexOf(key) > -1){
								return <td key={ 'td' + i }>{val[key]}</td>
							}
						})
						
					}
					{ self.renderEdit(location, idx) }
					{ self.renderDel(location, idx) }
					</tr>)
				})
			)
		}
	}
*/

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