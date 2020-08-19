import React, {Component, Fragment} from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'hello'
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.title}
      </Fragment>
    )
  }
}

export default App;
