import React, {Component, Fragment} from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Hello from "./components/Hello";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Hello/>
      </Fragment>
    )
  }
}

export default App;
