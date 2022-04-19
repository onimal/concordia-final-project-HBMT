import { useState } from "react";

import styled from "styled-components";
import moment from "moment";

import plante from "./assets/plante.png"
import plante2 from "./assets/plante2.png"


import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { ImSpinner3 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md"
import { RiCheckboxCircleLine } from "react-icons/ri"



const Appointment = () => {

    const [status, setStatus] = useState("idle");
    const [customerCreationStatus, setCustomerCreationStatus] = useState("")
    const [dialog, setDialog] = useState("");

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState("100");
    const [selectedLocation, setSelectedLocation] = useState("Clinic");
    const [selectedTherapist, setSelectedTherapist] = useState("Hélène Blat");
    const [selectedMassageType, setSelectedMassageType] = useState("Suédois");
    const [selectedDuration, setSelectedDuration] = useState("60");    
    const [customerLastName, setCustomerLastName] = useState("");
    const [customerFirstName, setCustomerFirstName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("")
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerZipCode, setCustomerZipCode] = useState("");
    const [customerCity, setCustomerCity] = useState("");
    const [customerComments, setCustomerComments] = useState("");
    
    const appointmentDate = moment(selectedDate).format('MMMM Do YYYY');
    

    const handleDateChange = (date) => {
        setSelectedDate(date._d);
    }

    const handleSlotChange = (event) => {
        setSelectedSlot(event.target.value);}
    
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

    const handleCustomerLastNameChange = (event) => {
        setCustomerLastName(event.target.value);        
    }
    
    const handleCustomerFirstNameChange = (event) => {        
        setCustomerFirstName(event.target.value);        
    }

    const handleCustomerEmailChange = (event) => {        
        setCustomerEmail(event.target.value);        
    }

    const handleCustomerPhoneChange = (event) => {        
        setCustomerPhone(event.target.value);        
    }

    const handleCustomerAddressChange = (event) => {
        setCustomerAddress(event.target.value);        
    }

    const handleCustomerZipCodeChange = (event) => {
        setCustomerZipCode(event.target.value);
    }

    const handleCustomerCityChange = (event) => {        
        setCustomerCity(event.target.value);        
    }

    const handleCustomerCommentsChange = (event) => {        
        setCustomerComments(event.target.value);        
    }

    

    


    const submitNewAppointment = () => {
        
        //if (formIsValid) {
            setStatus("loading");

            fetch('/appointments', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    
                },
                body: JSON.stringify({

                    date: appointmentDate,
                    customerlastname: customerLastName,
                    customerfirstname: customerFirstName,
                    slot: selectedSlot,
                    location: selectedLocation,
                    therapist: selectedTherapist,
                    massagetype: selectedMassageType,
                    duration: selectedDuration,
                    customercomments: customerComments
                })
                
            })
                .then((res) => res.json())
                .then((res) => 
                    {
                        if (res.status === 409){
                            setStatus("error")
                            setDialog("Non disponible, veuillez choisir un autre thérapeute, ou un autre horaire.")
                        } else if(res.status === 201) {
                            setStatus("success")
                            setDialog("Votre rendez-vous est confirmé, merci !")
                        }                
                    })
                .catch((error) => {
                    setStatus("error");
                })
            
            fetch('/customers', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    
                },
                body: JSON.stringify({

                    lastname: customerLastName,
                    firstname: customerFirstName,
                    email: customerEmail,
                    phone: customerPhone,
                    address: customerAddress,
                    zipcode: customerZipCode,
                    city: customerCity
                })
                
            })
                .then((res) => res.json())
                .then((res) => 
                    {
                        if (res.status === 409){
                            setCustomerCreationStatus("conflict: customer already in database")
                            
                        } else if(res.status === 201) {
                            setCustomerCreationStatus("success: new customer created")
                            
                        }                
                    })
                .catch((error) => {
                    setStatus("error");
                })
            
                setCustomerLastName("");
                setCustomerFirstName("");
                setCustomerEmail("");
                setCustomerPhone("");
                setCustomerAddress("");
                setCustomerZipCode("");
                setCustomerCity("");
                setCustomerComments("");
        //}
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
                                    <MassageTypeSelect onChange={handleMassageTypeChange}>
                                        <MassageTypeOptGroup >
                                            <Swedish value="swedish">Suédois</Swedish>
                                            <Californian value="californian">Californien</Californian>
                                            <LomiLomi value="lomi-lomi">Lomi-Lomi</LomiLomi>
                                            <Drainage value="drainage">Drainage Lymphatique</Drainage>
                                        </MassageTypeOptGroup>
                                    </MassageTypeSelect>
                                    <MassageDurationSelect onChange={handleDurationChange}>
                                        <MassageDurationOptGroup >
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
                        <CustomerTitle>Parlez-nous de vous</CustomerTitle>
                        <CustomerInfoWrapper>
                            <CustomerLastNameLabel htmlFor="lname">Nom</CustomerLastNameLabel>
                            <CustomerLastName type="text" id="lname" name="lname" onChange={handleCustomerLastNameChange} value={customerLastName} required />                        
                            <CustomerFirstNameLabel htmlFor="fname">Prénom</CustomerFirstNameLabel>
                            <CustomerFirstName type="text" id="fname" name="fname" onChange={handleCustomerFirstNameChange} value={customerFirstName} required />                        
                            <CustomerEmailLabel htmlFor="email">Courriel</CustomerEmailLabel>
                            <CustomerEmail type="email" id="email" name="email" onChange={handleCustomerEmailChange} value={customerEmail} required />                            
                            <CustomerPhoneLabel htmlFor="phone">Téléphone</CustomerPhoneLabel>
                            <CustomerPhone type="tel" id="phone" name="phone" onChange={handleCustomerPhoneChange} value={customerPhone} required />
                            <CustomerAddressLabel htmlFor="address">Adresse</CustomerAddressLabel>
                            <CustomerAddress type="text" id="address" name="address" onChange={handleCustomerAddressChange} value={customerAddress} required />                        
                            <CustomerZipCodeLabel htmlFor="zipcode">Code postal</CustomerZipCodeLabel>
                            <CustomerZipCode type="text" id="zipcode" name="zipcode" onChange={handleCustomerZipCodeChange} value={customerZipCode} required />
                            <CustomerCityLabel htmlFor="city">Ville</CustomerCityLabel>
                            <CustomerCity type="text" id="city" name="city" onChange={handleCustomerCityChange} value={customerCity} required />                        
                        </CustomerInfoWrapper>
                        <CustomerCommentsWrapper>
                        <CustomerCommentsLabel htmlFor="comments">Commentaires</CustomerCommentsLabel>
                        <CustomerComments type="text" wrap="soft" id="comments" name="comments" onChange={handleCustomerCommentsChange} value={customerComments}/>
                        </CustomerCommentsWrapper>
                </CustomerInfoArea>
            </AppointmentArea>
            <Footer>
                <DialogArea>
                    {status === "loading"
                    ? <Spinner size={25}/>
                    :
                    status === "error"
                    ?
                    <DialogWrapper>
                    <ErrorIcon size={25}/><ErrorMsg>{dialog}</ErrorMsg>
                    </DialogWrapper>
                    :
                    status === "success"
                    &&
                    <DialogWrapper>
                    <SuccessIcon size={25}/><ConfirmationMsg>{dialog}</ConfirmationMsg>
                    </DialogWrapper>
                    }
                </DialogArea>
                <BookButton
                    onClick={submitNewAppointment}
                    //disabled={formIsValid === false ? true : false}
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

    width: 80vw;
    display: grid;    
    grid-template-columns: 30% 20% 50%;
    justify-content: center;
`

const AppointmentWrapper = styled.div`    
    display: grid;
    grid-template-rows: 30% 70%;
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
    grid-template-rows: 30% 45%;
    align-items: center;
`

const CustomerTitle = styled.p`
    text-align: center;
    font-size: 24px;
    color: #7e9e6c;
`

const CustomerInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 100px auto;
    gap: 10px;
    align-items: center;
    
`

const CustomerFirstNameLabel = styled.label``
const CustomerFirstName = styled.input`
    padding-left: 10px;
    height: 30px;
`
const CustomerLastNameLabel = styled.label``
const CustomerLastName = styled.input`
    padding-left: 10px;
    height: 30px;
`
const CustomerEmailLabel = styled.label``
const CustomerEmail = styled.input`
    padding-left: 10px;
    height: 30px;
`
const CustomerPhoneLabel = styled.label``
const CustomerPhone = styled.input`
    padding-left: 10px;
    height: 30px;
`
const CustomerAddressLabel = styled.label``
const CustomerAddress = styled.input`
    padding-left: 10px;
    height: 30px;
`
const CustomerZipCodeLabel = styled.label``
const CustomerZipCode = styled.input`
    padding-left: 10px;
    height: 30px;
`
const CustomerCityLabel = styled.label``
const CustomerCity = styled.input`
    padding-left: 10px;
    height: 30px;
`

const CustomerCommentsWrapper = styled.div`
    
    display: grid;
    margin-top: 30px;
    gap: 10px;
`
const CustomerCommentsLabel = styled.label``
const CustomerComments = styled.textarea`
    padding: 10px;
    height: 100px;
    resize: none;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
`

const Footer = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 100px;
    gap: 30px;
`
const DialogArea = styled.div`
    width: 50vw;
    height: 50px;
    display: flex;  
    justify-content: center;
    align-items: center;
    //border: solid 1px black;
`
const DialogWrapper = styled.div `
    display: flex;
    gap: 10px;
    align-items: center;
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
const ErrorMsg = styled.p`
    font-size: 20px;
    color: #f54248;
`
const ErrorIcon = styled(MdErrorOutline )`
    color: #f54248;
`
const ConfirmationMsg = styled.p`
    font-size: 20px;
    color: #629147;
`
const SuccessIcon = styled(RiCheckboxCircleLine )`
    color: #629147;
`

const BookButton = styled.button`

    all: unset;
    cursor: pointer;
    height: 50px;
    width: 300px;
    //margin-top: 10px;
    background-color: transparent;
    border: solid 1px #7e9e6c;
    border-radius: 10px;
    color: #7e9e6c;
    font-size: 20px;
    font-variant-caps: small-caps;
    text-align: center;
    :hover:enabled{
        color: whitesmoke;
        background-color: #7e9e6c;
        
    }
    :disabled{
        color: gray;
        border-color: gray;
    }
`

export default Appointment;