import React, {Component, Fragment} from "react";
import {Button, Input} from "antd";
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
    this.updateTime = this.updateTime.bind(this);
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

  updateTime() {
    const date = new Date();
    this.setState(() => {
      return (
        {
          now: date.getTime()
        }
      )
    }, () => {
      console.log("UPDATE STATE SUCCESS!");
    })
  }

  onChangeInputValue(e) {
    const inputValue = e.target.value;
    this.setState(() => {
      return (
        {
          inputValue: inputValue
        }
      )
    }, () => {
      console.log("UPDATE STATE SUCCESS!");
    })
  }

  render() {
    const {list, inputValue, now} = this.state;
    return (
      <Fragment>
        <div>
          <p>现在时间是：{this.dateFormat(now)}</p>
          <Button type={'primary'} onClick={this.updateTime}>更新时间</Button>
          <Input type={'text'} value={inputValue} onChange={this.onChangeInputValue}/>
          <ul>
            {
              list.map((item, index) => {
                return (<li key={index}>{item},</li>)
              })
            }
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default TodoList;
