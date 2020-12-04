/*
 * @Description: 
 * @Date: 2020-12-04 16:12:17
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

export const menuList = [
  {
    title: ' 首页', // 菜单标题名称
    key: '/home', // 对应的 path
    icon: 'home', // 图标名称
    isPublic: true,
  },
  {
    title: ' 商品',
    key: '/products',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: ' 品类管理',
        key: '/category',
        icon: 'bars'
      },
      {
        title: ' 商品管理',
        key: '/product',
        icon: 'tool'
      },
    ]
  },
]