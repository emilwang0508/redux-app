import { ADD_TODO, REMOVE_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER } from './actionTypes'
import VisibilityFilters from './visibility'

let nextTodoId = 0

function addTodo(text) {
    return {
        type:ADD_TODO,
        id: nextTodoId++,
        text
    }
}
function removeTodo(id) {
    return {
        type:REMOVE_TODO,
        id
    }
}
function toggleTodo(id) {
    return {
        type:TOGGLE_TODO,
        id
    }
}
// SET_VISIBILITY_FILTER
function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}
export { addTodo,toggleTodo,setVisibilityFilter,VisibilityFilters}