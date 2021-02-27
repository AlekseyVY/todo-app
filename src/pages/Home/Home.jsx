import {
  Active, BottomContainer, ClearBlock,
  ContentContainer, Delete, ElementsContainer, FormContainer, Input, ItemsLeft,
  LogoContainer,
  LogoText,
  MainContainer, Oval, Simple, SwitchBlock, SwitcherIcon, Task, TextWrapper,
  TodoContainer, TodoListBlock,
  TopBackground
} from "./styles";
import {useState} from "react";
import {useEffect} from "react";


const Home = ({tasks, update, changeCompletion, image, icon, cross}) => {
  const [value, setValue] = useState('')
  const [active, setActive] = useState([{id: 1, active: true, text: 'All'},
    {id: 2, active: false, text: 'Active'}, {id: 3, active: false, text: 'Completed'}])
  const [tasksArray, setTasksArray] = useState(tasks)
  const [activeArray, setActiveArray] = useState([])
  const [completedArray, setCompletedArray] = useState([])
  console.log('Tasks', tasksArray)
  console.log('Active', activeArray)
  console.log('Completed', completedArray)

  useEffect(() => {
    setActiveArray(tasksArray.filter((ele) => !ele.completed))
    setCompletedArray(tasksArray.filter((ele) => ele.completed))
  }, [tasksArray])

  const switchActiveState = (id) => {
    setActive(active.map(ele => {
      ele.active = ele.id === id;
      return ele
    }))
  }

  const deleteTaskHandler = (id) => {
    setTasksArray(tasksArray.filter((ele) => ele.id !== id))
    update(tasksArray)
  }


  const addTaskHandler = (e) => {
    e.preventDefault()
    if(value.length < 1) {
      alert('Please Enter Valid Task!')
    } else if(tasksArray.length >= 5) {
      alert('Please finish tasks you already scheduled!, Big long lists can be frustrating and can potentially lead to anxiety and procrastination!')
    }
    else {
      let task = {
        id: Math.ceil((Math.random() * 1_000_000) + 1).toString(),
        task: value,
        completed: false
      }
      setTasksArray([...tasksArray, task])
      update(tasksArray)
      setValue('')
    }
  }

  const completedHandler = (id) => {
    console.log('Completed', id)
    setTasksArray(tasksArray.map(ele => {
      if(ele.id === id){
        ele.completed = !ele.completed
        return ele
      }
      return ele
    }))
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
                active.map(ele => {
                  if(ele.id === 2 && ele.active === true) {
                    return (
                      activeArray.map((element) => {
                        return (
                          <Task key={element.id}>
                            <TextWrapper>
                              {element.task}
                            </TextWrapper>
                            <Delete cross={cross.default} onClick={() => deleteTaskHandler(element.id)}/>
                            <Oval onClick={() => completedHandler(element.id)}/>
                          </Task>
                        )
                      })
                    )
                  } else if(ele.id === 3 && ele.active === true) {
                    return (
                      completedArray.map((element) => {
                        return (
                          <Task key={element.id}>
                            <TextWrapper>
                              {element.task}
                            </TextWrapper>
                            <Delete cross={cross.default} onClick={() => deleteTaskHandler(element.id)}/>
                            <Oval onClick={() => completedHandler(element.id)}/>
                          </Task>
                        )
                      })
                    )
                  } else if (ele.id === 1 && ele.active === true) {
                    console.log('ALL')
                    return (
                      tasksArray.map((element) => {
                        return (
                          <Task key={element.id}>
                            <TextWrapper>
                              {element.task}
                            </TextWrapper>
                            <Delete cross={cross.default} onClick={() => deleteTaskHandler(element.id)}/>
                            <Oval onClick={() => completedHandler(element.id)}/>
                          </Task>
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
                      if(ele.active){
                        return (
                          <Active key={ele.id}>{ele.text}</Active>
                        )
                      } else {
                        return (
                          <Simple key={ele.id} onClick={() => switchActiveState(ele.id)}>{ele.text}</Simple>
                          )
                      }
                    })
                  }
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