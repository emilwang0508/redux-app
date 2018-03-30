import { VisibilityFilters } from '../Actions/visibility'
import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER } from '../Actions/actionTypes'
import { combineReducers } from 'redux'
//初始化狀態
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos:[]
};
/*
function todoApp(state, action) {
    if (typeof state==='undefined') {
        return initialState
    }

    // 這裡暫時不處理任何action
    // 僅返回傳入的state
    return state
}
*/
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}
/*聲明show_all*/
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
/*function todoApp(state=initialState, action){
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state,{
                visibilityFilter: action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos:todos(state.todos, action)
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        default:
            return state
    }
}*/
/*function todoApp(state={}, action){
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}*/
const todoApp = combineReducers({
    visibilityFilter,
    todos
})
/*const reducer = combineReducers({
    a: doSomethingWithA,
    b: processB,
    c: c
})
function reducer(state = {}, action) {
    return {
        a: doSomethingWithA(state.a, action),
        b: processB(state.b, action),
        c: c(state.c, action)
    }
}*/
export  default  todoApp