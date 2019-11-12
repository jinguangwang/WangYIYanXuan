import React,{refs} from 'react';
import { connect } from 'react-redux';
import './personal.less';
import Banner from './banner/banner'
import PropTypes from 'prop-types'
import {NavLink,withRouter} from 'react-router-dom'
// import { Switch } from 'antd';

let arr=[
	{id:0,pic:'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'},
	{id:1,pic:'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png'},
	{id:2,pic:'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png'}
]


class personal extends React.Component {
	xR=()=>{
		window.location.href='http://localhost:3000/#/'
	}

	render() {
		
		
		return <>
		<div className='box' >
				<i className='backSY' onClick={this.xR}></i>	
			<div className='boxTop' >
				<img src={require('../../assets/images/personal_img.png')} alt="" />
				</div>
			<div className='wrapper' ref={x=>{this.wrapper=x}}>
				<Banner arr={arr}/>
				
				</div>
			<div className='boxButton'>
				< NavLink className='one' to="/phoneDengLu"><i><img src={require('../../assets/images/phone.png')} alt=""/></i > 手机号登陆</NavLink>
				<NavLink className='two' to='yxDengLu'><i><img src={require('../../assets/images/youXiang.png')} alt=""/></i> 邮箱账号登陆</NavLink>
				<ul className='bottom'>
					<li>
						<i><img src={require('../../assets/images/weixin.png')} alt=""/></i><span>微信</span>
					</li>
					<li>
						<i><img src={require('../../assets/images/QQ.png')} alt=""/></i><span>QQ</span>
					</li>
					<li>
						<i><img src={require('../../assets/images/weibo.png')} alt=""/></i><span>微博</span>
					</li>
					<li>
						<i><img src={require('../../assets/images/weibo.png')} alt=""/></i><span>企业邮</span>
					</li>
				</ul>
			</div>
		</div>;
	
	</>

	}
}

export default withRouter(personal);