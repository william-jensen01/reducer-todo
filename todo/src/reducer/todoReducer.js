export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const CLEAR_TASK = 'CLEAR_TASK';

export const initialState = {
    tasks: [
        {
            task: 'Finish this assignment',
            id: 1,
            completed: true
        },
        {
            task: 'Clean my bedroom',
            id: 2,
            completed: false
        },
        {
            task: 'Go to sleep',
            id: 3,
            completed: false
        },
        {
            task: 'Play Call of Duty: Black Ops Cold War',
            id: 4,
            completed: false
        }
    ]
};

export const formReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks:[...state.tasks, action.payload]
            }

        case "TOGGLE_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return task.id === action.payload ? {...task, completed: !task.completed} : task;
                })
            };

        case "CLEAR_TASK":
            return {
                ...state,
                tasks:state.tasks.filter(task => !task.completed)
            }

        default:
            return state;
    };
};