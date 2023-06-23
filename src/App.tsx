import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col xs={3} style={{ backgroundColor: "pink" }}>
          2 of 3 (wider)
        </Col>
        <Col xs={9} style={{ backgroundColor: "orange" }}>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}

export default App;
