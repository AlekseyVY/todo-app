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
import {themeSwitchHelper} from "../../services/themeSwitch";


const Home = ({tasks, update, cross, checkIcon, data}) => {
  const [active, setActive] = useState(data)
  const [tasksArray, setTasksArray] = useState(tasks)
  const [activeArray, setActiveArray] = useState([])
  const [completedArray, setCompletedArray] = useState([])
  const [themeSwitch, setSwitchTheme] = useState(true)
  const [theme, setTheme] = useState(() => themeSwitchHelper(themeSwitch))

  useEffect(() => {
    setActiveArray(tasksArray.filter((ele) => !ele.completed))
    setCompletedArray(tasksArray.filter((ele) => ele.completed))
  }, [tasksArray])

  const switchThemeHandler = () => {
    setTheme(themeSwitchHelper(!themeSwitch))
    setSwitchTheme(!themeSwitch)
  }

  console.log(theme)
  return (
    <MainContainer>
      <TopBackground mobile={theme?.bgMobile.default} image={theme.bgImage.default}>
        <ContentContainer>
          <LogoContainer>
            <LogoText>
              TODO
            </LogoText>
            <SwitcherIcon onClick={switchThemeHandler} icon={theme.switchIcon.default}/>
          </LogoContainer>
          <TodoContainer listTextColor={theme.listTextColor}>
            <InputComponent
              theme={theme}
              tasksArray={tasksArray}
                            setTasksArray={setTasksArray}
                            update={update}
            />
            <TodoListBlock
              webkitShadow-={theme.webkitShadow}
              mozShadow={theme.mozShadow}
              boxShadow={theme.boxShadow}
            >
              <ConditionalRender
                theme={theme.bgColor}
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
                theme={theme}
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
      <BottomContainer
        bgColor={theme.bgColor}
        secondaryText={theme.secondaryText}
      >
        Drag and drop to reorder list
      </BottomContainer>
    </MainContainer>
  )
}


export default Home;