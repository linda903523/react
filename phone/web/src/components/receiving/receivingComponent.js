import React from 'react';
import {connect} from 'react-redux';
import * as receivingActive from './receivingActive.js';

class ReceivingComponent extends React.Component{
    componentDidMount(){
        this.props.fahuo();
    }
    render(){
        return (
             <div className="ediv-1">
                <ul className="eu3">
                     {
                       (this.props.receiving ? this.props.receiving : []).map(function(item,index){
                            return (
                            <li key={'li'+index} className="eli">
                                <img src={item.img}/>
                                <span>{item.name}</span>
                                <p><span>￥{item.price}</span></p>
                                <p><span>x{item.number}</span></p>
                            </li>
                            )
                        })
                    }
                </ul>
                <div className="ediv-2">
                    <ul className="eul">
                        <li className="eli-2">更多</li>
                        <li className="eli-1">查看物流</li>
                        <li className="eli-1" onClick={this.props.pingjia.bind(this,this.props.receiving)}>去评价</li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        receiving: state.receiving.dataset || []
    }

}
export default connect(mapStateToProps,receivingActive)(ReceivingComponent)