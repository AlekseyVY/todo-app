let onLoadState = {
  tasks: [
    {
      id: '1',
      task: 'Learn TypeScript',
      completed: false
    },
    {
      id: '2',
      task: 'Learn HTML',
      completed: false
    },
    {
      id: '3',
      task: 'Learn React',
      completed: false
    },
    {
      id: '4',
      task: 'Learn javaScript',
      completed: true
    }
  ]
}

const UPDATE_TASKS = 'UPDATE_TASKS'

// todo add, getAll, getCompleted, getNotCompleted, delete?
const todoReducer = (state = onLoadState, action) => {
  switch (action.type) {
    case UPDATE_TASKS: {
      return {
        ...state,
        tasks: [...action.payload]
      }
    }
    default: {
      return state
    }
  }
}


export const updateTasks = (tasks) => {
  return {
    type: 'UPDATE_TASKS',
    payload: tasks
  }
}


export const updateTasksThunk = (tasks) => {
  return (dispatch) => {
    dispatch(updateTasks(tasks))
  }
}



export default todoReducer;