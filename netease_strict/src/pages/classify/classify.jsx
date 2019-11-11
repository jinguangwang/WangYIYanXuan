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
		}
	}

	saveId = (id) => {
		this.setState({
			id
		})
	}


	render() {
		return <div className="container">
			<Search/>
			<div className="wrapper">
				<Wrapper saveId={this.saveId}/>
				<Right id={this.state.id}/>
			</div>
		</div>;
	}
	
}

export default classify;