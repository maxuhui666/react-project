import React, {Component} from 'react';
import Hello from "./components/Hello";
import {Row, Col} from "antd";
import store from "./store";
import './App.scss';
import 'antd/dist/antd.css';
import {Provider} from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Row justify={'center'}>
          <Col>
            <Hello/>
          </Col>
        </Row>
      </Provider>
    )
  }
}

export default App;
