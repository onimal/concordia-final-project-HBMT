import styled from "styled-components";

import plante from "./assets/plante.png"

import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { ImSpinner3 } from "react-icons/im";


const containerStyle = {
    width: '300px',
    height: '300px'
};

const center = {
    lat: 45.548280,
    lng: -73.591830
};

const Contact = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBVKfjw0XtqPZGZ1cFLvnEmUW1Wup_vQvk"
        })
    

        // e-mail functionality built with the help of this source: https://w3collective.com/react-contact-form/
        const [status, setStatus] = useState("idle");

        const handleSubmit = async (event) => {
            event.preventDefault();
            setStatus("sending");
            //console.log(status);
            const {name, email, subject, message} = event.target.elements;
            let details = {
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            };
            let response = await fetch('/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });

            setStatus("Submit");
            let result = await response.json();
            
            setStatus(result.status)
            //console.log(status);
            event.target.reset();
        };
        



        return isLoaded ? (
            <Wrapper>
                <Main>
                    <ContactArea>
                        <ContactInfoWrapper>
                            <TherapistsInfoArea>
                                <TherapistInfoWrapper>
                                    <TherapistName>Hélène Blat</TherapistName>
                                    <TherapistPhone>(514) 557-1234</TherapistPhone>
                                    <TherapistEmail>helene.blat@masso.com</TherapistEmail>
                                </TherapistInfoWrapper>
                                <TherapistInfoWrapper>
                                    <TherapistName>Katia Breton</TherapistName>
                                    <TherapistPhone>(514) 557-4321</TherapistPhone>
                                    <TherapistEmail>katia.breton@masso.com</TherapistEmail>
                                </TherapistInfoWrapper>
                            </TherapistsInfoArea>
                            <CenterInfo>
                                <CenterInfoWrapper>
                                    <CenterName>Centre de Massothérapie Un Pas Vers Soi</CenterName>
                                    <CenterAddress>2450 Rue Beaubien E, Montréal, QC H2G 1N4</CenterAddress>
                                    <CenterPhone>(514) 886-1558</CenterPhone>
                                </CenterInfoWrapper>
                                <GoogleMapWrapper>
                                    <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={18}
                                    >{}<></>
                                    </GoogleMap>
                                </GoogleMapWrapper>
                            </CenterInfo>
                        </ContactInfoWrapper>
                        <PlantImage src={plante} />
                        <EmailFormWrapper>
                            <Title>Envoyez-nous un courriel</Title>
                            <form onSubmit={handleSubmit}> 
                                <InputWrapper>
                                    <Label htmlFor="name">Nom</Label>
                                    <Input type="text" id="name" name="name" required />
                                    <Label htmlFor="email">Courriel</Label>
                                    <Input type="email" id="email" name="email" required />
                                    <Label htmlFor="subject">Objet</Label>
                                    <Input type="text" id="subject" name="subject" required />                                
                                <MessageWrapper>
                                    <Label htmlFor="message">Message</Label>
                                    <Message type="text" wrap="soft" id="message" name="message" required />
                                </MessageWrapper>
                                </InputWrapper>
                                <FooterWrapper>
                                    <SendButton>Envoyer</SendButton>
                                        {status === "error"
                                        ? <ErroMsg>Erreur !</ErroMsg>
                                        : status === "message sent" 
                                        ? <Dialog>Message envoyé !</Dialog>
                                        : status === "sending" 
                                        && <Spinner size={25}/>
                                        }
                                </FooterWrapper>
                            </form>
                        </EmailFormWrapper>
                    </ContactArea>
                
                
                
                </Main>
            </Wrapper>
        )
        : <></>
}


const Wrapper = styled.div`
    width: 100vw;
    min-width: 640px;
    display: flex;
    justify-content: center;
`

const Main = styled.div`
    height: 85vh;
    width: 98vw;
    margin-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: white;
    box-shadow: 1px 8px 8px #888888;
`
const ContactArea = styled.div`
    //border: solid 1px black;
    height: 80vh;
    display: grid;
    justify-content: center;
    grid-template-columns: 40% 10% 40%;    
`
const ContactInfoWrapper = styled.div`    
    background-color: #7e9e6c;
    border-radius: 5px;
    height: 75vh;
    width: 40vw;
    justify-self: center;
    align-self: center;
    display: grid;
    justify-content: center;
    align-items: center;
    
`
const PlantImage = styled.img`
    width: 100px;
    justify-self: center;
    align-self: center;
    opacity: 70%;
`

const TherapistsInfoArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
`
const TherapistInfoWrapper = styled.div`
    //width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    //border-radius: 5px;    
    //border:solid 1px gray;
`
const TherapistName = styled.p`
    color: white;
    font-size: 24px;
    font-variant-caps: small-caps;
`
const TherapistPhone = styled.p`
    color: white;
    font-size: 18px;
`

const TherapistEmail = styled.p`
    color: white;
    font-size: 18px;
`
const CenterInfo = styled.div`
    width: 30vw;
    height: 55vh;
    display: grid;
    grid-template-rows: 30% 70%;
    //border-radius: 5px;
    //border: solid 1px gray;
    
`
const CenterInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const CenterName = styled.p`
    color: white;
    font-size: 24px;
    font-variant-caps: small-caps;
    
`
const CenterAddress = styled.p`
    color: white;
    font-size: 18px;
`

const CenterPhone = styled.p`
    color: white;
    font-size: 18px;
`
const GoogleMapWrapper = styled.div`
    justify-self: center;
    align-self: flex-end;
    padding-bottom: 40px;
`
const EmailFormWrapper = styled.div`    
    border: solid 1px #7e9e6c;
    border-radius: 5px;
    height: 75vh;
    width: 40vw;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    //gap: 20px;
`
const Title = styled.p`
    font-size: 24px;
    padding: 20px;
    text-align: center;
`
const InputWrapper = styled.div`
    display: grid;
    gap: 10px;
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 10px;
`
const Input = styled.input`
    width: 30vw;
    border: 0px;
    border-bottom: solid 1px #7e9e6c;
    padding-left: 10px;
    font-size: 16px;
    &:focus{
        outline: none;
    }
`

const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`

const Message = styled.textarea`
    //margin-top: 30px;
    padding: 10px;
    height: 300px;
    resize: none;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
    border: solid 1px #7e9e6c;
    &:focus{
        outline: none;
    }
`
const FooterWrapper = styled.div`
    display: flex;
    
`
const SendButton = styled.button`

    all: unset;
    cursor: pointer;
    height: 50px;
    width: 300px;
    background-color: transparent;
    border: solid 1px #7e9e6c;
    border-radius: 10px;
    color: #7e9e6c;
    font-size: 20px;
    font-variant-caps: small-caps;
    text-align: center;
    :hover{
        color: whitesmoke;
        background-color: #7e9e6c;        
    }
    
`
const ErroMsg = styled.p`
    font-size: 20px;
    color: #f54248;
`

const Dialog = styled.p`
    font-size: 20px;
`
const Spinner = styled(ImSpinner3)`
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    color: #7e9e6c;

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`

export default Contact;