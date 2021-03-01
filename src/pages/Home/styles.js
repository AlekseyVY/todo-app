import styled from "styled-components";


export const MainContainer = styled.div`
  width: 144rem;
  height: 80rem;
  @media (max-width: 375px){
    width: 37.5rem;
    height: 73rem;
  }
`

export const TopBackground = styled.div`
  background-image: url(${props => props.image});
  width: 144rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 375px){
    width: 37.5rem;
    height: 20rem;
    background-image: url(${props => props.mobile});
  }
`

export const ContentContainer = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 375px){
    width: 32.7rem;
  }
`

export const LogoContainer = styled.div`
  width: 54rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 375px){
    width: 32.7rem;
    height: 4.8rem;
    margin-top: 4.8rem;;
  }
`

export const TodoContainer = styled.div`
  width: 54rem;
  border-radius: 0.5rem;
  position: relative;
  color: ${props => props.listTextColor};
  @media (max-width: 375px){
    width: 32.7rem;
    margin-top: -5rem;
  }
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
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`

export const FormContainer = styled.form`
  width: 54rem;
  height: 6.4rem;
  margin-top: 6.3rem;
  position: relative;
  @media (max-width: 375px){
    width: 32.7rem;
  }
`

export const Input = styled.input`
  width: 46.8rem;
  height: 6.4rem;
  border-radius: 5px;
  font-size: 1.8rem;
  padding-left: 7.2rem;
  outline: none;
  border: none;
  color: ${props => props.listTextColor};
  background-color: ${props => props.bgColor};
  @media (max-width: 375px){
    width: 25.5rem;
  }
`


export const Oval = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid #E3E4F1;
  border-radius: 90%;
  position: absolute;
  left: 5%;
  top: 33%;
  background: ${props => props.theme};
  outline: none;
  z-index: 1;
  &:hover {
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 90%;
    border-color: #55DDFF;
  }
`

export const CompletedOval = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid #E3E4F1;
  background: linear-gradient(90deg, rgba(85, 221, 255), rgba(192, 88, 243) 100%);
  border-radius: 90%;
  position: absolute;
  left: 5%;
  top: 33%;
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
  border-radius: 0.5rem;
  flex-direction: column;
  -webkit-box-shadow: ${props => props.webkitShadow};
  -moz-box-shadow: ${props => props.mozShadow};
  box-shadow: ${props => props.boxShadow};
  @media (max-width: 375px){
    width: 32.7rem;
  }
`

export const Delete = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  display: none;
  top: 33%;
  right: 2.4rem;
  background-image: url(${props => props.cross});
  @media (max-width: 375px){
    display: unset;
  }
`

export const Task = styled.li`
  width: 46.8rem;
  height: 6.4rem;
  font-size: 1.8rem;
  padding-left: 7.2rem;
  background: ${props => props.theme};
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
  @media (max-width: 375px){
    width: 25.5rem;
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
  background: ${props => props.bgColor};
  border-radius: 0.5rem;
  flex-wrap: wrap;
  @media (max-width: 375px){
    width: 32.7rem;
    align-items: center;
    justify-content: space-around;
    position: relative;
  }
`

export const ItemsLeft = styled.div`
  order: 1;
  @media (max-width: 375px){
    order: 1;
  }
`

export const SwitchBlock = styled.div`
  width: 16.6rem;
  display: flex;
  justify-content: space-between;
  order: 2;
  @media (max-width: 375px){
    display: none;
  }
`

export const SwitchBlockMobile = styled.div`
  display: none;
  @media (max-width: 375px){
    position: absolute;
    display: flex;
    justify-content: space-around;
    order: 3;
    width: 100%;
    top: 10rem;
    left: 0;
    z-index: 2;
  }
`

export const MobileBlock = styled.div`
  display: none;
  @media (max-width: 375px) {
    display: unset;
    width: 32.7rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    position: absolute;
    top: 8rem;
    left: 0;
    background: ${props => props.bgColor};
    -webkit-box-shadow: ${props => props.webkitShadow};
    -moz-box-shadow: ${props => props.mozShadow};
    box-shadow: ${props => props.boxShadow};
    z-index: 1;
  }
`


export const Active = styled.div`
  color: #3A7CFD;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`

export const Simple = styled.div`
  &:hover {
    cursor: pointer;
    font-weight: bolder;
  }
`

export const ClearBlock = styled.div`
  order: 3;
  &:hover {
    cursor: pointer;
    color: orangered;
  }
  @media (max-width: 375px){
    order: 2;
  }
`

export const CompletedText = styled.div`
  text-decoration: line-through;
  color: #D1D2DA;
`


export const BottomContainer = styled.div`
  width: 144rem;
  height: 5rem;
  padding-top: 45rem;
  font-size: 1.4rem;
  text-align: center;
  color: ${props => props.secondaryText};
  background: ${props => props.bgColor}};
@media (max-width: 375px){
  width: 37.5rem;
}
`


export const UlContainer = styled.ul`
  list-style: none;
  background-color: ${props => props.theme};
  margin: 0;
  padding: 0;
`