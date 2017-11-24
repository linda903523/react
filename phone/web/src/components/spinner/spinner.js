import React from 'react';
import './spinner.scss';

export default class SpinnerComponent extends React.Component{
    render(){
        if(this.props.show&&this.props.loadmore){
            return (
                <div>
                    <div className="dk-spinner-mask"></div>
                    <div className="dk-spinner dk-spinner-three-bounce">
                        加载中...
                    </div>        
                </div>
            )
        } 
        else if(this.props.show && this.props.load){
            return (
                <div>s
                    <div className="ym-spinner">
                    <div className="ym-loading"><div><i className="iconfont icon-sanjiaoxing"></i></div></div>
                        <p>努力加载中</p>
                    </div>        
                </div>
            )
        }
        else {
            return null;
        }
    }
}