import React from 'react';
import { connect } from 'react-redux';
import './wrapper.less';

export default function Wrapper(props) {
  let data=[{
    "id":1,
    "list":"双11专区"
  },{
    "id":14,
    "list":"暖冬好物"
  },{
    "id":23,
    "list":"爆品专区"
  },
  {
    "id":33,
    "list":"新品专区"
  },{
    "id":42,
    "list":"居家生活"
  },{
    "id":49,
    "list":"服饰鞋包"
  },{
    "id":59,
    "list":"美食酒水"
  },{
    "id":68,
    "list":"个护清洁"
  },{
    "id":77,
    "list":"母婴亲子"
  },{
    "id":86,
    "list":"运动旅行"
  },{
    "id":94,
    "list":"数码家电"
  },{
    "id":101,
    "list":"全球特色"
  }]
  return <div className="wrapper">
   <div className="leftNav">
    <ul className="desc">
      {data.map((item,index)=>{
      return  <li className={`navItem ${props.id == item.id ? 'navItemActive' :''}`} onClick={()=>{props.saveId(item.id)}}>
        {props.id == item.id ? <span></span> : ''}
        {item.list}
        </li>
      })}
     
    </ul>
  </div>
  </div>

}



