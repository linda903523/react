import React from 'react';
import './spinner.scss';

export default class SpinnerComponent extends React.Component{
    render(){
        // console.log(this.props.show)
        if(this.props.show){
            return (
                <div>
                    <div className="dk-spinner-mask"></div>
                    <div className="dk-spinner dk-spinner-three-bounce">
                        加载中...
                    </div>        
                </div>
            )
        } else {
            return null;
        }
    }
}