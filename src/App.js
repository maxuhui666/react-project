import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './pages/home/Home'
import TodoList from './pages/todo-list/TodoList'
import Login from './pages/login/Login'
import './App.scss'
import 'antd/dist/antd.css'

class App extends Component {
  render () {
    return (
      <Fragment>
        <BrowserRouter>
          <Redirect form={'/'} to='/home'/>
          <Route path={'/home'} exact>
            <Home/>
          </Route>
          <Route path={'/todo-list'} exact>
            <TodoList/>
          </Route>
          <Route path={'/login'} exact>
            <Login/>
          </Route>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
