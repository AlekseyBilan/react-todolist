import React from 'react';

import TodoListContainer from './containers/TodoListContainer';
import FormContainer from './containers/FormContainer';

function App() {
    return (
        <main>
            <TodoListContainer />
            <FormContainer />
        </main>
    );
}

export default App;