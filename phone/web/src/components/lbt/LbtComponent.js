import React from 'react';
import './lbt.scss';
import touch from '../../utils/touch.js';
import $ from 'jquery';

var startX, startY; 
const LunBo=React.createClass({
    propsTypes:{
        interval:React.PropTypes.number,
        autoPlay:React.PropTypes.bool,
        activeIndex:React.PropTypes.bool,
        defaultActiveIndex:React.PropTypes.bool,
        direction:React.PropTypes.oneOf['right','left'],
        number:React.PropTypes.number,
        boxStyle:React.PropTypes.string,
    },
    getDefaultProps(){
        return{
            interval:3000,
            autoPlay:true,
            defaultActiveIndex:0,
            direction:'right',
            number:5
        }
    },
    getInitialState(){
        return{
            activeIndex:this.props.defaultActiveIndex?this.props.defaultActiveIndex:0,
            direction:this.props.direction?this.props.direction:'right'
        }
    },
    componentDidMount(){
        this.autoPlay();
    },
    componentWillReceiveProps (){

    },
    componentWillUnmount(){
        clearInterval(this.timeOuter);
    },
    autoPlay(){
        if(this.props.autoPlay){
            if(this.props.direction==="right"){
                this.timeOuter=setInterval(this.playRight,this.props.interval);
            }else if(this.props.direction==="left"){
                this.timeOuter=setInterval(this.playLeft,this.props.interval);
            }
        }
    },
    playRight(indexIn){
        let index=indexIn?indexIn:this.state.activeIndex+1;
        if(index>this.props.number-1){
            index=0;
        }
        this.setState({
            activeIndex:index
        })
    },
    playLeft(indexIn){
        let index=indexIn?indexIn:this.state.activeIndex-1;
        if(index<0){
            index=this.props.number-1;
        }
        this.setState({
            activeIndex:index
        })
    },
    position(){
        switch (this.state.activeIndex){
            case 0:return "onePosition" ;
            case 1:return "twoPosition" ;
            case 2:return "therePosition";
            case 3:return "fourPosition";
            case 4:return "fivePosition";
        }
    },
    left(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playLeft(oldIndex+1);
        this.autoPlay();
    },
    right(){
        clearInterval(this.timeOuter);
        let oldIndex=this.props.activeIndex;
        this.playRight(oldIndex-1);
        this.autoPlay();
    },
    aa(ev){
        startX = ev.touches[0].pageX;  
        startY = ev.touches[0].pageY; 
    },
    bb(ev){
        var endX = ev.changedTouches[0].pageX;  
        var endY = ev.changedTouches[0].pageY; 
        var direction = touch.GetSlideDirection(startX, startY, endX, endY); 
        switch(direction) {  
            case 0:   
                break;  
            case 1:  
                break;  
            case 2:  
                break;  
            case 3:  
                this.right();
                break;  
            case 4:  
                this.left();  
                break;   
        }          
    },
    render(){
        let{
            interval,
            autoPlay,
            activeIndex,
            defaultActiveIndex,
            direction,
            number,
            boxStyle
          }=this.props;
        return (
            <div  className="content" onTouchStart={this.aa} onTouchEnd={this.bb}>
                <ul className={this.position()}>
                    <li className="boxStyleLi">
                        <img src="./src/img/banner.png" />
                    </li>  
                    <li className="boxStyleLi">
                        <img src="./src/img/f1.png" />
                    </li> 
                    <li className="boxStyleLi">
                        <img src="./src/img/f2.png" />
                    </li> 
                    <li className="boxStyleLi">
                        <img src="./src/img/f3.png" />
                    </li>
                    <li className="boxStyleLi">
                        <img src="./src/img/banner.png" />
                    </li> 
                </ul>
            </div>
        ) 
    }
});

export default LunBo;