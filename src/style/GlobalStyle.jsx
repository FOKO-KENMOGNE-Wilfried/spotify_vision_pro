import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        boxSizing: "border-box";
        font-family: poppins;
    }
`

function GlobalStyle(){
    return <StyledGlobalStyle/>
}

export default GlobalStyle