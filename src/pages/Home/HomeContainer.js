import {connect} from "react-redux";
import Home from "./Home";
import {updateTasksThunk} from "../../redux/todoReducer/todoReducer";
import {bgDesktopLight, checkIcon, crossIcon, moonIcon} from "../../assets";
import {data} from "../../TmpData/data";


const HomeContainer = ({tasks, updateTasksThunk}) => {

  console.log('CONTAINER RENDER')
  return <Home
    tasks={tasks}
    update={updateTasksThunk}
    image={bgDesktopLight}
    icon={moonIcon}
    cross={crossIcon}
    checkIcon={checkIcon}
    data={data}
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