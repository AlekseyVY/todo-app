import {
  Active,
  ClearBlock,
  ElementsContainer,
  ItemsLeft, MobileBlock,
  Simple,
  SwitchBlock, SwitchBlockMobile,
} from "../pages/Home/styles";
import {clearCompletedHandler, switchActiveState} from "../Handlers/handlers";


export const SwitchComponent = ({tasksArray, active, setActive, setTasksArray, update, theme}) => {

  return (
    <ElementsContainer bgColor={theme.bgColor}>
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
      <SwitchBlockMobile>
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
      </SwitchBlockMobile>
      <MobileBlock
        bgColor={theme.bgColor}
        webkitShadow={theme.webkitShadow}
        mozShadow={theme.mozShadow}
        boxShadow={theme.boxShadow}
      />
    </ElementsContainer>
  )
}

export default SwitchComponent;