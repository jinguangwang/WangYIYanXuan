import React from 'react';
import './listItem.less'

export default function ListItem() {
    return  <div className="listItem">
        <div className="listItem-img">
            <img src='https://yanxuan-item.nosdn.127.net/65ea6f88c2323afd86107529fe2e0b2f.png?imageView&quality=65&thumbnail=330x330' />
            <div className="listItem-red">
                <div className="list-img">
                    <img src="https://yanxuan.nosdn.127.net/c168892ef76f29971032dc1c12613720.png"/>
                    <span>好货内部价</span>
                    <p>￥399</p>
                    {/* <div className="time">仅剩四天</div> */}
                </div>
                {/* <div className="list-pic">
                    <img src="https://yanxuan.nosdn.127.net/d71e2460d062eaa21d5bdf97eba9da89.png" />
                </div> */}
            </div>
        </div>
        <div className="listItem-desc">60s臻密绒磨毛四件套</div>
        <div className="listItem-pic">￥399 <span>￥499</span></div>
    </div>
}