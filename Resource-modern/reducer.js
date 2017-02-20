import {combineReducers} from 'redux';
function addTodo(state = null, action){
    switch(action.type){
        case '添加 TODO':
            return action
        default:
            return state
    }
}

const todoApp = combineReducers({
    addTodo
});



export default todoApp;