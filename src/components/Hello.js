import React, {Fragment, Component} from "react";
import {Button} from "antd";
import http from '../http/http';
import {dictionaryInfo} from '../http/Api';

class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    http.get(dictionaryInfo.list, {}).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
    console.log('组件加载完毕！');
  }

  handleClick() {
    this.setState(() => {
      return {
        title: 'HHH'
      }
    }, () => {
      console.log('更新完成')
    })
  }

  render() {
    const {title} = this.state;
    return (
      <Fragment>
        {title}
        <Button type={"primary"} onClick={this.handleClick}>点击</Button>
      </Fragment>
    )
  }
}

export default Hello;
