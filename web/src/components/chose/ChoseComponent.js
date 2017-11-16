import React from 'react';
import {connect} from 'react-redux';
import $ from "jquery";
import {Link} from 'react-router';
import * as ChoseAction from './ChoseAction.js';
import './chose.scss';

class ChoseComponent extends React.Component{
    componentDidUpdate(){
        if(this.props.morestatus){   
            $('.chose').animate({height:'260px'},200);
            $('.chose').children('li').eq(4).html(`<img src="./src/img/ccc5_1.jpg"/>`)
        }else{
            $('.chose').animate({height:'59px'},200);
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
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc2.png',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc3.png',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc4.png',
                tourl:'/home'
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
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc9.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc10.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc11.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc12.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc13.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc14.jpg',
                tourl:'/home'
            },
            {
                imgurl:'./src/img/ccc15.jpg',
                tourl:'/home'
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