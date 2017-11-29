import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router';
import * as HomeAction from './HomeAction';
import SpinnerComponent from '../spinner/spinner';
import { Modal, Button, Carousel, Menu, Breadcrumb, Icon, Spin } from 'antd';
import baseUrl from '../../utils/baseUrl.js';
import './Home.scss';

const SubMenu = Menu.SubMenu;
const confirm = Modal.confirm;


const th = {
	salingGoods: {
		cn: ['商品编号', '商品名称', '商品图片', '销售价', '库存', '商品分类', '商品描述', '颜色', '尺寸'],
		en: ['id', 'name', 'img', 'price', 'number', 'type', 'decorations', 'color', 'size'],
		disable: []
	},
	warehouse: {
		cn: ['商品编号', '商品名称', '商品图片', '销售价', '库存', '商品分类', '商品描述', '颜色', '尺寸'],
		en: ['id', 'name', 'img', 'price', 'number', 'type', 'decorations', 'color', 'size'],
		disable: ['id', '商品编号']
	}
}

class HomeComponent extends React.Component{	
	constructor(props){
		super(props);
		this.state = {
			//用户信息
			user: {
				username: this.props.location.query.user
			},
			//各模块所需参数
			skipParams: {
				salingGoods: {//出售中的商品模块
					state: {
						th: th.salingGoods,
						edit: true,
						del: true,
						api: baseUrl
					}
				},
				issue: {//发布新品模块
					state: {
						api: baseUrl
					}
				},
				warehouse: {//仓库中的商品模块
					state: {
						th: th.warehouse,
						edit: true,
						del: true,
						api: baseUrl
					}
				}
			}
		}
	}

	onSignOut = (self) => {
		confirm({
		  title: '您确定要退出登录吗?',
		  onOk() {
		    console.log('OK');
		    //删除本地缓存，并跳转页面
		    sessionStorage.removeItem('username');
		    self.props.router.replace({
		    	pathname: '/login'
		    })
		  }
		});
	}

	render(){
		const self = this;
		return (
			<div>				
				<div className="ant-layout-aside">
					<aside className="sider">
					  	<div className="logo">
							<img src="src/img/logo.png" alt=""/>
					  	</div>
					  	<div className="user">
							<img src="src/img/f.jpg"/>
							<div>
								<p className="username">{ sessionStorage.getItem('username') }</p>
								<p className="grand">
									<span>卖家等级：</span>
									<Icon type="star" />
									<Icon type="star" />
									<Icon type="star" />
								</p>
							</div>
					  	</div>
					  	<div className="goHome">
							<Link to="/">
								<button>
									<Icon type="home" />
									首页
								</button>
							</Link>
					  	</div>
						<Menu mode="inline" theme="dark" defaultOpenKeys={['sub1','sub2','sub3']}>
					   	<SubMenu key="sub1" title={<span><Icon type="user" />商品管理</span>}>
					   	   <Menu.Item key="1">
						   	   <Link to={
						   	   	{
							   	   	pathname: 'issue',
							   	   	state: this.state.skipParams.issue
						   	   	}
						   		}>
						   			<Icon type="notification" />
						   			发布新品
						   		</Link>
					   		</Menu.Item>
					   	   <Menu.Item key="2">
						   	   <Link to={
						   	   	{
						   	   		pathname: 'salingGoods',
						   	   		state: this.state.skipParams.salingGoods.state
						   	   	}
						   	   }>
						   	   	<Icon type="dot-chart" />
						   	   	出售中的商品
						   	   </Link>
					   	   </Menu.Item>
					   	   <Menu.Item key="3">
						   	   <Link to={
						   	   	{
											pathname: 'warehouse',
											state: this.state.skipParams.warehouse.state
							   	   }
							   	}>
								   	<Icon type="shop" />
								   	仓库中的商品
							   	</Link>
						   	</Menu.Item>
					   	</SubMenu>
					   	<SubMenu key="sub2" title={<span><Icon type="laptop" />交易管理</span>}>
					   	   <Menu.Item key="5">已卖出商品</Menu.Item>
					   	   <Menu.Item key="6">评价管理</Menu.Item>
					   	</SubMenu>
					   	<SubMenu key="sub3" title={<span><Icon type="usergroup-delete" />客户服务</span>}>
					   	   <Menu.Item key="9">退款 / 退货</Menu.Item>
					   	   <Menu.Item key="10">违规记录</Menu.Item>
					   	</SubMenu>
					  	</Menu>
					</aside>
					<div className="mainContent">
					  	<div className="header">
							<h2>
								卖家后台管理系统
							</h2>
							<button className="exit" onClick={ this.onSignOut.bind(this, this) }>退出</button>
					  	</div>
					  	<div className="inform">
					  		<span className="fl">【  重要通知  】：</span>
					  		<Carousel className="fl" autoplay vertical dots={false}>
					  		   <div><h3>11111111111111123211242</h3></div>
					  		   <div><h3>2111112341231211242</h3></div>
					  		   <div><h3>311222222222111123211242</h3></div>
					  		   <div><h3>4114444444444444423211242</h3></div>
					  		</Carousel>
					  	</div>
					  	<div className="container">
					    	<div className="content">
					    		<Spin className="loadingShow" size="large" spinning={this.props.loading} />
					      	{this.props.children}
					    	</div>
					  	</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		loading: state.home.loading || false
	}
}

export default connect(mapStateToProps, HomeAction)(HomeComponent);