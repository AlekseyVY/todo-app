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
const ADD_NEW = 'ADD_NEW'
const CHANGE_COMPLETION = 'CHANGE_COMPLETION'

// todo add, getAll, getCompleted, getNotCompleted, delete?
const todoReducer = (state = onLoadState, action) => {
  switch (action.type) {
    case GET_ALL: {
      return {
        ...state,
        tasks: [...state.tasks]
      }
    }
    case ADD_NEW: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
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

export const addNewTask = (task) => {
  return {
    type: 'ADD_NEW',
    payload: task
  }
}

export const markCompletedTasks = (id) => {
  return {
    type: 'CHANGE_COMPLETION',
    payload: id
  }
}

export const addNewTaskThunk = (newTask) => {
  return (dispatch) => {
    let task = {
      id: Math.floor((Math.random() * 100000) + 1).toString(),
      task: newTask,
      completed: false
    }
    dispatch(addNewTask(task))
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