import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import todoApp from './Reducers'
import Index from './Pages/Index'
import { composeWithDevTools } from 'redux-devtools-extension'
let store = createStore(todoApp, composeWithDevTools(
    applyMiddleware(...todoApp),

))
class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <Index />
        </Provider>
    );
  }
}

export default App;
