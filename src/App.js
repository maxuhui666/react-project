import React, {Component, Fragment} from 'react';
import Hello from "./components/Hello";
import SliderMenu from "./components/SliderMenu";
import {Row, Col} from "antd";
import './App.scss';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={6}>
            <SliderMenu/>
          </Col>
          <Col span={17}>
            <Hello/>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default App;
