import {
  Active,
  ClearBlock,
  ElementsContainer,
  ItemsLeft,
  Simple,
  SwitchBlock,
} from "../pages/Home/styles";
import {clearCompletedHandler, switchActiveState} from "../Handlers/handlers";


export const SwitchComponent = ({tasksArray, active, setActive, setTasksArray, update}) => {

  return (
    <ElementsContainer>
      <ItemsLeft>
        {tasksArray.length} items left
      </ItemsLeft>
      <SwitchBlock>
        {
          active.map(ele => {
            if (ele.active) {
              return (
                <Active key={ele.id}>{ele.text}</Active>
              )
            } else {
              return (
                <Simple key={ele.id}
                        onClick={() => switchActiveState(ele.id, active, setActive)}>{ele.text}</Simple>
              )
            }
          })
        }
      </SwitchBlock>
      <ClearBlock onClick={() => clearCompletedHandler(setTasksArray, tasksArray, update)}>
        Clear Completed
      </ClearBlock>
    </ElementsContainer>
  )
}

export default SwitchComponent;