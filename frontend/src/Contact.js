import styled from "styled-components";

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 45.548280,
    lng: -73.591830
};

const Contact = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBVvhUNEQQw40-dlwNMzOXNcEOb3Q6MsFM"
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
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={18}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <></>
                    </GoogleMap>
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
    grid-template-rows: 10% 80% 10%;
    justify-content: center;  

`

export default Contact;