import styled from "styled-components";

import play_music from "../../assets/icons/play_music.svg";
import next from "../../assets/icons/next.svg";
import preview from "../../assets/icons/preview.svg";
import shuffle from "../../assets/icons/shuffle.svg";
import volume from "../../assets/icons/volume.svg";
import loop from "../../assets/icons/loop.svg";
import Eve_fight_song from "../../assets/Eve_fight_song.jpg";

const StyledMenu = styled.div`
    position: absolute;
    bottom: -60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    width: 799px;
    height: 100px;
    border-radius: 100px;
    box-shadow: -1px -0.8px 0.8px 1px white;
`

const StyledBox1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
`

const StyledSubBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const StyledSubBox1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px
`

const StyledMiniImg = styled.img`
    width: 40px;
    height: 40px;
`

const StyledImgDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const StyledprogressBarDiv = styled.div`
    width: 100px;
    background-color: #B3B3B3;
    height: 4px;
    border-radius: 10px
`

const StyledprogressBar = styled.div`
    width: 70px;
    background-color: white;
    height: 4px;
    border-radius: 10px
`

const StyledprogressBarDiv2 = styled.div`
    width: 90%;
    background-color: #B3B3B3;
    height: 4px;
    border-radius: 10px
`

const StyledprogressBar2 = styled.div`
    width: 80%;
    background-color: white;
    height: 4px;
    border-radius: 10px
`

const StyledImgPointer = styled.img`
    cursor: pointer;
`

const StyledProgressBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 90%;
    color: white;
`

function Command_pannel(){
    return (

        <StyledMenu>
            <StyledBox1>

                <StyledSubBox>

                    <StyledMiniImg src={Eve_fight_song} alt="current_song" />
                    <div>
                        <p style={{color: "white"}}>Fight Song</p>
                        <p style={{color: "gray", marginTop: "-6px"}}>Eve</p>
                    </div>

                </StyledSubBox>

                <StyledSubBox1>
                    <StyledImgPointer src={shuffle} alt="shuffle" style={{paddingTop: "15px"}}/>
                    <StyledImgPointer src={preview} alt="shuffle" />
                    <StyledImgPointer src={play_music} alt="shuffle" />
                    <StyledImgPointer src={next} alt="shuffle" />
                    <StyledImgPointer src={loop} alt="shuffle" />
                </StyledSubBox1>
                
                <StyledImgDiv>
                    <StyledImgPointer src={volume} alt="shuffle" />
                    <StyledprogressBarDiv>
                        <StyledprogressBar></StyledprogressBar>
                    </StyledprogressBarDiv>
                </StyledImgDiv>

            </StyledBox1>

            <StyledProgressBox>

                <p>1:00</p>
                <StyledprogressBarDiv2>
                        <StyledprogressBar2></StyledprogressBar2>
                </StyledprogressBarDiv2>
                <p>3:28</p>

            </StyledProgressBox>

        </StyledMenu>

    )
}

export default Command_pannel;