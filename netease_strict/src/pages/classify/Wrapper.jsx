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
      {/* <li onClick={()=>props.saveId(1)}></li>
      <li onClick={()=>props.saveId(14)}></li>
      <li onClick={()=>props.saveId(23)}></li>
      <li onClick={()=>props.saveId(33)}></li>
      <li onClick={()=>props.saveId(42)}></li>
      <li onClick={()=>props.saveId(49)}></li>
      <li onClick={()=>props.saveId(59)}></li>
      <li onClick={()=>props.saveId(68)}></li>
      <li onClick={()=>props.saveId(77)}></li>
      <li onClick={()=>props.saveId(86)}></li>
      <li onClick={()=>props.saveId(94)}></li>
      <li onClick={()=>props.saveId(101)}></li> */}
      {data.map((item,index)=>{
      return  <li  onClick={()=>{props.saveId(item.id)}}>{item.list}</li>
      })}
     
    </ul>
  </div>
  </div>

}



