import React from 'react';
import {connect} from 'react-redux';

class MoComponent extends React.Component{
    componentDidMount(){
    }
    render(){
        return (
            <div className="moren">
                <h3><p>你还没有相关订单</p></h3>
                <h4 className="h4"> <p>可以去看看有哪些想买的</p></h4>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {}
}
export default connect(mapStateToProps)(MoComponent)
