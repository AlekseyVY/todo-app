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

const GET_ALL = 'GET_ALL'
const UPDATE_TASKS = 'UPDATE_TASKS'
const CHANGE_COMPLETION = 'CHANGE_COMPLETION'

// todo add, getAll, getCompleted, getNotCompleted, delete?
const todoReducer = (state = onLoadState, action) => {
  switch (action.type) {
    case GET_ALL: {
      console.log('all')
      return state
    }
    case UPDATE_TASKS: {
      return {
        ...state,
        tasks: [...action.payload]
      }
    }
    case CHANGE_COMPLETION: {
      return {
        ...state,
        tasks: state.tasks.map((ele) => {
            if (ele.id === action.payload) {
              ele.completed = !ele.completed
              return ele
            } else {
              return ele
            }
          }
        )
      }
    }
    default: {
      return state
    }
  }
}

export const getAllTasks = () => {
  return {
    type: 'GET_ALL'
  }
}

export const updateTasks = (tasks) => {
  return {
    type: 'UPDATE_TASKS',
    payload: tasks
  }
}

export const markCompletedTasks = (id) => {
  return {
    type: 'CHANGE_COMPLETION',
    payload: id
  }
}

export const updateTasksThunk = (tasks) => {
  return (dispatch) => {
    dispatch(updateTasks(tasks))
  }
}

export const getAllTaskThunk = () => {
  return (dispatch) => {
    dispatch(getAllTasks())
  }
}

export const markCompletedTasksThunk = (id) => {
  return (dispatch) => {
    dispatch(markCompletedTasks(id))
  }
}


export default todoReducer;