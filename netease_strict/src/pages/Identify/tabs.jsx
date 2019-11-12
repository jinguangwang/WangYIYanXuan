import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;
export default class Tables extends React.Component {
  render() {
    return <Tabs defaultActiveKey="1" >
    <TabPane tab="推荐" key="1">
  </TabPane>
    <TabPane tab="好物大赏" key="2">
  </TabPane>
    <TabPane tab="好货内部价" key="3">
  </TabPane>
  <TabPane tab="选购指南" key="4">
  </TabPane>
  <TabPane tab="特色系列" key="5">
  </TabPane>
  </Tabs>
  }
}