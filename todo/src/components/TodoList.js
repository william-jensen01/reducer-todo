import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="todo-list">
            {props.tasks.map((todo) => (
                <Todo key={todo.id} todo={todo} toggleTask={props.toggleTask} />
            ))}
            <button className="clear-btn" onClick = {props.clearTask}>
                Clear Completed Task
            </button>
        </div>
    )
}

export default TodoList;  