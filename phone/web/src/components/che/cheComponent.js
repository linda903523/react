import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import * as cheActive from './cheActive';

class CheComponent extends React.Component{
    componentDidMount(){
        this.props.carlist1();
    }
    render(){
        return (
            <div className="cdiv-5">
                {   
                    this.props.che.length==0 ? <div className="nodu"><p>您还没中毒过任何毒物</p>
                    <img src="./src/img/nocarlist.png" />
                    </div>:
                    <ul className="dugoods">
                        {
                            (this.props.che ? this.props.che : []).map(function(obj,idx){
                                return (
                                    <li key={'carlistMy'+idx}>
                                        <img src={obj.img} />
                                        <div>
                                            <p>{obj.name}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        che:state.che.dataset || []
    }
}
export default connect(mapStateToProps,cheActive)(CheComponent)
