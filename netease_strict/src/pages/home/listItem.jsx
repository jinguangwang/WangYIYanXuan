import React from 'react';
import './listItem.less'

export default function ListItem() {
    return <div className="listItem">
        <div className="listItem-img">
            <img src='https://yanxuan-item.nosdn.127.net/65ea6f88c2323afd86107529fe2e0b2f.png?imageView&quality=65&thumbnail=330x330' />
        </div>
        <div className="listItem-desc">60s臻密绒磨毛四件套</div>
        <div className="listItem-pic">￥399 <span>￥499</span></div>
    </div>
}