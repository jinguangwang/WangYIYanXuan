import React from 'react';
import { connect } from 'react-redux';
import './classify.less';
import Search from './Search';
import Wrapper from './Wrapper';
import Right from './right';

class classify extends React.Component {
	render() {
		return <div className="container">
			<Search/>
			<div className="wrapper">
				<Wrapper/>
					<Right/>
			</div>
		</div>;
	}
	
}

export default classify;