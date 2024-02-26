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

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 20px;
    align-items: center;
    gap: 20px;
    backdrop-filter: blur(100px);
    width: 1488px;
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
    border: 1px solid red;
    border-radius: 10px;
`
const StyledContainer1Box1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid blue;
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
    border: 1px solid blue;
    overflow: hidden;
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
    border: 1px solid red;
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
                                <StyledImg src="" alt="plus" />
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
                                <StyledImg src="" alt="row_down" />
                            </StyledContainer1Box2Div3Div>
                        </StyledContainer1Box2Div3>

                        <StyledContainer1Box2Div4>
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

                    <div>

                        <div>
                            <StyledImg src={left} alt="left" />
                            <StyledImg src={right} alt="right" />
                        </div>
                        <div>
                            <input type="text" placeholder="Search in Albums"/>
                            <StyledImg src={search} alt="search" />
                        </div>
                        <div>
                            <div>Upgrade</div>
                            <StyledImg src={invite} alt="invite" />
                            <StyledImg src={user} alt="profile" />
                        </div>

                    </div>

                    <div>
                        <h1>Good Morning</h1>
                        <div>
                            <div>
                                <StyledImg src="" alt="cover" />
                                <p>Name</p>
                            </div>
                        </div>
                    </div>

                </StyledContainer2>

            </StyledBox2>

        </StyledMenu>
    )
}

export default Dashboard;