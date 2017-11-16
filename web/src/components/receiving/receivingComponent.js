import React from 'react';
import {connect} from 'react-redux';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
class MyComponent extends React.Component{
    componentDidMount(){
       
    }
    render(){
        return (
            <div>
                <h1>待收货</h1>
            </div>
        )
    }
}
const mapStateToProps = function(state){
   // console.log(state.student.bb)
    return {
        
    }

}
export default connect(mapStateToProps)(MyComponent)
