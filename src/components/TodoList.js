import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

function TodoList(props) {
    return (
        <section className="todo-list">
            {props.todos.map(todo =>
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onDelete={props.onDelete}
                    onToggle={props.onToggle}
                    onEdit={props.onEdit}
                />)
            }
        </section>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default TodoList;