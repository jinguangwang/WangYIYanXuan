import React, { Component } from 'react';
import { connect } from 'react-redux';


import './recommend.less'

class Recommend extends Component {
    render() { 
        return ( 
            <div className="list">
                  <div><span>推荐</span></div>   
                   <div><span>居家生活</span></div>    
                   <div><span>服饰鞋包</span>  </div>  
                   <div><span>美食酒水</span></div>    
                   <div><span>^</span></div>    
               

            </div>
         );
    }
}
 
export default Recommend;