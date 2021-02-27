import {connect} from "react-redux";
import Home from "./Home";
import {
  getAllTaskThunk,
  markCompletedTasks, updateTasksThunk
} from "../../redux/todoReducer/todoReducer";
import {bgDesktopLight, crossIcon, moonIcon} from "../../assets";


const HomeContainer = ({ tasks, updateTasksThunk, getAllTaskThunk, markCompletedTasks}) => {

  return <Home
    tasks={tasks}
    update={updateTasksThunk}
    changeCompletion={markCompletedTasks}
    getAll={getAllTaskThunk}
    image={bgDesktopLight}
    icon={moonIcon}
    cross={crossIcon}
  />
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {
  updateTasksThunk,
  getAllTaskThunk,
  markCompletedTasks,
})(HomeContainer)