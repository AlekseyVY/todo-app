import {onLoadState} from "../../TmpData/data";
import {UPDATE_TASKS} from "../CONSTANTS";





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