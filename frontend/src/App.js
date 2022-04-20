import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./Header";
import Homepage from "./Homepage";
import Bio from "./Bio";
import Services from "./Services";
import Appointment from "./Appointment";
import Confirmation from "./Confirmation";
import Contact from "./Contact";

function App() {
  return (
      <Wrapper>
        <GlobalStyles />
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/bio" element={<Confirmation />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/appointment" element={<Appointment />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Wrapper>
  );
}

const Wrapper = styled.div`
`


export default App;
