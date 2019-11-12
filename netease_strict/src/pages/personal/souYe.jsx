import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import './souYe.less'
class ShouYe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='box'>
            <div className='touX'>
                <p className='tLeftImg'>
                    <img src='https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png' alt="" />
                </p>
                <div className='number'>
                    <p>账户：17100075478</p>
                    <p>普通用户 </p>
                </div>

            </div>
            <div className='property'>
                <p className='pTop'>我的资产</p>
                <ul classNam='propertyList'>
                    <li>
                        <span>
                            ￥0
                       <span></span>
                        </span>
                        <p>回馈金</p>
                    </li>
                    <li>
                        <span>
                            0
                       </span>
                        <p>红包</p>
                    </li>
                    <li>
                        <span>
                            0
                       </span>
                        <p>优惠券</p>
                    </li>
                    <li>
                        <span>
                            0
                       </span>
                        <p>津贴</p>
                    </li>
                    <li>
                        <span>
                        ￥0
                       </span>
                        <p>礼品卡</p>
                    </li>
                </ul>
            </div>
            <ul className='qita'>
            <li className='wuTopBorder'>
                <img src={require('../../assets/images/dingdan.png')} alt=""/>
                <p>我的订单</p>
            </li>
            <li className='wuTopBorder'>
                <img src={require('../../assets/images/shouYe/zhouLiu.png')} alt=""/>
                <p>周六一起拼</p>
            </li>
            <li className='wuTopBorder'>
                <img src={require('../../assets/images/shouYe/shouHou.png')} alt=""/>
                <p>售后服务</p>
            </li>
            <li>
                <img src={require('../../assets/images/shouYe/yaoQing.png')} alt=""/>
                <p>邀请返利</p>
            </li>
            <li>
                <img src={require('../../assets/images/shouYe/youXianGou.png')} alt=""/>
                <p>优先购</p>
            </li>
            <li>
                <img src={require('../../assets/images/shouYe/jiFen.png')} alt=""/>
                <p>积分中心</p>
            </li>
            <li  className='wuBottomBorder'>
                <img src={require('../../assets/images/shouYe/vip.png')} alt=""/>
                <p>会员俱乐部</p>
            </li>
            <li className='wuBottomBorder'>
                <img src={require('../../assets/images/shouYe/diZhi.png')} alt=""/>
                <p>地址管理</p>
            </li>
            <li className='wuBottomBorder'>
                <img src={require('../../assets/images/shouYe/anQuan.png')} alt=""/>
                <p>帐号安全</p>
            </li>
            <li className='wuBottomBorder'>
                <img src={require('../../assets/images/shouYe/help.png')} alt=""/>
                <p>帮助与客服</p>
            </li>
            <li className='wuBottomBorder'>
                <img src={require('../../assets/images/shouYe/yiJian.png')} alt=""/>
                <p>意见反馈</p>
            </li>

            </ul>
         <Link to='/personal'>  <div className='off'>
                退出登录
            </div>
            </Link> 
        </div>

     
    }
}

export default withRouter(ShouYe) ;