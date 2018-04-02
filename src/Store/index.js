import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import todoApp from '../Reducers'
let store = createStore(todoApp, composeWithDevTools(
    applyMiddleware(...middleware),

))
export default store