import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery'
import baseUrl from '../../utils/baseUrl.js';

class IndComponent extends React.Component{
     componentDidMount(){
        var cookies = document.cookie;
        if(cookies){
            $('.btn_Ind').css({display:'block'})
            var arr_cookie = cookies.split('; ');//['myName=laoxie','myAge=18','test=hello']
            arr_cookie.forEach(function(item){
                var temp = item.split('=');//['myName','laoxie']
                // 去掉引号
                var CookieToken = temp[1].slice(1,-1)
                $('.Hee').html(CookieToken);

                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState === 4){
                        $('.he_span').html('欢迎')
                        $('.he_spans').html(xhr.responseText+'登录')
                    }
                }
                xhr.open('get',baseUrl+'token.php?token='+CookieToken,true);
                xhr.send();
            })
        } else {
            $('.btn_Ind').css({display:'none'})
        }
     }
    changeInd(){}
    changeBtnInd(){
        hashHistory.push({pathname:'/'});
        var date = new Date();
        date.setDate(date.getDate()-7);//7天后的时间
        document.cookie = 'cookie='+'d'+';expires=' + date.toString();
    }
    render(){
        return (
            <div>
                <h1 onClick={this.changeInd} className="Hee">主路由22222</h1>
                <h3>
                    <span className="he_span">请先登录</span>
                    <span className="he_spans"></span>
                </h3>
                <input type="button" className="btn_Ind" value="退出" onClick={this.changeBtnInd}/>
            </div>
        )
    }
}

export default IndComponent