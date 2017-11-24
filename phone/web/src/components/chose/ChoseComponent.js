import React from 'react';
import {connect} from 'react-redux';
import $ from "jquery";
import {Link} from 'react-router';
import * as ChoseAction from './ChoseAction.js';
import './chose.scss';

class ChoseComponent extends React.Component{
    componentDidUpdate(){
        if(this.props.morestatus){   
            $('.chose').animate({height:$('.chose li').outerHeight(true)*4},200);
            $('.chose').children('li').eq(4).html(`<img src="./src/img/ccc5_1.jpg"/>`)
        }else{
            $('.chose').animate({height:$('.chose li').outerHeight(true)},200);
            $('.chose').children('li').eq(4).html(`<img src="./src/img/ccc5.png"/>`)           
        }
    }
    aa(idx){
        if(!this.props.morestatus&&idx==4){
            this.props.chosemore(this.props.morestatus)
        }else if(this.props.morestatus&&idx==16){
            this.props.chosemore(this.props.morestatus)
        }
    }
    render(){
        return (
            <div>
                <ul className='chose'>
                    {
                        this.props.dataset.map((item,idx)=>{
                            return (
                                <li key={idx} onClick={this.aa.bind(this,idx)}>
                                    <Link to={item.tourl}>
                                        <img src={item.imgurl} />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        dataset:[
            {
                imgurl:'./src/img/ccc1.png',
                tourl:'/shopping'
            },
            {
                imgurl:'./src/img/ccc2.png',
                tourl:'/listType/:2'
            },
            {
                imgurl:'./src/img/ccc3.png',
                tourl:'/listType/:4'
            },
            {
                imgurl:'./src/img/ccc4.png',
                tourl:'/listType/:5'
            },
            {
                imgurl:'./src/img/ccc5.png',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc6.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc7.jpg',
                tourl:'/listType/:11'
            },
            {
                imgurl:'./src/img/ccc9.jpg',
                tourl:'/listType/:6'
            },
            {
                imgurl:'./src/img/ccc10.jpg',
                tourl:'/listType/:9'
            },
            {
                imgurl:'./src/img/ccc11.jpg',
                tourl:'/listType/:7'
            },
            {
                imgurl:'./src/img/ccc12.jpg',
                tourl:'/listType/:1'
            },
            {
                imgurl:'./src/img/ccc13.jpg',
                tourl:'/listType/:2'
            },
            {
                imgurl:'./src/img/ccc14.jpg',
                tourl:'/listType/:8'
            },
            {
                imgurl:'./src/img/ccc15.jpg',
                tourl:'/listType/:10'
            },
            {
                imgurl:'./src/img/ccc16.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc17.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc18.jpg',
                tourl:''
            },
        ],
        morestatus:state.chose.morestatus || false
    }
}

export default connect(mapStateToProps, ChoseAction)(ChoseComponent);