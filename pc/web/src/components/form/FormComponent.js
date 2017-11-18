import React from 'react';
import { connect } from 'react-redux';
import * as FormAction from './FormAction';
import { Input, Button, Select, Upload, message, Icon } from 'antd';

const Option = Select.Option;

//设置提示框
message.config({
  	top: 100
});

class FormComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			classify: '',
			children: [],
			selectParams: props.formParams.collocate,
			options: []
		};
		this.formParams = props.formParams;
		console.log('aaaaa', this.props)
	}

	componentDidMount(){
		
		this.props.getSelectList(this.props.api).then(response => {
			const arr = [];
			JSON.parse(response).cn.forEach(item => {
				for(let attr in item){
					arr.push(item[attr]);
				}
			})
			this.setState({
				options: arr
			})
		})
		
	}

	addFormParams(name, none, e, c) {
	  this.formParams[name] = e.target.value;
	}
	addFormParamsByClassify(val){
		this.formParams['goodsClassify'] = val;
	}
	addFormParamsByCategory(self, list){
		self.formParams.collocate.list = list;
	}
	addFormParamsByCategoryName(self, e){
		self.formParams.collocate.name = e.target.value;
	}

	//添加新的参数分类
	addOneParams(self){
		self.setState((prevState, props) => {
			console.log(prevState, props);
			let selectParams = prevState.selectParams.push(1);
			{selectParams: selectParams}
		})
	}

	//将value写入state，并清空输入框
	setClassify(e, b){
		this.setState({classify: e.target.value})
		e.target.value = '';
	}

	//添加分类
	addOption(val){
		const reState = [...this.state.options];
		reState.push(val);
		this.setState({
			options: reState
		})
	}
	
	//发布新品
	onPutData(){
		this.props.onIssueGoods(this.formParams)
		message.success('发布成功');
	}

	//渲染商品分类
	renderOption(){
		return (
		   this.state.options.map((item, idx) => {
		   	return <Option key={'options' + idx} value={item}>{item}</Option>
		   })
		)
	}
	

	render(){
		const self = this;
		return (
		   <div className={ this.props.className }>
		   	<div className="goodsNameModule formModule">
		   		<label>
			   		<span>商品名</span>
			   		<Input 
				   		defaultValue = {
				   			self.formParams 
				   			? self.formParams.goodsName
				   			: 777
				   		}
				   		placeholder = "输入商品名称" 
				   		onBlur={ this.addFormParams.bind(this, 'goodsName', event) }
			   		/>
			   	</label>
		   	</div>
		   	<div className="classifyModule formModule">
					<label>
						<span>商品分类</span>
						<Select 
							defaultValue={ this.formParams.goodsClassify || "衣服" } 
							style={{ width: 220 }}
							onSelect={ this.addFormParamsByClassify.bind(this) }
						>
							{ this.renderOption(this) }
						</Select>
					</label>
					<label>
					<span>添加新的分类</span>
						<Input 
							onBlur={ this.setClassify.bind(this) } 
							placeholder="输入您要添加的分类"
						/>
					</label>
					<Button onClick={ this.addOption.bind(this, this.state.classify) }>添加</Button>
		   	</div>
		   	<div className="saleModule formModule">
		   		<label htmlFor="">
						<span>售价</span>
						<Input 
							defaultValue={ this.formParams.goodsSale || null } 
							placeholder="输入销售价"
							onBlur={ this.addFormParams.bind(this, 'goodsSale', event) }
						/>
			   	</label>
		   	</div>
		   	<div className="paramsModule formModule">
		   		<label>
		   			<span>选择参数</span>
		   		</label>
		   		<Button onClick={ this.addOneParams.bind(this, this) }>添加新的参数</Button>
		   		{
	   			   this.formParams.collocate.map(function(item, idx){
	   			   	return (
	   			   		<div key={'selectDiv' + idx}>
	   			   			<label>
	   			   				<span>输入新的参数类名</span>
	   			   				<Input 
	   				   				defaultValue={item.name || ''}
	   				   				onBlur={ self.addFormParamsByCategoryName.bind(this, self) }
	   			   				/>
	   			   			</label>
	   			   			<Select
	   			   				className="selectDiv"
	   			   				key={'select' + idx}
	   			   			   mode="tags"
	   			   			   style={{'minWidth': '200px'}}
	   			   			   tokenSeparators={[',']}
	   			   			   defaultValue={item.list}
	   			   			   placeholder="选择或输入参数"
	   			   			   onChange={ self.addFormParamsByCategory.bind(this, self) }
	   			   			>
	   			   			   { self.state.children }
	   			   			</Select>
	   			   		</div>
	   			   	)
	   			   })
		   		}
		   	</div>
		   	<div className="windowFooter">
		   		<Button 
		   			size="large"
		   			type="primary" 
		   			onClick={ this.onPutData.bind(this) }
		   		>{ this.props.submitBtnTxt || '发布新品' }
		   		</Button>
		   	</div>
		   </div>
		)
	}
}

const tateToProps = function(state){
	return {
		optionList: state.form.optionList || []
	}
}

export default connect(tateToProps, FormAction)(FormComponent);