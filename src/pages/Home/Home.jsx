import {
  Active, BottomContainer, ClearBlock,
  ContentContainer, ElementsContainer, FormContainer, Input, ItemsLeft,
  LogoContainer,
  LogoText,
  MainContainer, Oval, Simple, SwitchBlock, SwitcherIcon,
  TodoContainer, TodoListBlock,
  TopBackground
} from "./styles";
import {useState} from "react";
import {useEffect} from "react";
import TaskComponent from "../../components/TaskComponent";
import {
  addTaskHandler,
  clearCompletedHandler,
  completedHandler,
  deleteTaskHandler,
  switchActiveState
} from "../../Handlers/handlers";
import InputContainer from "../../components/InputContainer";


const Home = ({tasks, update, image, icon, cross, checkIcon, data}) => {
  const [value, setValue] = useState('')
  const [active, setActive] = useState(data)
  const [tasksArray, setTasksArray] = useState(tasks)
  const [activeArray, setActiveArray] = useState([])
  const [completedArray, setCompletedArray] = useState([])

  useEffect(() => {
    setActiveArray(tasksArray.filter((ele) => !ele.completed))
    setCompletedArray(tasksArray.filter((ele) => ele.completed))
  }, [tasksArray])


  return (
    <MainContainer>
      <TopBackground image={image.default}>
        <ContentContainer>
          <LogoContainer>
            <LogoText>
              TODO
            </LogoText>
            <SwitcherIcon icon={icon.default}/>
          </LogoContainer>
          <TodoContainer>
            <InputContainer onSubmit={(e) => addTaskHandler(e, value, tasksArray, setTasksArray, update, setValue)}
                            value={value} onChange={(e) => setValue(e.target.value)}/>
            <TodoListBlock>
              {
                active.map(ele => {
                  if (ele.id === 2 && ele.active === true) {
                    return (
                      activeArray.map((element) => {
                        return (
                          <TaskComponent key={element.id} element={element}
                                         onClick={() => completedHandler(element.id, setTasksArray, tasksArray)}
                                         src={checkIcon.default} cross={cross.default}
                                         onClick1={() => deleteTaskHandler(element.id, tasksArray, setTasksArray, update)}/>
                        )
                      })
                    )
                  } else if (ele.id === 3 && ele.active === true) {
                    return (
                      completedArray.map((element) => {
                        return (
                          <TaskComponent key={element.id} element={element}
                                         onClick={() => completedHandler(element.id, setTasksArray, tasksArray)}
                                         src={checkIcon.default} cross={cross.default}
                                         onClick1={() => deleteTaskHandler(element.id, tasksArray, setTasksArray, update)}/>
                        )
                      })
                    )
                  } else if (ele.id === 1 && ele.active === true) {
                    return (
                      tasksArray.map((element) => {
                        return (
                          <TaskComponent key={element.id} element={element}
                                         onClick={() => completedHandler(element.id, setTasksArray, tasksArray)}
                                         src={checkIcon.default} cross={cross.default}
                                         onClick1={() => deleteTaskHandler(element.id, tasksArray, setTasksArray, update)}/>
                        )
                      })
                    )
                  }
                })
              }
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
            </TodoListBlock>
          </TodoContainer>
        </ContentContainer>
      </TopBackground>
      <BottomContainer>
        Drag and drop to reorder list
      </BottomContainer>
    </MainContainer>
  )
}


export default Home;