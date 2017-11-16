import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import $ from 'jquery';
import './hometop.scss';

export default class HometopComponent extends React.Component{
    render(){
        return (
            <div className="hometop">
                <i className="glyphicon glyphicon-search"></i>
                <i className="glyphicon glyphicon-heart-empty"></i>
                <i className="glyphicon glyphicon-qrcode"></i>
            </div>
        )
    }

    changeColor(scrollTop){
        if(scrollTop>150){
            $('.hometop').addClass('bc')
        }else{
            $('.hometop').removeClass('bc')
        }
    }
}