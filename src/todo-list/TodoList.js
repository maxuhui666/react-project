import React, {Component, Fragment} from "react";
import {Input} from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['123', '132'],
      inputValue: '5555'
    }
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
  }

  /**
   * 修改输入框的值
   */
  onChangeInputValue(e) {
    const inputValue = e.target.value;
    console.log(inputValue);
    this.setState(() => {
      return (
        {
          inputValue: inputValue
        }
      )
    }, () => {
      console.log("更新完毕！");
    })
  }

  render() {
    const {list, inputValue} = this.state;
    return (
      <Fragment>
        <div>
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
