import {
  BottomContainer,
  ContentContainer, FormContainer, Input,
  LogoContainer,
  LogoText,
  MainContainer, Oval, SwitcherIcon, Task,
  TodoContainer, TodoListBlock,
  TopBackground
} from "./styles";
import {useState} from "react";


const Home = ({tasks, addTask, changeCompletion, getAll, image, icon}) => {
  const [value, setValue] = useState('')

  const addTaskHandler = (e) => {
    e.preventDefault()
    if(value.length < 1) {
      alert('Please Enter Valid Task!')
    } else {
      addTask(value)
      setValue('')
    }
  }

  return (
    <MainContainer>
      <TopBackground image={image.default}>
        <ContentContainer>
          <LogoContainer>
            <LogoText>
              TODO
            </LogoText>
            <SwitcherIcon icon={icon.default} />
          </LogoContainer>
          <TodoContainer>
            <FormContainer onSubmit={(e) => addTaskHandler(e)}>
              <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'Create a new todo…'}/>
              <Oval  type={'submit'}/>
            </FormContainer>
            <TodoListBlock>
              {
                tasks.map((element) => {
                  return (
                    <Task key={element.id}>
                      {element.task}
                      <Oval/>
                    </Task>
                  )
                })
              }
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