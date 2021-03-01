import {
  BottomContainer,
  ContentContainer,
  LogoContainer,
  LogoText,
  MainContainer, SwitcherIcon,
  TodoContainer, TodoListBlock,
  TopBackground
} from "./styles";
import {useState} from "react";
import {useEffect} from "react";
import InputComponent from "../../components/InputComponent";
import SwitchComponent from "../../components/SwitchComponent";
import ConditionalRender from "../../components/ConditionalRender";


const Home = ({tasks, update, image, icon, cross, checkIcon, data}) => {
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
            <InputComponent tasksArray={tasksArray}
                            setTasksArray={setTasksArray}
                            update={update}
            />
            <TodoListBlock>
              <ConditionalRender
                active={active}
                activeArray={activeArray}
                completedArray={completedArray}
                setTasksArray={setTasksArray}
                tasksArray={tasksArray}
                update={update}
                checkIcon={checkIcon}
                cross={cross}
              />
              <SwitchComponent
                tasksArray={tasksArray}
                active={active}
                setActive={setActive}
                setTasksArray={setTasksArray}
                update={update}
              />
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