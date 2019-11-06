import React from 'react';
// import { connect } from 'react-redux';
import './search.less';

 class Search extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render() { 
        return (
           
        <div className="search">
        <i className="iconfont icon-icon-test"></i>
            <span>搜索商品, 共24048款好物</span>
        </div>
       
         );
    }
}
 
export default Search;
