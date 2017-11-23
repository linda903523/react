import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as ListAction from './ListAction.js';

class ListComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
    }
    componentDidUpdate(){
        var ul = document.getElementsByClassName('section1')[0].firstChild.children[1];
        var lis = ul.children;
        ul.style.width = lis.length * 80 + 'px';
    }
    render(){
        return (
            <div>
                <img src="./src/img/banner.png" />
                <section className="section1">
                    <aside>
                        <h2>毒家新品</h2>
                        <ul>
                            {
                                (this.props.dataset || []).map(function(obj,idx){
                                    return (
                                        <li key={'rec'+idx}>
                                            <Link to={'listType/:'+obj.type}><img src={obj.img} /></Link>
                                            <strong>{obj.price}元</strong>
                                            <p>{obj.name}</p>
                                        </li>                                        
                                    )
                                })
                            }
                        </ul>
                    </aside>
                    <div className="fl_img">
                        <img src="./src/img/f1.png" />
                        <img src="./src/img/f2.png" />
                        <img src="./src/img/f3.png" />
                        <div className="fl_bot">
                            <img src="./src/img/f4.png" />
                            <img src="./src/img/f5.png" />
                        </div>
                    </div>
                </section>
                <section className="section2">
                    <div>
                        <h2>毒友推荐</h2>
                        <p>大家都在买</p>
                        <Link to="listType/:3">
                            <ul className="part1">
                                <li><img src="./src/img/g1.png" /></li>
                                <li><img src="./src/img/g2.png" /></li>
                                <li><img src="./src/img/g3.png" /></li>
                            </ul>
                        </Link>
                    </div>
                    <div>
                        <h2>毒家</h2>
                        <p>只有这里</p>
                        <Link to="listType/:5">
                            <ul>
                                <li><img src="./src/img/y10.png" /></li>
                            </ul>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}

var mapStateToProps = function(state){
    return {
        dataset:state.list.dataset || []
    }
}

export default connect(mapStateToProps,ListAction)(ListComponent)