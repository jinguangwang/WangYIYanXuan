import React from 'react';
import FamilyLift from './familyLife'
import ListItem from './listItem'
import './listArea.less'

export default function ListArea() {
    return <div className="listArea">
        <FamilyLift />
        <div className="listbox clearfix">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        </div>
        
    </div>
}