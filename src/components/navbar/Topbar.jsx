// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import navLogo from "../../assets/navLogo.png";

const Topbar = () => {
  return (
    <div className="topbar bg-light">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={navLogo} alt="" style={{ width: "20%" }} />
            Track Trades
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Dashboard</Nav.Link>
              <Nav.Link href="/" style={{ color: "#466cf6" }}>
                Option Chain
              </Nav.Link>
              <Nav.Link href="/">Strategy Builder</Nav.Link>
              <Nav.Link href="/">Positions</Nav.Link>
              <Nav.Link href="/">Order Book</Nav.Link>
            </Nav>
            <div
              className="info d-flex justify-content-around"
              style={{ width: "25%", marginRight: "20%" }}
            >
              <div className="nifty">
                NIFTY
                <div className="d-flex flex-row align-items-center">
                  <div style={{ fontSize: "12px", color: "#3fa86b" }}>20%</div>
                  <div className="mx-4 ms-2">18,25243</div>
                </div>
              </div>
              <div className="bankNifty">
                BANKNIFTY
                <div className="d-flex flex-row align-items-center">
                  <div style={{ fontSize: "12px", color: "#3fa86b" }}>20%</div>
                  <div className="mx-3 ms-2">18,25243</div>
                </div>
              </div>
              <div className="indiaVix">
                INDIA VIX
                <div className="d-flex flex-row align-items-center">
                  <div style={{ fontSize: "12px", color: "#ff6b6b" }}>-10%</div>
                  <div className="mx-3 ms-2">18,25243</div>
                </div>
              </div>
            </div>

            <NavDropdown
              title="Profile"
              id="navbarScrollingDropdown"
              className="pe-5"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
