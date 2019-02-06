import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Form(props) {
    let inputValue = '';
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue) {
            props.onAdd(inputValue);
            event.target.reset();
        }
    };

    const getValueRef = (node) => {inputValue = node};

    const handleChange = (event) => {
        inputValue = event.target.value;
    };

    const disabled = inputValue? !inputValue.value : false;

    return (
        <form className="todo-add-form" onSubmit={handleSubmit}>
            <input ref={getValueRef}
                type="text"
                placeholder="Write task here"
                onChange={handleChange} />

            <Button type="submit" disabled={disabled}>Add</Button>
        </form>
    );
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;