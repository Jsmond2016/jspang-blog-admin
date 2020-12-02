import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../static/css/Index.css'
import { Route, NavLink, } from "react-router-dom";
import Article from './Article'
import ArticleList from './ArticleList'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Index(props) {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const handleClickArticle = e => {
    if (e.key === 'addArticle') {
      console.log('props: ', props);
      props.history.push('/index/add')
    } else {
      props.history.push('/index/list')
    }

  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            工作台
            </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            添加文章
            </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="文章管理" onClick={(e) => handleClickArticle(e)}>
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="留言管理">
            <Menu.Item key="6">
              <NavLink to="/index/list" >列表页</NavLink>
            </Menu.Item>
            <Menu.Item key="8">留言管理 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div>
                <Route exact path="/index/" component={Article} />
                <Route exact path="/index/list/" component={ArticleList} />
                <Route exact path="/index/add/" component={Article} />
                <Route exact path="/index/add/:id" component={Article} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>博客工作台.</Footer>
      </Layout>
    </Layout>    
  );
}

export default Index