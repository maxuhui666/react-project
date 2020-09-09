import React, {Component, Fragment} from "react";
import {Input} from "antd";
import moment from "moment";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['123', '132'],
      inputValue: '5555',
      now: ''
    }
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
  }

  componentDidMount() {
    const date = new Date();
    this.setState(() => {
      return (
        {
          now: date.getTime()
        }
      )
    })
  }

  dateFormat(time) {
    return moment(time).format("YYYY-MM-DD HH:mm:ss")
  }

  /**
   * 修改输入框的值
   */
  onChangeInputValue(e) {
    const inputValue = e.target.value;
    this.setState(() => {
      return (
        {
          inputValue: inputValue
        }
      )
    }, () => {
      console.log("Update Success！");
    })
  }

  render() {
    const {list, inputValue, now} = this.state;
    return (
      <Fragment>
        <div>
          {this.dateFormat(now)}
          <Input type={'text'} value={inputValue} onChange={this.onChangeInputValue}/>
          <ul>
            {
              list.map((item, index) => {
                return (
                  <li key={index}>{item},</li>
                )
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default TodoList;
