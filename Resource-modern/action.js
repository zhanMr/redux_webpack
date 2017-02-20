const ADD_TODO = '添加 TODO';

export function addTodo(text){
    return {
        type: ADD_TODO,
        text
    }
}

