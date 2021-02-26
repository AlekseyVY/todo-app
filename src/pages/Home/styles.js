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
  border-radius: 0.5rem;
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
  z-index: 1;
  &:hover {
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 90%;
    border-color: darkgreen;
  }
`


export const TodoListBlock = styled.div`
  width: 54rem;
  position: absolute;
  left: 0.5%;
  top: 130%;
  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 10px 10px 20px 5px rgba(227,228,241,1);
  -moz-box-shadow: 10px 10px 20px 5px rgba(227,228,241,1);
  box-shadow: 10px 10px 20px 5px rgba(227,228,241,1);
`

export const Delete = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  display: none;
  top: 33%;
  right: 2.4rem;
  background-image: url(${props => props.cross});
`

export const Task = styled.div`
  width: 46.8rem;
  height: 6.4rem;
  font-size: 1.8rem;
  padding-left: 7.2rem;
  background: #FFF;
  border-bottom: 2px solid #979797;
  position: relative;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  align-items: center;
  margin: 0.01rem;
  &:hover {
    cursor: pointer;
  }
  &:hover ${Delete}{
    cursor: pointer;
    display: block;
  }
`

export const TextWrapper = styled.div`
  width: 100%;

`


export const ElementsContainer = styled.div`
  width: 54rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  letter-spacing: -0.19px;
  background: #FFF;
  border-bottom: 2px solid #979797;
  border-radius: 0.5rem;
  margin: 0.01rem;
`

export const ItemsLeft = styled.div`
  
`

export const SwitchBlock = styled.div`
  width: 16.6rem;
  display: flex;
  justify-content: space-between;
`

export const All = styled.div`
  &:hover {
    cursor: pointer;
    color: #3A7CFD;
  }
`

export const Active = styled.div`
  &:hover {
    cursor: pointer;
    color: #3A7CFD;
  }
`

export const Completed = styled.div`
  &:hover {
    cursor: pointer;
    color: #3A7CFD;
  }
`

export const ClearBlock = styled.div`
  &:hover {
    cursor: pointer;
    color: orangered;
  }
`


export const BottomContainer = styled.div`
  width: 144rem;
  height: 5rem;
  padding-top: 45rem;
  font-size: 1.4rem;
  text-align: center;
  background: #FFF;
`