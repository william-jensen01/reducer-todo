import React, { useState } from 'react';

const TodoForm = (props) => {
    const [formState, setFormState] = useState({
        todo: '',
    });

    const handleChanges = (e) => {
        setFormState({
            todo: e.target.value
        });
    };

    const handleSubmit = (e) => { 
        setFormState({
            todo: '',
        });
        props.addTask(e, formState.todo)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo" />
                <input
                    type="text"
                    name="todoTask"
                    id="todoTask"
                    placeholder="Enter task"
                    value={formState.todo}
                    onChange={handleChanges}
                />
            <button>Add Task</button>
        </form>
    );
};

export default TodoForm;