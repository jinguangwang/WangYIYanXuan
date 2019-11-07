import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import ListArea from './listArea';

class home extends React.Component {
	render() {
		return <div>
		<Header></Header>
		<ListArea/>
		</div>
		
	}
}

export default home;
