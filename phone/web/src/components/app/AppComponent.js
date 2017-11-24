import  React,{Component} from 'react';
import { connect,dispatch } from 'react-redux' // 引入connect

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from "./Container.css";

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="transitionWrapper"
                component="div"
                className={style.transitionWrapper}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <div key={this.props.location.pathname}
                    style={{position:"absolute", width: "100%",height:"100%",overflow:"auto"}}>
                        {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}
// 利用connect将组件与Redux绑定起来
export default connect((AppMd) => ({AppMd}))(App)