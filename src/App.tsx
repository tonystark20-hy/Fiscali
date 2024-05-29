import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Header from "components/Header";

function App() {
  return (
    <Router>
      <Container fluid>
        <Header />
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
