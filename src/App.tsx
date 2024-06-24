import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Header from "components/Header";

function App() {
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  return (
    <Router>
      <Container fluid>
        <Header loginSuccess={loginSuccess} />
        <Routes loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} />
      </Container>
    </Router>
  );
}

export default App;
