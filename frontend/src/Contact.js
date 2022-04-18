import styled from "styled-components";

import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import plante from "./assets/plante.png"
import plante2 from "./assets/plante2.png"

const containerStyle = {
    width: '250px',
    height: '250px'
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
    
        const [map, setMap] = React.useState(null)
    
        const onLoad = React.useCallback(function callback(map) {
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
            setMap(map)
        }, [])
    
        const onUnmount = React.useCallback(function callback(map) {
            setMap(null)
        }, [])
        
        // e-mail functionality built with the help of this source: https://w3collective.com/react-contact-form/
        

            const [status, setStatus] = useState("Submit");

            const handleSubmit = async (event) => {
                event.preventDefault();
                setStatus("Sending");
                const {name, subject, message} = event.target.elements;
                let details = {
                    name: name.value,
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
                alert(result.status);
            };
        



        return isLoaded ? (
            <Wrapper>
            <ContactWrapper>
                <ContactArea>
                    <ContactInfo>
                        <TherapistInfo01>
                            <Therapist01Name>Hélène Blat</Therapist01Name>
                            <Therapist01Phone>(514) 557-1234</Therapist01Phone>
                            <Therapist01Email>helene.blat@masso.com</Therapist01Email>
                        </TherapistInfo01>
                        <TherapistInfo02>
                            <Therapist02Name>Katia Breton</Therapist02Name>
                            <Therapist02Phone>(514) 557-4321</Therapist02Phone>
                            <Therapist02Email>katia.breton@masso.com</Therapist02Email>
                        </TherapistInfo02>
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
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            >{}<></>
                            </GoogleMap>
                        </GoogleMapWrapper>
                        </CenterInfo>
                    </ContactInfo>
                </ContactArea>
                <SeparatorArea>
                    <PlantImage src={plante} />
                    <PlantImage2 src={plante2} />
                </SeparatorArea>
                <EmailFormArea>
                <form onSubmit={handleSubmit}> 
                    <EmailFormWrapper>                    
                            <SenderWrapper>
                                <SenderNameLabel htmlFor="name">Nom</SenderNameLabel>
                                <SenderName type="text" id="name" name="name" required />
                                <SenderEmailLabel htmlFor="email">Courriel</SenderEmailLabel>
                                <SenderEmail type="email" id="email" name="email" required />
                            </SenderWrapper>
                            <SubjectWrapper>
                                <SubjectLabel htmlFor="subject">Objet</SubjectLabel>
                                <Subject type="text" id="subject" name="subject" required />
                            </SubjectWrapper>
                            <BodyWrapper>
                                <BodyLabel htmlFor="body">Message</BodyLabel>
                                <Body type="text" wrap="soft" id="body" name="body" required />
                            </BodyWrapper>
                            <ButtonWrapper>
                                <SendButton>Envoyer</SendButton>
                            </ButtonWrapper>
                    </EmailFormWrapper>
                </form>
                </EmailFormArea>
            </ContactWrapper>
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

const ContactWrapper = styled.div`
    height: 85vh;
    width: 98vw;
    margin-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: white;
    box-shadow: 1px 8px 8px #888888;
    display: grid;
    grid-template-columns: 40% 10% 50%;
    justify-content: center;  
`
const ContactArea = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;   
    justify-content: center;
`

const ContactInfo = styled.div`
    width: 30vw;
    height: 65vh;
    display: grid;
    grid-template-rows: 15% 15% 70%;
    gap: 20px;
    align-self: center;    
`
const TherapistInfo01 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;    
    border:solid 1px #7e9e6c;
`
const Therapist01Name = styled.p`
    color: #7e9e6c;
    font-size: 24px;
    font-variant-caps: small-caps;
`
const Therapist01Phone = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`

const Therapist01Email = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`

const TherapistInfo02 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;    
    border: solid 1px #7e9e6c;
`
const Therapist02Name = styled.p`
    color: #7e9e6c;
    font-size: 24px;
    font-variant-caps: small-caps;
`
const Therapist02Phone = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`

const Therapist02Email = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`

const CenterInfo = styled.div`
    height: 45vh;
    display: grid;
    grid-template-rows: 30% 70%;
    border-radius: 10px;
    border: solid 1px #7e9e6c;
    
`
const CenterInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const CenterName = styled.p`
    color: #7e9e6c;
    font-size: 24px;
    font-variant-caps: small-caps;
    
`
const CenterAddress = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`

const CenterPhone = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`

const GoogleMapWrapper = styled.div`
    justify-self: center;
    align-self: flex-end;
    padding-bottom: 40px;
`

const SeparatorArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //gap: 50px;
`
const PlantImage = styled.img`    
    width: 90px;
    height: 200px;
    
`
const PlantImage2 = styled.img`    
    width: 90px;
    height: 200px;   
    
`

const EmailFormArea = styled.div`
    
    height: 78vh;
    display: flex;
    flex-direction: column;   
    justify-content: center;
`
const EmailFormWrapper = styled.div`
    
    width: 40vw;
    height: 70vh;    
    align-self: center; 
    
`
const SenderWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-color: #7e9e6c;
    border-radius: 10px;
    gap: 10px;
    
`
const SenderNameLabel = styled.label`
    font-size: 18px;
    color: #7e9e6c;
`
const SenderName = styled.input`
    all: unset;
    height: 50px;
    border-radius: 10px;
    border: solid 1px #7e9e6c;
    color: gray;
    padding-left: 10px;
    padding-right: 10px;
`
const SenderEmailLabel = styled.label`
    font-size: 18px;
    color: #7e9e6c;
`
const SenderEmail = styled.input`
    all: unset;
    height: 50px;
    border-radius: 10px;
    border: solid 1px #7e9e6c;
    color: gray;
    padding-left: 10px;
    padding-right: 10px;
`
const SubjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-color: #7e9e6c;
    border-radius: 10px;
    
`

const SubjectLabel = styled.label`
    margin-bottom: 10px;
    font-size: 18px;
    color: #7e9e6c;
`
const Subject = styled.input`
    all: unset;
    height: 50px;
    border-radius: 10px;
    border: solid 1px #7e9e6c;
    color: gray;
    padding-left: 10px;
    padding-right: 10px;
`
const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-color: #7e9e6c;
    border-radius: 10px;
`
const BodyLabel = styled.label`
    margin-bottom: 10px;
    font-size: 18px;
    color: #7e9e6c;
`
const Body = styled.textarea`
    all: unset;
    resize: none;
    height: 20vh;
    border-radius: 10px;
    border: solid 1px #7e9e6c;
    color: gray;
    padding: 25px;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100px;
    padding-right: 20px;
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

export default Contact;