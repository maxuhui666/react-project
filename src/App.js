import React, {Component, Fragment} from 'react';
import {Row, Col} from "antd";
import './App.scss';
import 'antd/dist/antd.css';
import TodoList from "./todo-list/TodoList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Row justify={'center'}>
          <Col>
            <TodoList/>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default App;
