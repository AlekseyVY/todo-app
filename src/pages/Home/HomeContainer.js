import {connect} from "react-redux";
import Home from "./Home";
import {
  addNewTaskThunk,
  deleteTaskThunk,
  getAllTaskThunk,
  markCompletedTasks
} from "../../redux/todoReducer/todoReducer";
import {bgDesktopLight, crossIcon, moonIcon} from "../../assets";


const HomeContainer = ({ tasks, addNewTaskThunk, getAllTaskThunk, markCompletedTasks, deleteTaskThunk}) => {

  return <Home
    tasks={tasks}
    addTask={addNewTaskThunk}
    changeCompletion={markCompletedTasks}
    getAll={getAllTaskThunk}
    image={bgDesktopLight}
    icon={moonIcon}
    cross={crossIcon}
    deleteTask={deleteTaskThunk}
  />
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {
  addNewTaskThunk,
  getAllTaskThunk,
  markCompletedTasks,
  deleteTaskThunk
})(HomeContainer)