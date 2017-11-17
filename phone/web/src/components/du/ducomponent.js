import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './du.scss';

class DuComponent extends React.Component{
    componentDidMount(){
    }
    render(){
        return (
             <div className="xc_container">
                <header className="Oheader">
                    <Link to="my">
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>毒币规则</p></div>
                </header>
                <div className="dbody">
                    <div className="ddiv-1">
                            <h2><span>Q:</span>如何获得货币？</h2>
                            <p>在毒物商店进行购物，确认收货后，进行晒物发帖。晒物贴被平台审核通过后，可根据每笔订单的总额，获取相应数量的毒币。</p>
                            <h4>获取规则如下：</h4>
                           <ul>
                                <li>金额{this.props.hao1}50元，得100毒币</li>
                                <li>50元{this.props.hao2}金额{this.props.hao1}100元,得200毒币；</li>
                                <li>100元{this.props.hao2}金额{this.props.hao1}150元，得300元毒币；</li>
                                <li>......</li>
                                <li>以此类推。</li>
                            </ul>
                            <p className="dp-1">
                                (注：每笔订单可进行多次晒物，并多次被平台审核通过，但仅第一次被平台审核通过的晒物贴，可获毒币。若发布的晒物贴均未被平台审核通过，则无法获得毒币。)
                            </p>
                            <h2><span>Q:</span>如何使用毒币？</h2>
                            <ul>
                                <li>1、每100毒币低值1元</li>
                                <li>2、毒币低现金额不能超过每笔订单总金额的30%；</li>
                                <li>3、购买的每笔订单金额>=100元，才能使用毒币进行低值；</li>
                                <li>4、参加官方试毒活动，每次均消耗一定的数量的毒币免费获得试毒产品。</li>
                                <li></li>
                            </ul>
                    </div>
                    <div className="ddiv-2">
                        <h2><p>毒币明细</p></h2>
                        <h3><p>暂无详细信息</p></h3>
                    </div>                   
                </div>               
            </div>           
        )
    }
}
const mapStateToProps = function(state){
    return {
       hao1:'<=',
       hao2:'<'

    }
}
export default connect(mapStateToProps)(DuComponent)