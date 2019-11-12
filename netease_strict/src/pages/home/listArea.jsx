import React from 'react';
import FamilyLift from './familyLife'
import ListItem from './listItem'
import './listArea.less'

export default function ListArea(props) {
    console.log(props.arr)
    return <div className="listArea">
        <FamilyLift />
        <div className="listbox clearfix">
            {props.arr.map((item,index)=>
               <ListItem  key={index}/> 
                )}
        
       
        </div>
        
    </div>
}