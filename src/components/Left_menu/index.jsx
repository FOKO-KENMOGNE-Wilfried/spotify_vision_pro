import styled from "styled-components";
import PropTypes from "prop-types";

import cast from "../../assets/icons/cast.svg";
import home from "../../assets/icons/home.svg";
import menu from "../../assets/icons/menu.svg";
import hostpot from "../../assets/icons/hostpot.svg";
import play from "../../assets/icons/play.svg";
import search from "../../assets/icons/search.svg";
import { useState } from "react";

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0px 20px 0px;
    align-items: center;
    gap: 10px;
    backdrop-filter: blur(10px);
    width: 68px;
    height: 358px;
    border-radius: 100px;
    box-shadow: 0px -0.6px 0.2px 0.2px white;
`

const StyledImg = styled.img`
    margin-left: -4px;
`

const StyledImg1 = styled.img`
    margin-left: -3px;
    margin-top: -2px;
`

const StyledImgDiv1 = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({select}) => {
        return`
            ${select === 1 ? "gray" : "none" };
        `
    }}
    opacity: 0.8;
    padding: 15px;
    border-radius: 100px;
`
const StyledImgDiv2 = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({select}) => {
        return`
            ${select === 2 ? "gray" : "none" };
        `
    }}
    opacity: 0.8;
    padding: 15px;
    border-radius: 100px;
`
const StyledImgDiv3 = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({select}) => {
        return`
            ${select === 3 ? "gray" : "none" };
        `
    }}
    opacity: 0.8;
    padding: 15px;
    border-radius: 100px;
`
const StyledImgDiv4 = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({select}) => {
        return`
            ${select === 4 ? "gray" : "none" };
        `
    }}
    opacity: 0.8;
    padding: 15px;
    border-radius: 100px;
`
const StyledImgDiv5 = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({select}) => {
        return`
            ${select === 5 ? "gray" : "none" };
        `
    }}
    opacity: 0.8;
    padding: 15px;
    border-radius: 100px;
`
const StyledImgDiv6 = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${({select}) => {
        return`
            ${select === 6 ? "gray" : "none" };
        `
    }}
    opacity: 0.8;
    padding: 15px;
    border-radius: 100px;
`

function Left_menu(){

    const [select, setSelect] = useState(1);
    function handleSelect(select, number){
        console.log("ok");
        select ? setSelect(number) : setSelect(number);
    }

    return (
        <StyledMenu>
            <StyledImgDiv1 select={select} onClick={() => handleSelect(select,1)}>
                <img src={play} alt="img" />
            </StyledImgDiv1>
            <StyledImgDiv2 select={select} onClick={() => handleSelect(select,2)}>
                <img src={menu} alt="img" />
            </StyledImgDiv2>
            <StyledImgDiv3 select={select} onClick={() => handleSelect(select,3)}>
                <StyledImg src={cast} alt="img" />
            </StyledImgDiv3>
            <StyledImgDiv4 select={select} onClick={() => handleSelect(select,4)}>
                <StyledImg1 src={home} alt="img" />
            </StyledImgDiv4>
            <StyledImgDiv5 select={select} onClick={() => handleSelect(select,5)}>
                <img src={hostpot} alt="img" />
            </StyledImgDiv5>
            <StyledImgDiv6 select={select} onClick={() => handleSelect(select,6)}>
                <img src={search} alt="img" />
            </StyledImgDiv6>
        </StyledMenu>
    )
}

Left_menu.propTypes = {
    select: PropTypes.number
}

export default Left_menu;