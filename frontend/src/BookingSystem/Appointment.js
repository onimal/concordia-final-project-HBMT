import { useState } from "react";

import styled from "styled-components";
import moment from "moment";

import plante from "../assets/plante.png"
import plante2 from "../assets/plante2.png"


import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";





const Appointment = () => {

    const [status, setStatus] = useState("loading");

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState("100");
    const [selectedLocation, setSelectedLocation] = useState("Clinic");
    const [selectedTherapist, setSelectedTherapist] = useState("Hélène Blat");
    const [selectedMassageType, setSelectedMassageType] = useState("Suédois");
    const [selectedDuration, setSelectedDuration] = useState("60");
    
    const appointmentDate = moment(selectedDate).format('MMMM Do YYYY');

    const handleDateChange = (date) => {
        setSelectedDate(date._d);
    }

    const handleSlotChange = (event) => {
        setSelectedSlot(event.target.value);
    }
    
    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    }
    
    const handleTherapistChange = (event) => {
        setSelectedTherapist(event.target.value);
    }

    const handleMassageTypeChange = (event) => {
        setSelectedMassageType(event.target.value);
    }

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
    }
    
    
    const submitNewAppointment = () => {

        fetch('/appointments')
            .then((res) => res.json())
            .then((data) => {
                
                //POST date && therapist => to endpoint with findOne()
                //if not exist in response, next fetch "POST" can run
                
                
                console.log(data)
                
            })
        
        
        
        fetch('/appointments', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({

                date: appointmentDate,
                slot: selectedSlot,
                location: selectedLocation,
                therapist: selectedTherapist,
                massagetype: selectedMassageType,
                duration: selectedDuration
            })
            
        })
            .then((res) => res.json())
            .then((res) => console.log())
            .catch((error) => {
                setStatus(error);
            })
        
    }


    return (
        <Wrapper>
            <MainArea>
            <AppointmentArea>
                <AppointmentWrapper>
                    <AppointmentTitleArea>
                        <AppointmentTitle>Personnalisez votre moment de détente</AppointmentTitle>
                    </AppointmentTitleArea>
                    <SelectionArea>
                        <DateTimeArea>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker
                                    label="Sélectionner la date et l'heure"                                
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    minDate={moment()}
                                    showTodayButton={true}                                
                                    renderInput={(props) => <TextField {...props} />}
                                />
                                <TimePickerSelect onChange={handleSlotChange}>
                                    <TimePickerOptGroup >
                                        <TimePickerSlot01 value="100">10h - 11h</TimePickerSlot01>
                                        <TimePickerSlot02 value="200">11h - 12h</TimePickerSlot02>
                                        <TimePickerSlot03 value="300">12h - 13h</TimePickerSlot03>
                                        <TimePickerSlot04 value="400">13h - 14h</TimePickerSlot04>
                                        <TimePickerSlot05 value="500">14h - 15h</TimePickerSlot05>
                                        <TimePickerSlot06 value="600">15h - 16h</TimePickerSlot06>
                                        <TimePickerSlot07 value="700">16h - 17h</TimePickerSlot07>
                                        <TimePickerSlot08 value="800">17h - 18h</TimePickerSlot08>
                                        <TimePickerSlot09 value="900">18h - 19h</TimePickerSlot09>
                                    </TimePickerOptGroup>
                                </TimePickerSelect>
                                
                            </LocalizationProvider>
                        </DateTimeArea>
                        <LocationArea onChange={handleLocationChange}>
                            <p style={{fontSize:20,color:"#7e9e6c"}}>Choisissez le lieu de votre massage :</p>
                                <LocationWrapper>
                                    <label style={{fontSize:16}}>
                                    <Clinic
                                        type="radio"
                                        name="Location"                            
                                        value="Clinic"
                                        defaultChecked
                                    />
                                    Au centre "Un pas vers Soi"
                                    </label>
                                    <label style={{fontSize:16}}>
                                    <Home
                                        type="radio"
                                        name="Location"                            
                                        value="Home"
                                    />
                                    À votre domicile
                                    </label>
                                </LocationWrapper>
                        </LocationArea>
                        <TherapistArea onChange={handleTherapistChange}>
                        <p style={{fontSize:20,color:"#7e9e6c"}}>Choisissez votre massothérapeute :</p>
                                <TherapistWrapper>
                                    <label style={{fontSize:16}}>
                                    <FirstTherapist
                                        type="radio"
                                        name="Therapist"                            
                                        value="Hélène Blat"
                                        defaultChecked
                                    />
                                    Hélène Blat
                                    </label>
                                    <label style={{fontSize:16}}>
                                    <SecondTherapist
                                        type="radio"
                                        name="Therapist"                            
                                        value="Katia Breton"
                                    />
                                    Katia Breton
                                    </label>
                                </TherapistWrapper>
                        </TherapistArea>
                        <MassageTypeArea>
                        <p style={{fontSize:20,color:"#7e9e6c"}}>Quel type de massage souhaitez-vous?</p>
                                <MassageTypeWrapper>
                                    <MassageTypeSelect>
                                        <MassageTypeOptGroup onChange={handleMassageTypeChange}>
                                            <Swedish value="swedish">Suédois</Swedish>
                                            <Californian value="californian">Californien</Californian>
                                            <LomiLomi value="lomi-lomi">Lomi-Lomi</LomiLomi>
                                            <Drainage value="drainage">Drainage Lymphatique</Drainage>
                                        </MassageTypeOptGroup>
                                    </MassageTypeSelect>
                                    <MassageDurationSelect>
                                        <MassageDurationOptGroup onChange={handleDurationChange}>
                                            <Sixty value="60">60 min.</Sixty>
                                            <SeventyFive value="75">75 min.</SeventyFive>
                                            <Ninety value="90">90 min.</Ninety>                                        
                                        </MassageDurationOptGroup>
                                    </MassageDurationSelect>
                                </MassageTypeWrapper>
                        </MassageTypeArea>                    
                    </SelectionArea>
                </AppointmentWrapper>
                <SeparatorArea>
                    <PlantImage src={plante} />
                    <PlantImage2 src={plante2} />
                </SeparatorArea>
                <CustomerInfoArea>
                    <CustomerInfoWrapper>
                        <CustomerTitleArea>
                            <CustomerTitle>Parlez-nous de vous</CustomerTitle>
                        </CustomerTitleArea>
                    </CustomerInfoWrapper>
                </CustomerInfoArea>
            </AppointmentArea>
            <Footer>
                <Dialog>

                </Dialog>
                <BookButton
                    onClick={submitNewAppointment}
                >Réservez votre massage</BookButton>
            </Footer>
            </MainArea>
        </Wrapper>
    )

};



const Wrapper = styled.div`
    width: 100vw;
    min-width: 640px;
    display: flex;    
    justify-content: center;
`
const MainArea = styled.div`    
    height: 85vh;
    width: 98%;
    margin-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: white;
    box-shadow: 1px 8px 8px #888888;
    display: grid;    
    justify-content: center;    
`

const AppointmentArea = styled.div`

    width: 1400px;
    display: grid;    
    grid-template-columns: 40% 20% 40%;
    justify-content: center;
`

const AppointmentWrapper = styled.div`    
    display: grid;
    grid-template-rows: 15% 85%;    
    justify-content: center;  

`
const AppointmentTitleArea = styled.div`    
    justify-self: center;
    align-self: center;
`
const AppointmentTitle = styled.p`
    font-size: 24px;
    color: #7e9e6c;
`
const SelectionArea = styled.div`
    display: grid;
    grid-template-rows: 100px 100px 100px 100px;
    align-items: center;
`
const DateTimeArea = styled.div`
    display: flex;
    justify-content: center;
    gap:20px;
`
const TimePickerOptGroup = styled.optgroup`    
    height: 100%;
    font-size: 16px;
    
`

const TimePickerSelect = styled.select`
    border-radius: 3px;
    background: transparent;
    border: solid 1px darkgray;
    text-align-last: center;
    :hover{
        border-color: black;
    }
    :focus{
        border-color: black;
    }
`
const TimePickerSlot01 = styled.option``
const TimePickerSlot02 = styled.option``
const TimePickerSlot03 = styled.option``
const TimePickerSlot04 = styled.option``
const TimePickerSlot05 = styled.option``
const TimePickerSlot06 = styled.option``
const TimePickerSlot07 = styled.option``
const TimePickerSlot08 = styled.option``
const TimePickerSlot09 = styled.option``

const LocationArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
const LocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Clinic = styled.input`
    accent-color: #7e9e6c;
`
const Home = styled.input`
    accent-color: #7e9e6c;

`
const TherapistArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
const TherapistWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const FirstTherapist = styled.input`
    accent-color: #7e9e6c;
`
const SecondTherapist = styled.input`
    accent-color: #7e9e6c;
`
const MassageTypeArea = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
const MassageTypeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const MassageTypeSelect = styled.select`
    
    height: 50px;
    width: 260px;
    font-size: 16px;
    border-radius: 3px;
    background: transparent;
    border: solid 1px darkgray;
    text-align-last: center;
    :hover{
        border-color: black;
    }
    :focus{
        border-color: black;
    }
`
const MassageTypeOptGroup = styled.optgroup`    
`
const Swedish = styled.option``
const Californian = styled.option``
const LomiLomi = styled.option``
const Drainage = styled.option``

const MassageDurationSelect = styled.select`
    
    height: 50px;
    width: 110px;
    font-size: 16px;
    border-radius: 3px;
    background: transparent;
    border: solid 1px darkgray;
    text-align-last: center;
    :hover{
        border-color: black;
    }
    :focus{
        border-color: black;
    }
`
const MassageDurationOptGroup = styled.optgroup`        
`
const Sixty = styled.option``
const SeventyFive = styled.option``
const Ninety = styled.option``


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
const CustomerInfoArea = styled.div`
    
    display: grid;
    grid-template-rows: 15% 85%;   
    justify-content: center;
    align-items: center;
`
const CustomerTitleArea = styled.div`
    
`
const CustomerTitle = styled.p`
    font-size: 24px;
    color: #7e9e6c;
`
const CustomerInfoWrapper = styled.div`
    
`

const Footer = styled.div`
    //height: 30vh;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    gap: 30px;

`
const Dialog = styled.div`
    width: 50vw;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    border: solid 1px black;
`
const BookButton = styled.button`

    all: unset;
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

export default Appointment;