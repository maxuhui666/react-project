import React, { Component, Fragment } from 'react'
import { Button, Input, message, List, Avatar } from 'antd'
import './TodoList.scss'

import moment from 'moment'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      item: ''
    }
    this.onChangeContent = this.onChangeContent.bind(this)
    this.updateTime = this.updateTime.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount () {
    this.updateTime()
  }

  dateFormat (time) {
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
  }

  updateTime () {
    this.setState(() => {
      return (
        {
          item: {
            time: new Date().getTime()
          }
        }
      )
    }, () => {
      console.log('UPDATE STATE SUCCESS!')
    })
  }

  addList () {
    const item = this.state.item
    if (item.content === undefined || item.content.trim() === '') {
      message.error('请填写内容')
      return
    }
    const list = this.state.list
    for (const object of list) {
      if (object.content.trim() === item.content.trim()) {
        message.error('已存在')
        return
      }
    }

    list.push(this.state.item)
    this.setState(() => {
      return (
        {
          list: list,
          item: {
            content: ''
          }
        }
      )
    }, () => {
      console.log('ADD SUCCESS!')
    })
  }

  onChangeContent (e) {
    const content = e.target.value
    this.setState(() => {
      return (
        {
          item: {
            time: new Date().getTime(),
            content: content
          }
        }
      )
    }, () => {
      console.log('UPDATE STATE SUCCESS!')
    })
  }

  deleteItem (index) {
    const list = this.state.list
    list.splice(index, 1)
    this.setState(() => {
      return ({
        list: list
      })
    }, () => {
      message.success('删除成功！')
    })
  }

  render () {
    const { list, item } = this.state
    return (
      <Fragment>
        <div>
          <p>现在时间是：{this.dateFormat(item.time)}</p>
          <Button type={'primary'} onClick={this.updateTime}>更新时间</Button>
          <Input type={'text'} value={item.content} onChange={this.onChangeContent}/> <Button
            type={'primary'} onClick={this.addList}>新增</Button>
          <List itemLayout={'horizontal'} dataSource={list} renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                title={<a href="https://ant.design">{item.content}</a>}
                description={item.content}
              />
            </List.Item>
          )}>
          </List>
        </div>
      </Fragment>
    )
  }
}

export default TodoList
