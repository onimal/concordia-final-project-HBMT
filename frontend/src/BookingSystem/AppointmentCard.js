import { useState } from "react";

import styled from "styled-components";
import moment from "moment";


import Card from "@mui/material/Card";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";



const AppointmentCard = () => {

    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedTherapist, setSelectedTherapist] = useState("");
    const [selectedMassageType, setSelectedMassageType] = useState("");
    
    
    
    const appointmentDate = moment(selectedDate).format('MMMM Do YYYY, h:mm a')


    console.log(appointmentDate);
    console.log(selectedLocation);
    console.log(selectedTherapist);
    console.log(selectedMassageType);


    const handleDateChange = (date) => {
        setSelectedDate(date._d);
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

    fetch('/appointments')
            .then((res) => res.json())
            .then((data) => {
                //console.log(data)
            })
    
    
    const submitNewAppointment = () => {

                
        
        
        
        fetch('/appointments', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({

                date: appointmentDate,
                location: selectedLocation,
                therapist: selectedTherapist,
                massagetype: selectedMassageType,
            })
            
        })
        .then((res) => res.json())
        .then((res) => console.log())
    }


    return (
        <Wrapper>
            <CardWrapper>
                <TitleArea>
                <Title>Book your appointment</Title>
                </TitleArea>
                <SelectionArea>
                    <DateTimeArea>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Select Date"                                
                                value={selectedDate}
                                onChange={handleDateChange}
                                minDate={moment()}
                                showTodayButton={true}                                
                                renderInput={(props) => <TextField {...props} />}
                            />
                            <TimePicker
                                label="Select Time"                                
                                value={selectedDate}
                                onChange={handleDateChange}
                                renderInput={(props) => <TextField {...props} />}
                            />
                        </LocalizationProvider>
                    </DateTimeArea>
                    <LocationArea onChange={handleLocationChange}>
                        <p>Choose Location:</p>
                            <LocationWrapper>
                                <label>
                                <Clinic
                                    type="radio"
                                    name="Location"                            
                                    value="Clinic"
                                    defaultChecked
                                />
                                At the clinic
                                </label>
                                <label>
                                <Home
                                    type="radio"
                                    name="Location"                            
                                    value="Home"
                                />
                                At your home
                                </label>
                            </LocationWrapper>
                    </LocationArea>
                    <TherapistArea onChange={handleTherapistChange}>
                    <p>Who do you want a massage with?</p>
                            <TherapistWrapper>
                                <label>
                                <FirstTherapist
                                    type="radio"
                                    name="Therapist"                            
                                    value="Hélène Blat"
                                    defaultChecked
                                />
                                Hélène Blat
                                </label>
                                <label>
                                <SecondTherapist
                                    type="radio"
                                    name="Therapist"                            
                                    value="Katia Breton"
                                />
                                Katia Breton
                                </label>
                            </TherapistWrapper>
                    </TherapistArea>
                    <MassageTypeArea onChange={handleMassageTypeChange}>
                    <p>Which type of massage would you like?</p>
                        <FormControl fullWidth>
                            <InputLabel variant="filled">Select Massage</InputLabel>
                            <Select
                                value={selectedMassageType}
                                onChange={handleMassageTypeChange}                                
                            >
                                <MenuItem value={"Swedish"}>Swedish</MenuItem>
                                <MenuItem value={"Californian"}>Californian</MenuItem>
                                <MenuItem value={"Lomi-Lomi"}>Lomi-Lomi</MenuItem>

                            </Select>
                        </FormControl>
                    </MassageTypeArea>
                    <CustomerInfoArea>
                    <p>Provide your info</p>
                    </CustomerInfoArea>
                </SelectionArea>
                <ButtonsArea>
                    <BookButton
                        onClick={submitNewAppointment}
                    >Make your appointment</BookButton>
                </ButtonsArea>                
            </CardWrapper>
        </Wrapper>
    )

};

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`

const CardWrapper = styled(Card)`

    height: 90%;
    width: 50%;
    display: grid;
    grid-template-rows: 10% 80% 10%;
    justify-content: center;   
`

const TitleArea = styled.div`    
    justify-self: center;
    align-self: center;
`
const Title = styled.p`
    font-size: 24px;
    
`
const SelectionArea = styled.div`
    
`
const DateTimeArea = styled.div`
    display: flex;
    gap:20px;
`
const LocationArea = styled.div`
    
`
const LocationWrapper = styled.div`
    display: flex;
    flex-direction: column;

`

const Clinic = styled.input`

`
const Home = styled.input`

`
const TherapistArea = styled.div`
`
const TherapistWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const FirstTherapist = styled.input`

`
const SecondTherapist = styled.input`

`
const MassageTypeArea = styled.div`
`
const MassageTypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const CustomerInfoArea = styled.div`
`

const ButtonsArea = styled.div`
`
const BookButton = styled(Button)`
`

export default AppointmentCard;