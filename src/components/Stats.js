import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
    const total = props.todos.length;
    const completed = props.todos.filter(todo => todo.completed).length;
    const uncompleted = total - completed;

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Total tasks:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Completed:</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>Uncompleted:</th>
                    <td>{uncompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

export default Stats;