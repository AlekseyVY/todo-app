import {connect} from "react-redux";
import Home from "./Home";
import {addNewTaskThunk, getAllTaskThunk, markCompletedTasks} from "../../redux/todoReducer/todoReducer";
import {bgDesktopLight, moonIcon} from "../../assets";


const HomeContainer = ({ tasks, addNewTaskThunk, getAllTaskThunk, markCompletedTasks}) => {

  return <Home
    tasks={tasks}
    addTask={addNewTaskThunk}
    changeCompletion={markCompletedTasks}
    getAll={getAllTaskThunk}
    image={bgDesktopLight}
    icon={moonIcon}
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
  markCompletedTasks
})(HomeContainer)