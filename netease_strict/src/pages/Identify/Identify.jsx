import React from 'react';
import { connect } from 'react-redux';
import './Identify.less';
import Headerportrait from './Headportrait';
import Nav from './nav';
import Tables from './tabs';


class Identify extends React.Component {
	render() {
		return <>
		<Nav></Nav>
	<Tables></Tables>
	  <nav/>
		<div className="Identify">
		<img src="https://yanxuan.nosdn.127.net/cb5fbb47aedfa26416ad86644fd58668.jpg?imageView&quality=65&thumbnail=690y376" className="Identify-img"/>
		</div>
		<Headerportrait/>
		</>
	}
}

export default Identify;