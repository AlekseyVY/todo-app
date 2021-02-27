import {connect} from "react-redux";
import Home from "./Home";
import {updateTasksThunk} from "../../redux/todoReducer/todoReducer";
import {bgDesktopLight, crossIcon, moonIcon} from "../../assets";


const HomeContainer = ({ tasks, updateTasksThunk}) => {

  return <Home
    tasks={tasks}
    update={updateTasksThunk}
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
  updateTasksThunk
})(HomeContainer)