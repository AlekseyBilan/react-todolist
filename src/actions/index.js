import uniqid from 'uniqid';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


export function addTodo(title) {
    return {
        type: ADD_TODO,
        id: uniqid(),
        title
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function editTodo(id, title) {
    return {
        type: EDIT_TODO,
        title,
        id
    };
}