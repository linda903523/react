import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as cawaitActive from './cawaitActive.js'

class AwaitComponent extends React.Component{
    componentDidMount(){
       this.props.Init2();
    }
    render(){
        return (
            <div className="ediv-1">
                <ul className="eu3">
                    {
                       (this.props.carlistdataset ? this.props.carlistdataset : []).map(function(item,index){
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
                        <Link to="cawait"><li className="eli-1">去发货</li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        carlistdataset: state.cawait.dataset || [],
    }
}
export default connect(mapStateToProps,cawaitActive)(AwaitComponent)