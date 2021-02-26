import styled from "styled-components";


export const MainContainer = styled.div`
  width: 144rem;
  height: 80rem;
`

export const TopBackground = styled.div`
  background-image: url(${props => props.image});
  width: 144rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentContainer = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  width: 54rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TodoContainer = styled.div`
  width: 54rem;
  position: relative;
`

export const LogoText = styled.div`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 1.5rem;
  color: #FFF;
`

export const SwitcherIcon = styled.div`
  background-image: url(${props => props.icon});
  width: 2.6rem;
  height: 2.6rem;
`

export const FormContainer = styled.form`
  width: 54rem;
  height: 6.4rem;
  margin-top: 6.3rem;
  position: relative;
`

export const Input = styled.input`
  width: 46.8rem;
  height: 6.4rem;
  border-radius: 5px;
  font-size: 1.8rem;
  padding-left: 7.2rem;
  outline: none;
`

export const Oval = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid #E3E4F1;
  border-radius: 90%;
  position: absolute;
  left: 5%;
  top: 33%;
  background: #FFF;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

export const TodoListBlock = styled.div`
  width: 54rem;
  position: absolute;
  left: 0.5%;
  top: 130%;
  display: flex;
  flex-direction: column;
`

export const Task = styled.div`
  width: 46.8rem;
  height: 6.4rem;
  font-size: 1.8rem;
  padding-left: 7.2rem;
  background: #FFF;
  border-bottom: 2px solid #979797;
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  margin: 0.01rem;

  -webkit-box-shadow: 10px 10px 20px 5px rgba(227,228,241,1);
  -moz-box-shadow: 10px 10px 20px 5px rgba(227,228,241,1);
  box-shadow: 10px 10px 20px 5px rgba(227,228,241,1);
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid orangered;
  }
`

export const BottomContainer = styled.div`
  width: 144rem;
  font-size: 1.4rem;
  margin-top: 40rem;
  text-align: center;
`