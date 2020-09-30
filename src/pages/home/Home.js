import React, { Component, Fragment } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Home'
    }
  }

  render () {
    const { title } = this.state
    return (
      <Fragment>
        <h1>{title}</h1>
        <Link to={'/login'}> <Button type={'primary'}>登录</Button></Link>
        <Link to={'/todo-list'}> <Button type={'primary'}>TODO-List</Button></Link>
      </Fragment>
    )
  }
}

export default Home
