import {connect} from "react-redux";


const HomeContainer = (props) => {
  console.log(props)
  return (
    <div>
      123
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    tasks: state
  }
}

export default connect(mapStateToProps, {

})(HomeContainer)