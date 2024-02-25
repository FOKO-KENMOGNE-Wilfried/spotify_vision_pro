import styled from "styled-components";
import Left_menu from "./components/Left_menu";
import Command_pannel from "./components/Command_pannel";
import Dashboard from "./components/Dashboard";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("src/assets/background.jpg");
  background-size: cover;
`

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`

const StyledSubBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

function App() {

  return (
    <StyledDiv>

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
