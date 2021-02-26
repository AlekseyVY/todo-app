import {
  Active,
  All,
  BottomContainer, ClearBlock, Completed,
  ContentContainer, Delete, ElementsContainer, FormContainer, Input, ItemsLeft,
  LogoContainer,
  LogoText,
  MainContainer, Oval, SwitchBlock, SwitcherIcon, Task, TextWrapper,
  TodoContainer, TodoListBlock,
  TopBackground
} from "./styles";
import {useState} from "react";


const Home = ({tasks, addTask, changeCompletion, getAll, image, icon, cross, deleteTask}) => {
  const [value, setValue] = useState('')

  const addTaskHandler = (e) => {
    e.preventDefault()
    if(value.length < 1) {
      alert('Please Enter Valid Task!')
    } else if(tasks.length >= 5) {
      alert('Please finish tasks you already scheduled!, Big long lists can be frustrating and can potentially lead to anxiety and procrastination!')
    }
    else {
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
                      <TextWrapper>
                        {element.task}
                      </TextWrapper>
                      <Delete cross={cross.default} onClick={(e) => deleteTask(element.id)}/>
                      <Oval/>
                    </Task>
                  )
                })
              }
              <ElementsContainer>
                <ItemsLeft>
                  {tasks.length} items left
                </ItemsLeft>
                <SwitchBlock>
                  <All>All</All>
                  <Active>Active</Active>
                  <Completed>Completed</Completed>
                </SwitchBlock>
                <ClearBlock>
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