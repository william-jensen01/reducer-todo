import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { formReducer, initialState, ADD_TASK, TOGGLE_TASK, CLEAR_TASK } from './reducer/todoReducer';

function App() {
  const [state,dispatch] = useReducer(formReducer, initialState);

  const addTask = (e, data) => {
    e.preventDefault();
    const newTask = {
      task: data,
      id: Date.now(),
      completed: false
    };
    dispatch({type: ADD_TASK, payload: newTask});
  };

  const toggleTask = (taskId) => {
    dispatch({type: TOGGLE_TASK, payload: taskId});
  };

  const clearTask = (e) => {
    e.preventDefault();
    dispatch({type: CLEAR_TASK});
  };
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask}/>
      <TodoList
        tasks = {state.tasks}
        toggleTask = {toggleTask}
        clearTask = {clearTask}
        />
    </div>
  );
}

export default App;
