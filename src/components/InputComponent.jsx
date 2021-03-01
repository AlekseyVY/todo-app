import {FormContainer, Input, Oval} from "../pages/Home/styles";
import {addTaskHandler} from "../Handlers/handlers";
import {useState} from "react";


function InputComponent({ tasksArray, setTasksArray, update}) {
  const [value, setValue] = useState('')

  return <FormContainer onSubmit={(e) =>addTaskHandler(e, value, tasksArray, setTasksArray, update, setValue)}>
    <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Create a new todo…"}/>
    <Oval type={"submit"}/>
  </FormContainer>;
}


export default InputComponent;