import React from 'react';
// import { connect } from 'react-redux';
import Header from './header';
// import Recommend from './recommend';
import Banner from '../../components/Banner';

class home extends React.Component {
	render() {
		return (
		<div>
		   <div className=''>
		   <Header></Header>
		   {/* <Recommend></Recommend> */}
		   <Banner></Banner>
		   
		  </div>
	   </div>
		);
	}
}

export default home;
