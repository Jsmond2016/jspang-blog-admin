import React, { useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd'
import menuList from "../config/menuConfig"

const { SubMenu } = Menu


const LeftNav = () => {


  let menuConfig = ''
  let openKey = ''

 const hasAuth = (item) => {
    const {key, isPublic} = item

    /*
    1. 如果当前用户是admin
    2. 如果当前item是公开的
    3. 当前用户有此item的权限: key有没有menus中
     */
    if(username==='admin' || isPublic || menus.indexOf(key)!==-1) {
      return true
    } else if(item.children){ // 4. 如果当前用户有此item的某个子item的权限
      return !!item.children.find(child =>  menus.indexOf(child.key)!==-1)
    }

    return false
  }

  const getMenuList = (menuList) => {
    const path = props.location.pathname
    return menuList.reduce((pre, item) => {
      if (hasAuth(item)) {
        if(!item.children) {
          if (item.key === path || path.indexOf(item.key) === 0) {
            props.setHeadTitle(item.title)// 刷新页面初次渲染的时候更新为对应目录的标题
          }
          pre.push((
            <Menu.Item key={item.key}>
              <Link to={item.key} onClick={() => props.setHeadTitle(item.title)}>
                <Icon type={item.icon}></Icon>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          ))
        } else {
          const path = props.location.pathname
          // 判断 children item 中， item 路径是否等于当前路径
          const cItemIndex = item.children.findIndex(childrenItem => path.indexOf(childrenItem.key) === 0)
          if(cItemIndex !== -1) {
            openKey = item.key
          }
          pre.push((
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon}></Icon>
                  <span>{item.title}</span>
                </span>
              }
            >
              {getMenuList(item.children)}
            </SubMenu>
          ))
        }
      }
      return pre
    }, [])
  }


  useEffect(() => {
    menuConfig = getMenuList(menuList)
  }, [])


  return (
    <div className="left-nav">
      <Link to='/'>
        <header className="left-nav-header">
          <img src={logo} alt="logo"/>
          <h1>我的后台</h1>
        </header>
      </Link>
      <Menu theme="dark" selectedKeys={[path]} defaultOpenKeys={[openKey]} mode="inline">
        {menuConfig}
      </Menu>
    </div>
  )

}
