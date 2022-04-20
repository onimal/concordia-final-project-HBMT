import {FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutubeSquare} from "react-icons/fa"

import image from "./assets/helene-carterecto.png";
import styled from "styled-components";

const Homepage = () => {

    return (
        <Wrapper>
            <HomepageWrapper>                
                <Image src={image} />
                    <SocialsWrapper>
                        <a href="#">
                        <FacebookIcon size="25" />
                        </a>
                        <a href="#">
                        <InstagramIcon size="25" />
                        </a>
                        <a href="#">
                        <LinkedInIcon size="25" />
                        </a>
                        <a href="#">
                        <YoutubeIcon size="25" />
                        </a>
                    </SocialsWrapper>
            </HomepageWrapper>            
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    min-width: 640px;
    display: flex;
    justify-content: center;
`
const HomepageWrapper = styled.div`
    height: 85vh;
    width: 98vw;
    margin-top: 0px;
    border-radius: 0px 0px 10px 10px;
    background-color: white;
    box-shadow: 1px 8px 8px #888888;
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 95%;    
    border-radius: 5px;
    opacity: 85%;
`
const SocialsWrapper=styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;
`
const FacebookIcon = styled(FaFacebook)`    
    color: #7e9e6c;
`
const InstagramIcon = styled(FaInstagramSquare)`    
    color: #7e9e6c;
`
const LinkedInIcon = styled(FaLinkedin)`    
    color: #7e9e6c;
`
const YoutubeIcon = styled(FaYoutubeSquare)`    
    color: #7e9e6c;
`
export default Homepage;