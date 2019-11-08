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
    <div className="main-header clearfix">
      <div className="logo-box">
        <img src={require('../../assets/images/logo.png') } alt="" />
      </div>
      <div className="search-box" 
         onClick={ev=>{
            this.props.history.push('/search');
        }}>
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="" />
            <span>搜索商品，共有24049款好物</span>
      </div>
      <div className="loginBtn"> 
            登录
      </div>
    </div>
         );
    }
}
 
export default Header;