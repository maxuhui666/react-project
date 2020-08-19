import React, {Component, Fragment} from "react";

class TopArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '系统名称'
    }
  }

  render() {
    const {title} = this.state;
    return (
      <Fragment>
        <h1>顶部区域{title}</h1>
      </Fragment>
    )
  }
}


export default TopArea;
