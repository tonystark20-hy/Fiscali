import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <Container fluid>
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
