

export const  switchActiveState = (data, arr, func) => {
  func(arr.map(ele => {
    ele.active = ele.id === data;
    return ele
  }))
}


export const deleteTaskHandler = (id, arr, func, update) => {
  func(arr.filter((ele) => ele.id !== id))
  update(arr)
}

export  const addTaskHandler = (e, value, tasksArray, setTasksArray, update, setValue) => {
  e.preventDefault()
  if(value.length < 1) {
    alert('Please Enter Valid Task!')
  } else if(tasksArray.length >= 5) {
    alert('Please finish tasks you already scheduled!, Big long lists can be frustrating and can potentially lead to anxiety and procrastination!')
  } else if (value.length > 15) {
    alert("Write a TASK, not a STORY! (max-length: 15 chars.)")
  }
  else {
    let task = {
      id: Math.ceil((Math.random() * 1_000_000) + 1).toString(),
      task: value,
      completed: false
    }
    setTasksArray([...tasksArray, task])
    update(tasksArray)
    setValue('')
  }
}

export  const completedHandler = (id, setTasksArray, tasksArray) => {
  setTasksArray(tasksArray.map(ele => {
    if(ele.id === id){
      ele.completed = !ele.completed
      return ele
    }
    return ele
  }))
}

export   const clearCompletedHandler = (setTasksArray, tasksArray, update) => {
  setTasksArray(tasksArray.filter(ele => !ele.completed))
  update(tasksArray)
}