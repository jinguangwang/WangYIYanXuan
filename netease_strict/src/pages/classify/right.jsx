import React from 'react';
import { connect } from 'react-redux';
import './right.less';

export default function right() {
  return  <>
  <div className="rightNav">
       <img src={require('../../assets/images/banner1.png')} alt="" className="rightImg"/>
        <ul className="descInt" >
        <li>
            <div className="descBig">
              <div className="descItem">
                <img src={require('../../assets/images/1.1.png')} alt=""/>
                <span>精选好物15元起</span>
              </div>
            </div>
          </li>
          <li>
            <div className="desc-img">
              <div className="descript">
                <img src={require('../../assets/images/1.2.png')} alt=""/>
                <span>超值好物9.9元起</span>
              </div>
            </div>
          </li>
          <li>
            <div className="desc-net">
              <div className="desc-doc">
                <img src={require('../../assets/images/1.3.png')}/>
                <span>999+好评</span>
              </div>
            </div>
          </li>
          <li>
            <div className="desc-abs">
              <div className="desc-dec">
                <img src={require('../../assets/images/1.4.png')} alt=""/>
                <span>囤货必备5折起</span>
              </div>
            </div>
          </li>
          <li>
            <div className="desc-el">
              <div className="desc-clo">
                <img src={require('../../assets/images/1.5.png')} alt=""/>
                <span>11.11特惠3折起</span>
              </div>
            </div>
          </li>
          <li>
            <div className="desc-bos">
              <div className="desc-nav">
                <img src={require('../../assets/images/1.6.png')} alt=""/>
                <span>每日限时冰点价</span>
              </div>
            </div>
          </li>

          <li>
            <div className="desc-cod">
              <div className="desc-fod">
                <img src={require('../../assets/images/1.8.png')} alt="" />
                <span>11.11预售倒计时</span>
              </div>
            </div>
          </li>
          <li>
            <div className="desc-toy">
              <div className="desc-dor">
                <img src={require('../../assets/images/1.8.png')} alt=""/>
                <span>美食特惠6折起</span>
              </div>
            </div>
          </li>
          <li>
            <div className="desc-rig">
              <div className="desc-err">
                <img src={require('../../assets/images/1.9.png')} alt=""/>
                <span>冬季穿搭59元起</span>
              </div>
            </div>
          </li>
          <li>
            <img src={require('../../assets/images/2.0.png')} alt=""/>
              
          </li>
          <li>
              <img src={require('../../assets/images/2.1.png')} alt=""/>
          </li>
          <li>
              <img src={require('../../assets/images/2.2.png')} alt=""/>
          </li>
        </ul> 
  </div>
  </>

}


