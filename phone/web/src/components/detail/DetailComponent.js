import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as DetailAction from './DetailAction.js';
import  './detail.scss';
import Loading from '../../components/spinner/spinner.js';

class DetailComponent extends React.Component{
    componentDidMount(){
        this.props.Init(this.props.params);
        this.props.liu(this.props.params);
    }
    back(){
        this.props.router.goBack();
    }
    login(){
        hashHistory.push({
            pathname:'login'
        })
    }
    render(){
        return (
            <div className="fl_detail">
                <main>
                    <Loading show={this.props.loading} load={true}></Loading>
                    <header>
                        <div className="icon">
                            <Link onClick={this.back.bind(this)}><i className="glyphicon glyphicon-menu-left"></i></Link>
                            <i className="glyphicon glyphicon-shopping-cart"></i>
                            <i className="glyphicon glyphicon-option-horizontal"></i>
                        </div>
                        <ul>
                            {
                                (this.props.dataset || []).map((obj,idx)=>{
                                    return (
                                        <li key={'del1'+idx}>
                                            <img src={obj.img} />
                                            <p>{obj.name}</p>
                                            <strong>{obj.price}元</strong>
                                        </li>                                        
                                    )
                                })
                            }
                        </ul>
                        <div className="logo">
                            <img src="./src/img/f6.png" />
                            <div>
                                <h2>毒物商店<span><i></i>官方</span></h2>
                                <p><span>正品保证</span><span>顺丰邮寄</span></p>
                            </div>
                            <Link to="shopping">进入商店</Link>
                        </div>
                    </header>
                    <div className="fl_details">

                        <div className="link" onClick={this.props.aChange.bind(this)}>
                            <a href="#detail">商品亮点</a>
                            <a href="#pramas">商品参数</a>
                            <a href="#saled">商品售后</a>
                        </div>
                        <div id="detail">
                            <h2><span>亮点</span></h2>
                            <div>
                                <h3>【品牌故事】</h3>
                                <p>设计师产品品牌；设计师袁泽铭（David）为伦敦奥运会徽章类特许商品设计总监。</p>
                                <img src="./src/img/d1.png" />
                                <img src="./src/img/d2.png" />
                            </div>
                            <div>
                                <h3>【创意】</h3>
                                <p>表盘用铜锈质感与碳纤维两种材质模拟动物的瞳孔；把冠放置一点与两点位置之间，避免了人名抬手腕时，传统把冠对手背造成的不适感。</p>
                                <img src="./src/img/d3.png" />
                            </div>
                            <div>
                                <h3>【玻璃】</h3>
                                <p>采用蓝宝石玻璃材质，球面造型；蓝宝石玻璃的化学成分与蓝宝石一致，硬度为9，仅次于钻石，不易产生划痕。</p>
                                <img src="./src/img/d4.png" />
                                <img src="./src/img/d5.png" />
                            </div>
                            <div>
                                <h3>【表壳】</h3>
                                <p>采用进口芬兰316L不锈钢冲裁而成；316L不锈钢耐腐蚀性高，稳定性强，不易造成皮肤敏感，常被用来制造医用手术器具。</p>
                                <img src="./src/img/d6.png" />
                                <p>腕表背面底壳与表带的结合处设有银色微型插销，可以帮助佩带着不借助任何工具，轻松的更换本系列标配的金属带或皮带。</p>
                                <img src="./src/img/d7.png" />
                            </div>
                            <div>
                                <h3>【机芯】</h3>
                                <p>日本原装MIYOTA金色自动陀机芯。</p>
                            </div>
                            <div>
                                <h3>【表带】</h3>
                                <ul>
                                    <li>翻看腕表背面底壳与表带的结合处找到银色微型插销</li>
                                    <li>拨动插销将表带与底壳脱离</li>
                                    <li>将产品标配的替换表带放至原表带的位置，对好插销口</li>
                                    <li>拨动银色微型插销安装表单</li>
                                    <li>稍用力拉扯表带，检查表带的安装是否准确并且稳固</li>
                                </ul>
                                <img src="./src/img/d8.png" />
                            </div>
                            <div>
                                <h3>【表罐】</h3>
                                <ul>
                                    <li>一手握住表罐</li>
                                    <li>另一手平伸，手掌用力按住罐盖上方，切不可玩去手指抓住罐身</li>
                                    <li>按下的手掌逆时针带动罐盖旋转</li>
                                    <li>空表罐可用于桌面置物，花盆，或其他储物容器，不可子直接存放食物</li>
                                    <li>罐盖可与罐底的齿牙完美契合</li>
                                    <li>罐身外侧与THEGUY LOGO成对称面的位置作为赠礼签名位，可用金色或银色漆笔进行书写</li>
                                </ul>
                                <img src="./src/img/d9.png" />
                                <p>毒物菌提示：目前没有搭配皮质表带，请谅解哦。另因腕表属于贵重商品，恳请慎重下单用心爱护哦。</p>
                            </div>
                        </div>
                        <div id="pramas">
                            <h2><span>参数</span></h2>
                            <ul className="fl_pramas">
                                <li><span>品牌</span><span>THEGUY</span></li>
                                <li><span>包装</span><span>官方标配</span></li>
                                <li><span>名称</span><span>瞳孔机械表</span></li>
                                <li><span>使用人群</span><span>通用</span></li>
                            </ul>
                        </div>
                        <div id="saled">
                            <h2><span>配送及售后</span></h2>
                            <ul>
                                <li><span>配送方式：</span><span>可选择顺丰快递、普通快递（申通 圆通 中通 百世汇通 韵达等）；满399元顺丰包邮。</span></li>
                                <li><span>发货时间：</span><span>周一至周六下单后24小时内发货，周日不发货。</span></li>
                                <li><span>商家信息：</span><span>本产品由毒物商店官方负责发货售后，如遇任何问题随时联系毒物，我们为您解决。</span></li>
                                <li><span>退换政策：</span><span>7天无理由退换货。</span></li>
                            </ul>
                        </div>
                    </div>
                </main>
                <footer onClick={this.props.pop.bind(this)}>
                    <Link to="buycar"><i className="glyphicon glyphicon-shopping-cart"></i></Link>
                    <span className="fl_car">加入购物车</span>
                    <span className="fl_buy">立即购买</span>
                </footer>
                <div id="pop">
                    <div className="cover"></div>
                    <div className="fl_pop">
                        <ul>
                            {
                                (this.props.dataset || []).map((obj,idx)=>{
                                    return (
                                        <li key={'del2'+idx}>
                                            <img src={obj.img} className="_imgsrc"/>
                                            <div>
                                                <p className="_goodsname">{obj.name}</p>
                                                <strong className="_goodsprice">{obj.price}</strong>元
                                            </div>
                                            <p onClick={this.props.choseColor.bind(this)} className="goc">颜色<em>{obj.color.substr(0,3)}</em><em>{obj.color.substr(4)}</em>
                                            </p>
                                            <p onClick={this.props.choseSize.bind(this)} className="goz">尺寸<em>{obj.size.substr(0,2)}</em><em>{obj.size.substr(3,2)}</em><em>{obj.size.substr(6)}</em></p>
                                            <p>数量<span>
                                                <i className="glyphicon glyphicon-minus" onClick={this.props.jian.bind(this,idx)}></i>
                                                <span className="number">1</span>
                                                <i className="glyphicon glyphicon-plus" onClick={this.props.jia.bind(this,idx)}></i>
                                            </span></p>
                                            <p className="addType" onClick={this.props.addToCar.bind(this,idx,obj.id)}></p>
                                        </li>                                        
                                    )
                                })
                            }
                        </ul>
                        <i className="glyphicon glyphicon-remove-circle" onClick={this.props.popNone.bind(this)}></i>
                    </div>
                </div>
                <div className="firstlogin">
                    <div className="cover1"></div>
                    <div className="lf">
                        <div className="lf_top">
                            <p className="lf_title">请先登录</p>
                            <ul>
                                <li onClick={this.login}>使用官方帐号登录</li>
                                <li>使用手机号登录</li>
                            </ul>
                        </div>
                        <div className="cancel" onClick={this.props.cancel}><span>取消</span></div>
                    </div>
                </div>
                <p className="fl_successAdd">成功添加到购物车</p>
            </div>
        )
    }
}

var mapStateToProps = function(state){
    return {
        dataset:state.detail.dataset || [],
        loading: state.detail.loading || false
    }
}

export default connect(mapStateToProps,DetailAction)(DetailComponent)