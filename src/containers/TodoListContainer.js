import { connect } from 'react-redux';

import { deleteTodo, toggleTodo, editTodo } from '../actions';
import TodoList from '../components/TodoList';

function mapStateToProps(state) {
    return {
        todos: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTodo(id)),
        onToggle: id => dispatch(toggleTodo(id)),
        onEdit: (id, title) => dispatch(editTodo(id, title))
    };
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;