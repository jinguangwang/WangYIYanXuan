import React from 'react';
import Header from './header';
import Recommend from './recommend';
import Banner from '../../components/Banner';
import ListArea from './listArea'
import NewGood from './newgoods';
import Tables from './tabs';

class home extends React.Component {
    constructor(props){
	  super(props)
	  this.state={
		  data:[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9,0]
	  }
	}

	render() {
		return (
		<div>
		   <div>
		   <Header></Header>

		   {/* <Recommend></Recommend> */}
		<Tables></Tables>
		   <Banner></Banner>
		   <Recommend></Recommend>
		   <NewGood></NewGood>
		   <ListArea arr={this.state.data}></ListArea>
		  </div>
	   </div>
		);
	}
}

export default home;
