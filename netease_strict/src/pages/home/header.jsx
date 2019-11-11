import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink,withRouter} from 'react-router-dom';


// 引入 css 样式
import './header.less'

class Header extends Component {
    constructor(props){
        super(props)
        this.props = props
    }

    tiaoDengLu=()=>{
      console.log(11111);
      window.location.href='http://localhost:3000/#/personal'
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
            <NavLink to='/personal'> 登录 </NavLink>  
      </div>
    </div>
         );
    }
}
 
export default withRouter(Header) ;