import {CompletedOval, CompletedText, Delete, Oval, Task, TextWrapper} from "../pages/Home/styles";


function TaskComponent(props) {
  return <Task>
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
          <Oval onClick={props.onClick}/>
        </TextWrapper>
    }
    <Delete cross={props.cross} onClick={props.onClick1}/>
  </Task>;
}

export default TaskComponent;