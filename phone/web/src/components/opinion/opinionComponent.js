import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class OpinionComponent extends React.Component{
    render(){
        return (
             <div className="xc_container">
                    <header className="Opheader">
                        <Link to="my">
                        <i className="glyphicon glyphicon-menu-left">
                        </i></Link>
                        <div className="Odiv-1"><p>向CEO提意见</p></div>
                        <p>提交</p>
                    </header>
                <div className="body">
                    <textarea></textarea>
                </div>
            </div>          
        )
    }
}
const mapStateToProps = function(state){
    return {}
}
export default connect(mapStateToProps)(OpinionComponent)