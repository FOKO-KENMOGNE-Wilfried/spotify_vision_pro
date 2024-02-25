import styled from "styled-components";

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0px 10px 0px;
    align-items: center;
    gap: 20px;
    backdrop-filter: blur(10px);
    width: 68px;
    height: 358px;
    border-radius: 100px;
    box-shadow: 0px -0.6px 0.2px 0.2px white;
`

function Left_menu(){
    return (
        <StyledMenu>
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
            <img src="" alt="img" />
        </StyledMenu>
    )
}

export default Left_menu;