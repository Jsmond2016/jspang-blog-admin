
import React, { useState, useEffect } from 'react';
import '../static/css/ArticleList.css'
import { List, Row, Col, Modal, message, Button, Switch, Table } from 'antd';
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { withRouter } from 'react-router-dom'
const { confirm } = Modal;

function ArticleList(props) {

  const [list, setList] = useState([])
  //得到文章列表
  const getList = () => {
    axios({
      method: 'get',
      url: servicePath.getArticleList,
      withCredentials: true,
      header: { 'Access-Control-Allow-Origin': '*' }
    }).then(
      res => {
        setList(res.data.list)

      }
    )
  }


  //删除文章的方法
  const delArticle = (id) => {
    confirm({
      title: '确定要删除这篇博客文章吗?',
      content: '如果你点击OK按钮，文章将会永远被删除，无法恢复。',
      onOk() {
        axios(servicePath.delArticle + id, { withCredentials: true }).then(
          res => {
            message.success('文章删除成功')
            getList()
          }
        )
      },
      onCancel() {
        message.success('没有任何改变')
      },
    });

  }

  //修改文章
  const updateArticle = (id, checked) => {

    props.history.push('/index/add/' + id)

  }

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '类别',
      dataIndex: 'typeName',
      key: 'typeName',
    },
    {
      title: '发布时间',
      dataIndex: 'addTime',
      key: 'addTime',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: (_, item) => (
        <>
          <Button type="primary" onClick={() => updateArticle(item.id)}>修改</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={() => delArticle(item.id)}> 删除 </Button>
        </>
      )
    },
  ]

  useEffect(() => {
    getList()
  }, [])

  return (
    <Table bordered columns={columns} dataSource={list} rowKey="id" />
  )

}

export default withRouter(ArticleList)