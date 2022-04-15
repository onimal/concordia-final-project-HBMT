import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Homepage from "./Homepage";
import AppointmentCard from "./BookingSystem/AppointmentCard";

function App() {
  return (

      
      <Wrapper>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/appointment" element={<AppointmentCard />} />
          </Routes>
        </Router>
      </Wrapper>

  );
}

const Wrapper = styled.div`

  
    
`


export default App;
