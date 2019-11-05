import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom'
import { Icon } from 'antd';
import './Tab.less'


function Tab(props){
    let pathName = props.location.pathName,
        flag = /(DETAIL|PAY|CART|SEARCH|LOGIN)/i.test(pathName)
    return (
        <>
        {flag ?null:<div className='tab'>
        <NavLink className="link" to="/">
            <i className="icon"></i>
            <span>首页</span>
        </NavLink>
        <NavLink className="link" to="/classify">
            <i className="icon"></i>
            <span>分类</span>
        </NavLink>
        <NavLink className="link" to="/taste">
            <i className="icon"></i>
            <span>识物</span>
        </NavLink>
        <NavLink className="link" to="/cart">
            <i className="icon"></i>
            <span>购物车</span>
        </NavLink>
        <NavLink className="link" to="/personal">
            <i className="icon"></i>
            <span>个人</span>
        </NavLink>
    </div>}
        </>
    )
}

export default withRouter(Tab);