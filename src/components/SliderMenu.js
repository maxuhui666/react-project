import React, { Component, Fragment } from 'react'

class SliderMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: [
        '首页',
        '个人中心',
        '系统设置'
      ]
    }
  }

  render () {
    const { options } = this.state
    return (
      <Fragment>
        <ul>
          {
            options.map(option => {
              return (
                <li>{option}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default SliderMenu
