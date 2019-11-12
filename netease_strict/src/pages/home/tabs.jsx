import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;
export default class Tables extends React.Component {
  render() {
    return  (<Tabs defaultActiveKey="1"  >
      <TabPane tab="推荐" key="1">

    </TabPane>
      <TabPane tab="居家生活" key="2">
   
    </TabPane>
      <TabPane tab="服饰鞋包" key="3">

    </TabPane>
    <TabPane tab="美食酒水" key="4">

    </TabPane>
    <TabPane tab="个护清洁" key="5">

    </TabPane>
    <TabPane tab="母婴亲子" key="6">

    </TabPane>
    </Tabs> )
   
  }
}