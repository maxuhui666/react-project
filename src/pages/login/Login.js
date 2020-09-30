import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Checkbox, message, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link, Redirect } from 'react-router-dom'
import './Login.scss'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '登录',
      account: '',
      password: '',
      verificationCode: '',
      // 控制路由跳转，赋值指定路由地址触发跳转
      toRoute: ''
    }
    this.onFinish = this.onFinish.bind(this)
  }

  onFinish (values) {
    if (values.account !== 'admin') {
      message.error('用户名不存在！')
      return
    }
    if (values.password !== '123456') {
      message.error('密码错误！')
      return
    }
    this.setState({
      toRoute: '/home'
    }, () => {
      message.success('登录成功！')
    })
  }

  componentDidMount () {
    console.log('加载')
  }

  render () {
    const { toRoute } = this.state
    if (toRoute !== '') {
      return <Redirect to={toRoute}/>
    }
    return (
      <Fragment>
        <Row justify="center">
          <Col>
            <Form name={'normal_login'} className={'login-form'} initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Form.Item name={'account'} rules={[{ required: true, message: '请输入账号！' }]}>
                <Input prefix={<UserOutlined className={'site-form-item-icon'}/>} placeholder={'请输入账号'}/>
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
                <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password" placeholder="请输入密码"/>
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">忘记密码</a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                或 <a href="">现在注册</a>
              </Form.Item>
            </Form>
            <Button><Link to={'/home'}>回首页</Link></Button>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Login
