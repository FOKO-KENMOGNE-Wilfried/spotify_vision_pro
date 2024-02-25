import styled from "styled-components";

const StyledMenu = styled.div`
    display: flex;
    flex-direction: row;
    backdrop-filter: blur(10px);
    width: 799px;
    height: 100px;
    border-radius: 100px;
    box-shadow: -1px -1px 0.8px 1px white;
`

function Command_pannel(){
    return (
        <StyledMenu>
            Command_pannel
        </StyledMenu>
    )
}

export default Command_pannel;