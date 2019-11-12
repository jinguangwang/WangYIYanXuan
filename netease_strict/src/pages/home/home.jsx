import React from 'react';
// import { connect } from 'react-redux';
import Header from './header';
// import Recommend from './recommend';
import Banner from '../../components/Banner';
import ListArea from './listArea';
import Tables from './tabs';

class home extends React.Component {
	render() {
		return (
		<div>
		   <div>
		   <Header></Header>
		   {/* <Recommend></Recommend> */}
		<Tables></Tables>
		   <Banner></Banner>
		   <ListArea></ListArea>
		  </div>
	   </div>
		);
	}
}

export default home;
