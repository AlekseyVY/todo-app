import {CompletedOval, CompletedText, Delete, Oval, Task, TextWrapper} from "../pages/Home/styles";


function TaskComponent(props) {
  console.log(props)
  return <Task theme={props.theme}>
    {
      props.element.completed
        ? <CompletedText>
          {props.element.task}
          <CompletedOval onClick={props.onClick}>
            <img src={props.src} alt={"Task Completed"}/>
          </CompletedOval>
        </CompletedText>
        : <TextWrapper>
          {props.element.task}
          <Oval theme={props.theme} onClick={props.onClick}/>
        </TextWrapper>
    }
    <Delete cross={props.cross} onClick={props.onClick1}/>
  </Task>;
}

export default TaskComponent;