import styled from "styled-components";

import React from 'react'
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
    grid-template-columns: 40% 20% 40%;
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
    height: 70vh;
    display: grid;
    grid-template-rows: 20% 20% 60%;
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
    background-color: #7e9e6c;
`
const Therapist01Name = styled.p`
    color: white;
    font-size: 30px;
    font-variant-caps: small-caps;
`
const Therapist01Phone = styled.p`
    color: white;
    font-size: 20px;
`

const Therapist01Email = styled.p`
    color: white;
    font-size: 20px;
`

const TherapistInfo02 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;    
    background-color: #7e9e6c;
`
const Therapist02Name = styled.p`
    color: white;
    font-size: 30px;
    font-variant-caps: small-caps;
`
const Therapist02Phone = styled.p`
    color: white;
    font-size: 20px;
`

const Therapist02Email = styled.p`
    color: white;
    font-size: 20px;
`

const CenterInfo = styled.div`
    display: grid;
    grid-template-rows: 30% 70%;
    border-radius: 10px;
    background-color: #7e9e6c;
    
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
    font-size: 30px;
    font-variant-caps: small-caps;
    
`
const CenterAddress = styled.p`
    color: white;
    font-size: 20px;
`

const CenterPhone = styled.p`
    color: white;
    font-size: 20px;
`

const GoogleMapWrapper = styled.div`
    justify-self: center;
    align-self: flex-end;
    padding-bottom: 20px;
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
export default Contact;