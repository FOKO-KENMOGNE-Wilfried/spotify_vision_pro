import styled from "styled-components";

import play_music from "../../assets/icons/play_music.svg";
import next from "../../assets/icons/next.svg";
import preview from "../../assets/icons/preview.svg";
import shuffle from "../../assets/icons/shuffle.svg";
import volume from "../../assets/icons/volume.svg";
import loop from "../../assets/icons/loop.svg";

const StyledMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    backdrop-filter: blur(10px);
    width: 799px;
    height: 100px;
    border-radius: 100px;
    box-shadow: -1px -1px 0.8px 1px white;
`

const StyledBox1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const StyledSubBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledMiniImg = styled.img`
    width: 40px;
    height: 40px;
`

function Command_pannel(){
    return (

        <StyledMenu>
            <StyledBox1>

                <StyledSubBox>

                    <StyledMiniImg src="" alt="current_song" />
                    <div>
                        <p>Pray</p>
                        <p>Eve</p>
                    </div>

                </StyledSubBox>

                <img src={shuffle} alt="shuffle" />
                <img src={preview} alt="shuffle" />
                <img src={play_music} alt="shuffle" />
                <img src={next} alt="shuffle" />
                <img src={loop} alt="shuffle" />
                <div>
                    <img src={volume} alt="shuffle" />
                </div>

            </StyledBox1>
        </StyledMenu>

    )
}

export default Command_pannel;