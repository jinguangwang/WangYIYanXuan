import React, { Component } from 'react';
import ReactDOM from 'react-dom'


import './newgood.less'

class NewGood extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="item-show">
                <div className="show-sort">
                    <div className="sort">
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_3.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_4.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_5.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_6.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_7.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_6.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_7.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_8.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_9.png')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        <a className="" href="javascript:;">
                            <div className="sort-img">
                                <img src={require('../../assets/images/sort-img_10.gif')} alt=""/>
                            </div>
                            <div className="sort-font">新品首发</div>
                        </a>
                        
                    </div>
                </div>
            
                <div className='show-newuser'>
                <div className='show-newuser-title'>
                    <span className='txt'>新人专享礼</span>
                </div>
                <div className='content'>
                    <a className='left' href="javascript:;">
                        <div className='left-title'>新人专享礼包</div>
                        <div className='left-img'>
                            <div className='left-img-static'>
                            <img src={require("../../assets/images/QQ.png")} alt=""/>
                            </div>
                            <div className='left-img-animate'></div>
                        </div>
                    </a>
                    <div className='right'>
                        <div className='module1'>
                            <a className='module-a' href="javascript:;">
                                <div className='picWrap'>
                                    <div className='pic'>
                                    <img src={require("../../assets/images/QQ.png")} alt=""/>
                                    </div>
                                    <div className='discount'>
                                        <div className='line1'>¥52</div>
                                        <div className='line2'>¥69</div>
                                    </div>
                                </div>
                                <div className='cnt'>
                                    <div className='title'>福利社</div>
                                    <div className='subTitle'>今日特价</div>
                                </div>
                            </a>
                        </div>
                        <div className='module2'>
                            <a calss='module-a' href="javascript:;">
                                <div className='picWrap'>
                                    <div className='pic'>
                <img src={require("../../assets/images/QQ.png")} alt=""/>
                                    </div>
                                    <div className='discount'>
                                        <div class='line1'>¥1</div>
                                        <div class='line2'>¥9.9</div>
                                    </div>
                                </div>
                                <div className='cnt'>
                                    <div className='title'>新人拼团</div>
                                    <div className='subTitle'></div>
                                    <div className='tag'>1元起包邮</div>
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default NewGood;