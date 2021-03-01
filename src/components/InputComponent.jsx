import {FormContainer, Input, Oval} from "../pages/Home/styles";
import {addTaskHandler} from "../Handlers/handlers";
import {useState} from "react";


function InputComponent({ tasksArray, setTasksArray, update, theme}) {
  const [value, setValue] = useState('')

  return <FormContainer onSubmit={(e) =>addTaskHandler(e, value, tasksArray, setTasksArray, update, setValue)}>
    <Input listTextColor={theme.listTextColor} bgColor={theme.bgColor} value={value} onChange={(e) => setValue(e.target.value)} placeholder={"Create a new todo…"}/>
    <Oval theme={theme.bgColor} type={"submit"}/>
  </FormContainer>;
}


export default InputComponent;