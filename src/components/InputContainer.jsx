import {FormContainer, Input, Oval} from "../pages/Home/styles";


function InputContainer(props) {
  return <FormContainer onSubmit={props.onSubmit}>
    <Input value={props.value} onChange={props.onChange} placeholder={"Create a new todo…"}/>
    <Oval type={"submit"}/>
  </FormContainer>;
}


export default InputContainer;