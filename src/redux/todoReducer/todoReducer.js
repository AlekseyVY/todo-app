


const onLoadState = [
  {id: '1',
  task: 'Learn TypeScript',
  completed: false
  },
  {id: '2',
    task: 'Learn HTML',
    completed: false
  },
  {id: '3',
    task: 'Learn React',
    completed: false
  },
  {id: '4',
    task: 'Learn javaScript',
    completed: true
  },
]

const GET_ALL = 'GET_ALL'

// todo add, getAll, getCompleted, getNotCompleted, delete?
export const todoReducer = (state= onLoadState, action) => {
  switch (action.type) {
    case GET_ALL: {
      return state
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