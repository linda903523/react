import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { browserHistory } from 'react-router';

import * as LoginAction from './LoginAction';
import './Login.scss';

import { Button } from 'antd';

class LoginComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loadingShow: false,
			tips: ''
		}
		this.msg = {
			type: 'login',
			username: '',
			password: ''
		}
	}

	/*contextTypes: {
	    router: React.PropTypes.object
	  }*/

	//收集表单信息
	getFormdata(type, e) {
		if(type == 'username'){
			this.msg.username = e.target.value;
		}
		if(type == 'password'){
			this.msg.password = e.target.value;
		}
	}
	
	//点击登录提交信息
	signIn(e) {
		if(e == 'mouse' || e.keyCode == 13){
			const self = this;
			var timer;
			this.setState({
				loadingShow: true
			})
			this.props.loginUser('http://10.3.137.195:9000/getData.php', this.msg).then(response => {
	         if(JSON.parse(response).status == 'ok'){
					sessionStorage.setItem('username', this.msg.username);
					timer = setTimeout(function(){
						self.props.router.replace({
							pathname: '/'
						})
						clearTimeout(timer);
					}, 500);
	         } else {
	         	this.setState({
	         		loadingShow: false,
	         		tips: '密码错误，请重新输入'
	         	})
	         }
	     	});
		}
	}

	render(){
		return (
			<div>
				<div className="login">
					<h1>LOGIN</h1>
					<p>Open  Your  Seller's  Center</p>
					<label>
						<span>用户名</span>
						<input type="text" onBlur={ this.getFormdata.bind(this, 'username') } autoFocus/>
					</label>
					<label>
						<span>密码</span>
						<input 
						type="password" 
						onChange={ this.getFormdata.bind(this, 'password') }
						onKeyDown={ this.signIn.bind(this) }
						/>
						<p className="tips">{ this.state.tips }</p>
					</label>
					<Button 
						loading={ this.state.loadingShow } 
						onClick={ ()=>{ this.signIn('mouse') } }
					>登录</Button>	
				</div>
			</div>
		)
	}
}

const mapStateToProps = function(state){
	console.log('77',state)
	return {
	}
}

export default connect (mapStateToProps, LoginAction)(LoginComponent);