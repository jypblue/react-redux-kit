import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  constructor(props,context){
	super(props,context);
  }

  render() {
    return (
    	<div className="sidebar">
         <Menu theme={'dark'}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          mode="inline"
          >
          <Menu.Item key="1"><Link to="/home"><span><Icon type="home" /><span>首页</span></span></Link></Menu.Item>
          <Menu.Item key="2"><Link to="/todo"><span><Icon type="book" /><span>Todo</span></span></Link></Menu.Item>
          <Menu.Item key="3"><Link to="/counter"><span><Icon type="edit" /><span>Counter</span></span></Link></Menu.Item>
          <Menu.Item key="4"><Link to="/realworld"><span><Icon type="github" /></span><span>RealWorld</span></Link></Menu.Item>
          <Menu.Item key="5"><Link to="/about"><span><Icon type="question-circle" /><span>About</span></span></Link></Menu.Item>
          <SubMenu key="sub2" title={<span><Icon type="team" /><span>酒店</span></span>}>
            <Menu.Item key="6"><Link to="/hotel"><span><i className="iconfont icon-hotel"style={{marginRight: 8}}></i></span><span>Hotel</span></Link></Menu.Item>
            <SubMenu key="sub3" title="wtodo">
              <Menu.Item key="7"><Link to="/wtodo"><span><Icon type="book"/></span><span>Wtodo</span></Link></Menu.Item>
              <Menu.Item key="8">选项8</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
		</div>
    );
  }
}

export default Sidebar;
