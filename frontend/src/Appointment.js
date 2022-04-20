import { useState } from "react";

import styled from "styled-components";
import moment from "moment";


import plante from "./assets/plante.png"


import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { ImSpinner3 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md"
import { RiCheckboxCircleLine } from "react-icons/ri"


import Confirmation from "./Confirmation";



const Appointment = () => {

    //initializing states
    const [status, setStatus] = useState("idle");
    const [customerCreationStatus, setCustomerCreationStatus] = useState("")
    const [dialog, setDialog] = useState("");

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState("100");
    const [slotLabel, setSlotLabel] = useState("123");
    const [selectedLocation, setSelectedLocation] = useState("Clinic");
    const [locationLabel, setLocationLabel] = useState ("");
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


    
    //onChange inputs functions
    const handleCustomerLastNameChange = (event) => {
        setCustomerLastName(event.target.value);        
    };
    
    const handleCustomerFirstNameChange = (event) => {        
        setCustomerFirstName(event.target.value);        
    };

    const handleCustomerEmailChange = (event) => {        
        setCustomerEmail(event.target.value);        
    };

    const handleCustomerPhoneChange = (event) => {        
        setCustomerPhone(event.target.value);        
    };

    const handleCustomerAddressChange = (event) => {
        setCustomerAddress(event.target.value);
    };

    const handleCustomerZipCodeChange = (event) => {
        setCustomerZipCode(event.target.value);
    };

    const handleCustomerCityChange = (event) => {        
        setCustomerCity(event.target.value);        
    };

    const handleCustomerCommentsChange = (event) => {        
        setCustomerComments(event.target.value);        
    };

    const handleDateChange = (date) => {
        setSelectedDate(date._d);
    };

    //providing time labels for the Confirmation page
    const handleSlotChange = (event) => {
        event.preventDefault();
        setSelectedSlot(event.target.value);
        switch(selectedSlot) {
            case "100" :
                setSlotLabel("10 heures");
                break;
            case "200" :
                setSlotLabel("11 heures");
                break;
            case "300" :
                setSlotLabel("12 heures");
                break;
            case "400" :
                setSlotLabel("13 heures");
                break;
            case "500" :
                setSlotLabel("14 heures");
                break;
            case "600" :
                setSlotLabel("15 heures");
                break;
            case "700" :
                setSlotLabel("16 heures");
                break;
            case "800" :
                setSlotLabel("17 heures");
                break;
            case "900" :
                setSlotLabel("18 heures");
                break;
        }
    };
    
    //poviding location labels for the Confirmation page
    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
        if (event.target.value === "Clinic") {
            setLocationLabel(" au Centre Un Pas Vers Soi")
        } else if (event.target.value === "Home") {
            setLocationLabel(`${customerAddress}, ${customerCity}, ${customerZipCode}`)
        }
    };

    
    
    const handleTherapistChange = (event) => {        
        setSelectedTherapist(event.target.value);
    };

    const handleMassageTypeChange = (event) => {
        setSelectedMassageType(event.target.value);
    };

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
    };

    //submitting new appointment - sending appointmen data to the backend
    const submitNewAppointment = (event) => {
        event.preventDefault();
        
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
                            //customer data form reset on success
                            setCustomerLastName("");
                            setCustomerFirstName("");
                            setCustomerEmail("");
                            setCustomerPhone("");
                            setCustomerAddress("");
                            setCustomerZipCode("");
                            setCustomerCity("");
                            setCustomerComments("");
                        }                
                    })
                .catch((error) => {
                    setStatus("error");
                })
            
            // sending customer data to the backend
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
        //form reset
        event.target.reset();
        
        
    };


    //displaying Confirmation page on success
    if (status === "success") {

        
        return (
            <Confirmation 
                appmtdate={appointmentDate}
                appmttime={slotLabel}
                appmtlocation={locationLabel}
                appmttherapist={selectedTherapist} />
        )

    } else {

        //rendering Appointment page
        return (

            <Wrapper>
                <form onSubmit={submitNewAppointment}>
                    <Main>
                        <FormArea>
                            <FormLeftWrapper>
                                <Title>Parlez-nous de vous...</Title>
                                <Label htmlFor="fname">Prénom
                                <Input 
                                    type="text" 
                                    id="fname" 
                                    name="fname"
                                    value={customerFirstName}
                                    onChange={handleCustomerFirstNameChange}
                                    required />
                                </Label>
                                <Label htmlFor="lname">Nom
                                <Input 
                                    type="text" 
                                    id="lname" 
                                    name="lname"
                                    value={customerLastName}
                                    onChange={handleCustomerLastNameChange}
                                    required />
                                </Label>
                                <Label htmlFor="email">Courriel
                                <Input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={customerEmail}
                                    onChange={handleCustomerEmailChange}
                                    required />
                                </Label>
                                <Label htmlFor="phone">Téléphone
                                <Input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone"
                                    value={customerPhone}
                                    onChange={handleCustomerPhoneChange}
                                    required />
                                </Label>
                                <Label htmlFor="address">Adresse
                                <Input 
                                    type="text" 
                                    id="address" 
                                    name="address" 
                                    value={customerAddress}
                                    onChange={handleCustomerAddressChange}
                                    required />
                                </Label>
                                <Label htmlFor="zipcode">Code postal
                                <Input 
                                    type="text" 
                                    id="zipcode" 
                                    name="zipcode"
                                    value={customerZipCode}
                                    onChange={handleCustomerZipCodeChange}
                                    required />
                                </Label>
                                <Label htmlFor="city">Ville
                                <Input 
                                    type="text" 
                                    id="city" 
                                    name="city" 
                                    value={customerCity}
                                    onChange={handleCustomerCityChange}
                                    required />
                                </Label>
                                <Label htmlFor="city">Commentaires
                                <CommentsInput 
                                    wrap="hard"
                                    id="comments" 
                                    name="comments"
                                    value={customerComments}
                                    onChange={handleCustomerCommentsChange} />
                                </Label>
                            </FormLeftWrapper>
                            <PlantImage src={plante} />
                            <FormRightWrapper>
                                <Title>Personnalisez votre moment de détente</Title>
                                    <PickersWrapper>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <DatePicker
                                                label="Sélectionner la date"                                
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                minDate={moment()}
                                                showTodayButton={true}                                
                                                renderInput={(props) => <TextField {...props} />}
                                        />
                                        </LocalizationProvider>
                                        <Select onChange={handleSlotChange}>
                                            <OptGroup>
                                                <Option value="" required>Horaire</Option>
                                                <Option value="100">10h - 11h</Option>
                                                <Option value="200">11h - 12h</Option>
                                                <Option value="300">12h - 13h</Option>
                                                <Option value="400">13h - 14h</Option>
                                                <Option value="500">14h - 15h</Option>
                                                <Option value="600">15h - 16h</Option>
                                                <Option value="700">16h - 17h</Option>
                                                <Option value="800">17h - 18h</Option>
                                                <Option value="900">18h - 19h</Option>
                                            </OptGroup>
                                        </Select>
                                    </PickersWrapper>
                                <Subtitle>Choisissez le lieu de votre massage :</Subtitle>                            
                                <RadioGroupWrapper>
                                    <Label>
                                        <RadioWrapper> 
                                            <Radio
                                                type="radio"
                                                name="location"                            
                                                value="Clinic"
                                                onChange={handleLocationChange}
                                                defaultChecked
                                                required
                                            />Au centre "Un pas vers Soi"
                                        </RadioWrapper>
                                    </Label>
                                    <Label>
                                        <RadioWrapper>    
                                            <Radio
                                                type="radio"
                                                name="location"                            
                                                value="Home"
                                                onChange={handleLocationChange}
                                                required
                                            />À votre domicile
                                        </RadioWrapper>
                                    </Label>
                                </RadioGroupWrapper>
                                <Subtitle>Choisissez votre massothérapeute :</Subtitle>
                                <TherapistWrapper>
                                    <Label>
                                        <RadioWrapper>
                                            <Radio
                                                type="radio"
                                                name="therapist"                            
                                                value="Hélène Blat"
                                                onChange={handleTherapistChange}
                                                defaultChecked
                                                required
                                            />Hélène Blat
                                        </RadioWrapper>
                                    </Label>
                                    <Label>
                                        <RadioWrapper>
                                            <Radio
                                                type="radio"
                                                name="therapist"                            
                                                value="Katia Breton"
                                                onChange={handleTherapistChange}
                                                required
                                            />Katia Breton
                                        </RadioWrapper>
                                    </Label>
                                </TherapistWrapper>
                                <Subtitle>Quel type de massage souhaitez-vous ?</Subtitle>
                                <MassageTypeWrapper>
                                    <Select onChange={handleMassageTypeChange}>
                                        <OptGroup>
                                            <Option value="">Type de massage</Option>
                                            <Option value="swedish">Suédois</Option>
                                            <Option value="californian">Californien</Option>
                                            <Option value="lomi-lomi">Lomi Lomi</Option>
                                            <Option value="drainage">Drainage Lymphatique</Option>
                                        </OptGroup>
                                    </Select>
                                    <Select onChange={handleDurationChange}>
                                        <Option value="">Durée</Option>
                                        <Option value="60">60 min.</Option>
                                        <Option value="75">75 min.</Option>
                                        <Option value="90">90 min.</Option>
                                    </Select>
                                    </MassageTypeWrapper>
                                <DialogArea>
                                    {status === "loading"
                                        ?   <DialogWrapper>
                                            <Spinner size={25}/>
                                            </DialogWrapper>
                                                :   status === "error"
                                                    &&   <DialogWrapper>
                                                        <ErrorIcon size={25}/><ErrorMsg>{dialog}</ErrorMsg>
                                                        </DialogWrapper>
                                                            
                                    }
                                </DialogArea>
                                <BookButton>Réservez votre massage</BookButton>
                            </FormRightWrapper>
                        </FormArea>
                    </Main>
                </form>
            </Wrapper>
        )};
};

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
const FormArea = styled.div`

    height: 80vh;
    display: grid;
    justify-content: center;
    grid-template-columns: 40% 10% 40%;    
`
const FormLeftWrapper = styled.div`    
    border: solid 1px #7e9e6c;
    border-radius: 5px;
    height: 75vh;
    width: 40vw;
    justify-self: center;
    align-self: center;
    display: grid;
    justify-content: center;    
`
const FormRightWrapper = styled.div`    
    border: solid 1px #7e9e6c;
    border-radius: 5px;
    height: 75vh;
    width: 40vw;
    justify-self: center;
    align-self: center;
    display: grid;
`
const Title = styled.p`
    font-size: 24px;
    color: #7e9e6c;
    text-align: center;
    margin: 20px;
`
const Select = styled.select`
    height: 56px;
    width: 240px;
    border-radius: 3px;
    border: solid 1px darkgray;
    text-align-last: center;
    &:hover{
        border-color: black;
    }
    &:focus{
        border-color: black;
    }
`
const OptGroup = styled.optgroup`
`
const Option = styled.option`
`
const Subtitle = styled.p`
    font-size: 20px;
    text-align: center;
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 10px;
`
const Radio = styled.input`
    accent-color: #7e9e6c;
`
const Input = styled.input`
    width: 30vw;
    border: 0px;
    border-bottom: solid 1px #7e9e6c;
    padding-left: 10px;
    &:focus{
        outline: none;
    }
`
const CommentsInput = styled.textarea`
    padding: 10px;
    height: 100px;
    resize: none;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
    border: solid 1px #7e9e6c;
    &:focus{
        outline: none;
    }
`
const DialogArea = styled.div`
    
    height: 50px;

`
const DialogWrapper = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
const ErrorIcon = styled(MdErrorOutline )`
    color: #f54248;
`
const ErrorMsg = styled.p`
    font-size: 18px;
    color: #f54248;
`
const BookButton = styled.button`
    all: unset;
    justify-self: center;
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
    &:hover:enabled{
        color: whitesmoke;
        background-color: #7e9e6c;
        
    }
    &:disabled{
        color: gray;
        border-color: gray;
    }
`
const PickersWrapper = styled.div`
    display:flex;
    justify-content: space-evenly;`

const RadioGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    gap: 20px;
`
const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const TherapistWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-self: center;
`
const MassageTypeWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const PlantImage = styled.img`
    width: 100px;
    justify-self: center;
    align-self: center;
    opacity: 70%;
`

export default Appointment;