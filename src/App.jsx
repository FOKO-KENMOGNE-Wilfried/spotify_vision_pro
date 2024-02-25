import styled from "styled-components";
import Left_menu from "./components/Left_menu";
import Command_pannel from "./components/Command_pannel";
import Dashboard from "./components/Dashboard";
import background from "./assets/background.jpg";

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  z-index: 3;
`

const StyledSubBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`

const StyledImgDiv = styled.div`
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.3;
`

function App() {

  return (
    <StyledDiv>
        <StyledImgDiv>
        </StyledImgDiv>
        <StyledImg src={background} alt="background" />

        <StyledBox>

          <Left_menu />

          <StyledSubBox>
            <Dashboard />
            <Command_pannel />
          </StyledSubBox>

      </StyledBox>

    </StyledDiv>
  )
}

export default App
