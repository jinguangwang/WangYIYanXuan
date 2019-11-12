import React from 'react';
import { connect } from 'react-redux';
import './classify.less';
import Search from './Search';
import Wrapper from './Wrapper';
import Right from './right';

class classify extends React.Component {
	constructor(props){
		super(props)
		this.state={
			id:1,
			style1:{color:''}
		}
	}

	saveId = (id) => {
		this.setState({
			id,
			style1:{color:'red'}
		})
	}


	render() {
		return <div className="container">
			<Search/>
			<div className="wrapper">
				<Wrapper saveId={this.saveId} style1={this.state.style1}/>
				<Right id={this.state.id}/>
			</div>
		</div>;
	}
	
}

export default classify;