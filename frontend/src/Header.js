import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Header = () => {

    return (
        <Wrapper>
            <HeaderWrapper>                
                <WelcomeLink to={"/"} end={true}>Bienvenue !</WelcomeLink>
                <BioLink to={"/bio"} end={true}>Qui sommes-nous ?</BioLink>
                <MassageTypesLink to={"/services"} end={true}>Nos approches</MassageTypesLink>
                <AppointmentLink to={"/appointment"} end={true}>Prendre rendez-vous</AppointmentLink>
                <ContactLink to={"/contact"} end={true}>Contactez-nous !</ContactLink>                
            </HeaderWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    min-width: 640px;
    display: flex;
    justify-content: center;
`
const HeaderWrapper = styled.div`
    height: 10vh;
    width: 98vw;
    margin-top: 20px;
    border-radius: 10px 10px 0px 0px;
    background-color: white;
    box-shadow: 1px 7px 8px #888888;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-evenly;
    align-items: center;    
`
const WelcomeLink = styled(NavLink)`    
    text-decoration: none;
    color: gray;
    font-size: 20px;
    font-variant-caps: small-caps;
    &.active {
        color: #7e9e6c;
        text-decoration: underline;
        text-underline-offset: 10px;
    }
`
const BioLink = styled(NavLink)`
    text-decoration: none;
    color: gray;
    font-size: 20px;
    font-variant-caps: small-caps;
    &.active {
        color: #7e9e6c;
        text-decoration: underline;
        text-underline-offset: 10px;
    }
`
const MassageTypesLink = styled(NavLink)`
    text-decoration: none;
    color: gray;
    font-size: 20px;
    font-variant-caps: small-caps;
    &.active {
        color: #7e9e6c;
        text-decoration: underline;
        text-underline-offset: 10px;
    }    
`
const AppointmentLink = styled(NavLink)`
    text-decoration: none;
    color: gray;
    font-size: 20px;
    font-variant-caps: small-caps;
    &.active {
        color: #7e9e6c;
        text-decoration: underline;
        text-underline-offset: 10px;
    }
`
const ContactLink = styled(NavLink)`
    text-decoration: none;
    color: gray;
    font-size: 20px;
    font-variant-caps: small-caps;
    &.active {
        color: #7e9e6c;
        text-decoration: underline;
        text-underline-offset: 10px;
    }    
`

export default Header;