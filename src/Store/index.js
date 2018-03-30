import { createStore } from 'redux'
import todoApp from '../Reducers'
let store = createStore(todoApp,window.STATE_FROM_SERVER)
export default store