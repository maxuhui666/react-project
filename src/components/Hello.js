import React, {Fragment, Component} from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
        <button onClick={this.handleClick}>点击</button>
      </Fragment>
    )
  }
}

export default Hello;
