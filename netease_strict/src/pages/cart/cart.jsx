import React from 'react';
import { connect } from 'react-redux';
import './cart.less'

class cart extends React.Component {
	render() {
		return <div>
			<div className="cart">
				<span className="shop">购物车</span>
				<span className="cartText">领劵</span>
			</div>
			<div className="cartDesc">
				<ul className="desc">
					<li>
						<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="" />
						<span>30天无忧退货</span>
					</li>
					<li>
						<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="" />
						<span>48小时快速退款</span>
					</li>
					<li>
						<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="" />
						<span>满88元免邮费</span>
					</li>
				</ul>
			</div>
			<div className="cartId">
				<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt=""/>
				<div className="cartMessage">去添加点什么吧</div>
				<button onClick={()=>{
					window.location.href = 'http://localhost:3000/#/personal'
				}}>登录</button>
			</div>

		</div>;
	}
}

export default cart;