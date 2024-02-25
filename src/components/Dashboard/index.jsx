import styled from "styled-components";

const StyledMenu = styled.div`
    display: flex;
    flex-direction: row;
    backdrop-filter: blur(10px);
    width: 1488px;
    height: 80vh;
    border-radius: 30px;
    box-shadow: 0.6px -0.4px 0px 0px white;
`

function Dashboard(){
    return (
        <StyledMenu>
            Dashboard
        </StyledMenu>
    )
}

export default Dashboard;