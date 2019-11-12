import React, { Component } from 'react';
import { connect } from 'react-redux';


import './recommend.less'

class Recommend extends Component {
    render() { 
        return ( 
            <div className='select-bar'>
            <ul className='g-grow'>
                <li>
                    <a href="javascript:;">
                        <i className='yi'></i>
                        <span>网易自营品牌</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i className='huo'></i>
                        <span>30天无忧退货</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i className='kuan'></i>
                        <span>48小时快速退款</span>
                    </a>
                </li>
            </ul>
        </div>
         );
    }
}
 
export default Recommend;