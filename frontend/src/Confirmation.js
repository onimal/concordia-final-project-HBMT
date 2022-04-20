import styled from "styled-components";
import { RiCheckboxCircleLine } from "react-icons/ri"




const Confirmation = ({appmtdate, appmttime, appmtlocation, appmttherapist}) => {

    const details = {

        date: appmtdate,
        time: appmttime,
        appmtlocation: appmtlocation,
        therapist: appmttherapist
    }
    return (

        <Wrapper>
            <Main>
                <ConfirmationArea>
                    <ConfirmationWrapper>
                        <SuccessIcon size={50}/>
                        <Title>Confirmation</Title>
                        <Text>{`Votre rendez-vous du ${details.date} à ${details.time} est confirmé.`}</Text>
                        <Text>{`Lieu du rendez-vous : ${details.appmtlocation}`}</Text>
                        <Text>{`Votre massothérapeute : ${details.therapist}`}</Text>
                        <Text>Merci !</Text>
                    </ConfirmationWrapper>
                </ConfirmationArea>
            </Main>
        </Wrapper>
    )

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
const ConfirmationArea = styled.div`    
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ConfirmationWrapper = styled.div`    
    background-color: #7e9e6c;
    border-radius: 5px;
    height: 75vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 30px;
`
const SuccessIcon = styled(RiCheckboxCircleLine )`
    color: white;
`
const Title = styled.p`
    font-size: 32px;
    color: white;
    font-variant-caps: small-caps;
`
const Text = styled.p`
    font-size: 24px;
    color: white;
    text-align: center;
`
export default Confirmation;