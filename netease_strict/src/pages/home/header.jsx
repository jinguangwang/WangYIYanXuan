import React, { Component } from 'react';
import { connect } from 'react-redux';


// 引入 css 样式
import './header.less'

class Header extends Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render() { 
        return ( 
            <div className="main-header">
        <div className="logo-box">
            <img src='' alt="" />
        </div>
        <div className="search-box" onClick={ev=>{
            this.props.history.push('/search');
        }}>
            <img src="https://static.home.mi.com/youpin/static/m/res/images/home_search.png" alt="" />
            <span>年货嗨抢，最高直降1000</span>
        </div>
        <div className="msg-box" style={{visibility:'hidden'}}>
            <div className="msg"></div>
        </div>
    </div>
         );
    }
}
 
export default Header;