import styled from "styled-components";

import arow from "../../assets/home_icon/arow.svg";
import home from "../../assets/home_icon/home.svg";
import invite from "../../assets/home_icon/invite.svg";
import left from "../../assets/home_icon/left.svg";
import right from "../../assets/home_icon/right.svg";
import search from "../../assets/home_icon/search.svg";
import spotify from "../../assets/home_icon/spotify.svg";
import menu from "../../assets/home_icon/menu.svg";
import user from "../../assets/home_icon/user.svg";
import library from "../../assets/home_icon/library.svg";
import heart from "../../assets/home_icon/heart.svg";
import cross from "../../assets/home_icon/cross.svg";
import arow_down from "../../assets/home_icon/arow_down.svg";

import code from "../../assets/cover/code.jpg";
import eve from "../../assets/cover/eve.jpeg";
import gims from "../../assets/cover/gims.jpeg";
import loop from "../../assets/cover/loop.jpg";
import oxt from "../../assets/cover/oxt.jpg";
import sexion from "../../assets/cover/sexion.png";
import color from "../../assets/cover/color.jpeg";

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 20px;
    align-items: center;
    gap: 20px;
    backdrop-filter: blur(100px);
    width: 78vw;
    height: 80vh;
    border-radius: 30px;
    box-shadow: 0.6px -0.4px 0px 0px white;
    color: white;
`

const StyledBox1 = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const StyledBox2 = styled.div`
    width: 90%;
    height: 88%;
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const StyledContainer1 = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const StyledContainer2 = styled.div`
    width: 60%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(rgba(0, 163, 255, 0.2), rgba(0, 0, 0, 0.2));
    overflow: scroll;
    scrollbar-width: none;
`
const StyledContainer1Box1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
`
const StyledImg = styled.img`
    width: 25px;
    height: 25px;
`
const StyledContainer1Box1Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

const StyledContainer1Box2 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    overflow: scroll;
    scrollbar-width: none;
`
const StyledContainer1Box2Div1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const StyledContainer1Box2Div1Div = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const StyledContainer1Box2Div2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const StyledContainer1Box2Div2Div = styled.div`
    background-color: black;
    padding: 10px;
    border-radius: 30px;
    opacity: 0.4;
`
const StyledContainer1Box2Div3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`
const StyledContainer1Box2Div3Div = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const StyledContainer1Box2Div4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const StyledContainer1Box2Div4Div = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const StyledContainer1Box2Div4DivDiv1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 5px;
`
const StyledContainer1Box2Div4DivDiv1_1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 5px;
    background: linear-gradient(#C900DB, #02738C);
`
const StyledContainer2Box1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`
const StyledContainer2Box1Div1 = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledContainer2Box1Img = styled.img`
    width: 35px;
    height: 35px;
`
const StyledContainer2Box1Div2 = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
`
const StyledContainer2Box1Div2Input = styled.input`
    border-radius: 10px;
    outline: none;
    padding-left: 40px;
    border: none;
    color: white;
    background-color: black;
    opacity: 0.2;
`
const StyledContainer2Box1Div2Img = styled.img`
    position: absolute;
    top: 5px;
    left: 10px;
    width: 25px;
    height: 25px;
`
const StyledContainer2Box1Div3 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`
const StyledContainer2Box1Div3Div = styled.div`
    background-color: white;
    color: black;
    padding: 6px 15px 6px 15px;
    border-radius: 30px;
    transition: background-color,
                color 0.3s ease;
    &:hover{
        background-color: #B3B3B3;
        color: white;
    }
`
const StyledContainer2Box2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
`
const StyledContainer2Box2Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
`
const StyledContainer2Box2DivDiv1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
`
const StyledContainer2Box2DivDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    width: 300px;
    height: 80px;
    border-radius: 10px;
`
const StyledContainer2Box2Divimg = styled.img`
    width: 90px;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
`
const StyledContainer2Box3 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 20px;
`
const StyledContainer2Box3Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const StyledContainer2Box3DivDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    width: 190px;
    height: 190px;
`
const StyledContainer2Box3DivDivImg = styled.img`
    padding: 10px;
    border-radius: 20px;
    width: 90%;
    height: 150px;
`
const StyledContainer2Box3DivDivp = styled.p`
    position: absolute;
    bottom: 20px;
    font-weight: bold;
`


function Dashboard(){
    return (
        <StyledMenu>

            <StyledBox1>
                <img src={spotify} alt="spotify_icon" />
                <img src={menu} alt="menu" />
            </StyledBox1>

            <StyledBox2>

                <StyledContainer1>

                    <StyledContainer1Box1>
                        <StyledContainer1Box1Div>
                            <StyledImg src={home} alt="Home" />
                            <p>Home</p>
                        </StyledContainer1Box1Div>
                        <StyledContainer1Box1Div>
                            <StyledImg src={search} alt="search" />
                            <p>search</p>
                        </StyledContainer1Box1Div>
                    </StyledContainer1Box1>


                    <StyledContainer1Box2>

                        <StyledContainer1Box2Div1>
                            <StyledContainer1Box2Div1Div>
                                <StyledImg src={library} alt="library" />
                                <p>Your Library</p>
                            </StyledContainer1Box2Div1Div>
                            <StyledContainer1Box2Div1Div>
                                <StyledImg src={cross} alt="plus" />
                                <StyledImg src={arow} alt="arow" />
                            </StyledContainer1Box2Div1Div>
                        </StyledContainer1Box2Div1>

                        <StyledContainer1Box2Div2>
                            <StyledContainer1Box2Div2Div>
                                Playlists
                            </StyledContainer1Box2Div2Div>
                            <StyledContainer1Box2Div2Div>
                                Artists
                            </StyledContainer1Box2Div2Div>
                        </StyledContainer1Box2Div2>

                        <StyledContainer1Box2Div3>
                            <StyledImg src={search} alt="search" />
                            <StyledContainer1Box2Div3Div>
                                <p>Recents</p>
                                <StyledImg src={arow_down} alt="row_down" />
                            </StyledContainer1Box2Div3Div>
                        </StyledContainer1Box2Div3>

                        <StyledContainer1Box2Div4>

                            <StyledContainer1Box2Div4Div>
                                <StyledContainer1Box2Div4DivDiv1_1>
                                    <img src={heart} alt="image" />
                                </StyledContainer1Box2Div4DivDiv1_1>
                                <div>
                                    <p>Liked Songs</p>
                                    <p style={{color: "gray"}}>Playlist. 120 songs</p>
                                </div>
                            </StyledContainer1Box2Div4Div>
                            <StyledContainer1Box2Div4Div>
                                <StyledContainer1Box2Div4DivDiv1>
                                    <img src={heart} alt="image" />
                                </StyledContainer1Box2Div4DivDiv1>
                                <div>
                                    <p>Liked Songs</p>
                                    <p style={{color: "gray"}}>Playlist. 120 songs</p>
                                </div>
                            </StyledContainer1Box2Div4Div>
                            <StyledContainer1Box2Div4Div>
                                <StyledContainer1Box2Div4DivDiv1>
                                    <img src={heart} alt="image" />
                                </StyledContainer1Box2Div4DivDiv1>
                                <div>
                                    <p>Liked Songs</p>
                                    <p style={{color: "gray"}}>Playlist. 120 songs</p>
                                </div>
                            </StyledContainer1Box2Div4Div>
                            <StyledContainer1Box2Div4Div>
                                <StyledContainer1Box2Div4DivDiv1>
                                    <img src={heart} alt="image" />
                                </StyledContainer1Box2Div4DivDiv1>
                                <div>
                                    <p>Liked Songs</p>
                                    <p style={{color: "gray"}}>Playlist. 120 songs</p>
                                </div>
                            </StyledContainer1Box2Div4Div>
                            <StyledContainer1Box2Div4Div>
                                <StyledContainer1Box2Div4DivDiv1>
                                    <img src={heart} alt="image" />
                                </StyledContainer1Box2Div4DivDiv1>
                                <div>
                                    <p>Liked Songs</p>
                                    <p style={{color: "gray"}}>Playlist. 120 songs</p>
                                </div>
                            </StyledContainer1Box2Div4Div>
                            <StyledContainer1Box2Div4Div>
                                <StyledContainer1Box2Div4DivDiv1>
                                    <img src={heart} alt="image" />
                                </StyledContainer1Box2Div4DivDiv1>
                                <div>
                                    <p>Liked Songs</p>
                                    <p style={{color: "gray"}}>Playlist. 120 songs</p>
                                </div>
                            </StyledContainer1Box2Div4Div>
                            <StyledContainer1Box2Div4Div>
                                <StyledContainer1Box2Div4DivDiv1>
                                    <img src={heart} alt="image" />
                                </StyledContainer1Box2Div4DivDiv1>
                                <div>
                                    <p>Liked Songs</p>
                                    <p style={{color: "gray"}}>Playlist. 120 songs</p>
                                </div>
                            </StyledContainer1Box2Div4Div>
                            <StyledContainer1Box2Div4Div>
                                <StyledContainer1Box2Div4DivDiv1>
                                    <img src={heart} alt="image" />
                                </StyledContainer1Box2Div4DivDiv1>
                                <div>
                                    <p>Liked Songs</p>
                                    <p style={{color: "gray"}}>Playlist. 120 songs</p>
                                </div>
                            </StyledContainer1Box2Div4Div>

                        </StyledContainer1Box2Div4>

                    </StyledContainer1Box2>

                </StyledContainer1>



                <StyledContainer2>

                    <StyledContainer2Box1>

                        <StyledContainer2Box1Div1>
                            <StyledContainer2Box1Img src={left} alt="left" />
                            <StyledContainer2Box1Img src={right} alt="right" />
                        </StyledContainer2Box1Div1>
                        <StyledContainer2Box1Div2>
                            <StyledContainer2Box1Div2Input type="text" placeholder="Search in Albums"/>
                            <StyledContainer2Box1Div2Img src={search} alt="search" />
                        </StyledContainer2Box1Div2>
                        <StyledContainer2Box1Div3>
                            <StyledContainer2Box1Div3Div>Upgrade</StyledContainer2Box1Div3Div>
                            <StyledContainer2Box1Img src={invite} alt="invite" />
                            <StyledContainer2Box1Img src={user} alt="profile" />
                        </StyledContainer2Box1Div3>

                    </StyledContainer2Box1>

                    <StyledContainer2Box2>
                        <h1>Good Morning</h1>
                        <StyledContainer2Box2Div>

                            <StyledContainer2Box2DivDiv1>

                                <StyledContainer2Box2DivDiv>
                                    <StyledContainer2Box2Divimg src={code} alt="cover" />
                                    <p>Let's Code</p>
                                </StyledContainer2Box2DivDiv>
                                <StyledContainer2Box2DivDiv>
                                    <StyledContainer2Box2Divimg src={eve} alt="cover" />
                                    <p>This Is Eve</p>
                                </StyledContainer2Box2DivDiv>

                            </StyledContainer2Box2DivDiv1>
                            <StyledContainer2Box2DivDiv1>

                                <StyledContainer2Box2DivDiv>
                                    <StyledContainer2Box2Divimg src={gims} alt="cover" />
                                    <p>Gims</p>
                                </StyledContainer2Box2DivDiv>
                                <StyledContainer2Box2DivDiv>
                                    <StyledContainer2Box2Divimg src={loop} alt="cover" />
                                    <p>Loop</p>
                                </StyledContainer2Box2DivDiv>

                            </StyledContainer2Box2DivDiv1>
                            <StyledContainer2Box2DivDiv1>

                                <StyledContainer2Box2DivDiv>
                                    <StyledContainer2Box2Divimg src={oxt} alt="cover" />
                                    <p>This Is OxT</p>
                                </StyledContainer2Box2DivDiv>
                                <StyledContainer2Box2DivDiv>
                                    <StyledContainer2Box2Divimg src={sexion} alt="cover" />
                                    <p>Sexion d'Assaut</p>
                                </StyledContainer2Box2DivDiv>

                            </StyledContainer2Box2DivDiv1>

                        </StyledContainer2Box2Div>
                    </StyledContainer2Box2>

                    <StyledContainer2Box3>
                        <h1>Made For You</h1>
                        <StyledContainer2Box3Div>

                            <StyledContainer2Box3DivDiv>
                                <StyledContainer2Box3DivDivImg src={color} alt="cover" />
                                <StyledContainer2Box3DivDivp>Decouverte de la semaine</StyledContainer2Box3DivDivp>
                            </StyledContainer2Box3DivDiv>
                            <StyledContainer2Box3DivDiv>
                                <StyledContainer2Box3DivDivImg src={eve} alt="cover" />
                                <StyledContainer2Box3DivDivp>Daily Mix 1</StyledContainer2Box3DivDivp>
                            </StyledContainer2Box3DivDiv>
                            <StyledContainer2Box3DivDiv>
                                <StyledContainer2Box3DivDivImg src={oxt} alt="cover" />
                                <StyledContainer2Box3DivDivp>Daily Mix 2</StyledContainer2Box3DivDivp>
                            </StyledContainer2Box3DivDiv>

                        </StyledContainer2Box3Div>
                    </StyledContainer2Box3>

                </StyledContainer2>

            </StyledBox2>

        </StyledMenu>
    )
}

export default Dashboard;