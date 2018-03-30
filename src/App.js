import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
} from './Actions'
import {  VisibilityFilters } from './Actions/visibility'
import store from './Store'
console.log(store.getState())
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
class App extends Component {

  render() {
    return (
      <div className="App">
          <p>111</p>
          <button >ADD></button>
          <button >DEL</button>
      </div>
    );
  }
}

export default App;
