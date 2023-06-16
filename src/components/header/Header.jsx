import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Header = () => {
  const [showB, setShowB] = useState(false);
  const toggleShowB = () => setShowB(!showB);

  return (
    <div className="mt-4">
      <ul
        className="d-flex flex-row w-100 justify-content-around"
        style={{ listStyleType: "none" }}
      >
        <li>
          <div className="d-flex flex-row justify-content-evenly">
            <FloatingLabel
              controlId="floatingInput"
              label="Scrip"
              className="mb-3 me-2"
            >
              <Form.Control placeholder="NIFTY" style={{ height: "52px" }} />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Exp"
              className="mb-3"
            >
              <Form.Control
                placeholder="18 May 2023"
                style={{ height: "52px" }}
              />
            </FloatingLabel>
          </div>
        </li>

        <li>
          <div className="info d-flex ">
            <div className="spot">
              Spot
              <div className="d-flex flex-row align-items-center">
                <div className="me-2 ">18,25243</div>
                <div style={{ fontSize: "12px", color: "#3fa86b" }}>20%</div>
              </div>
            </div>
            <div className="fut">
              Fut
              <div className="d-flex flex-row align-items-center">
                <div className="mx-4 me-2">18,25243</div>
                <div style={{ fontSize: "12px", color: "#3fa86b" }}>20%</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="info d-flex justify-content-around">
            <div className="max-pain">
              Max Pain
              <div className="">18,252</div>
            </div>
            <div className="pcr mx-3">
              PCR
              <div className="">0.92</div>
            </div>
            <div className="max-pain me-3">
              Max Pain
              <div className="">18,100</div>
            </div>
            <div className="resistance">
              Resistance
              <div className="">18,500</div>
            </div>
          </div>
        </li>
        <li>
          <div className="buttons">
            <div className="filterbtn">
              <Row>
                <Col md={6}>
                  <Button
                    onClick={toggleShowB}
                    className="mb-2 d-flex align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-filter me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    Filters
                  </Button>

                  <Toast
                    onClose={toggleShowB}
                    show={showB}
                    animation={false}
                    style={{ width: "440px" }}
                  >
                    <Toast.Header className="align-items-start">
                      <div className="d-flex flex-column ">
                        <h7 className="fs-5">Filters</h7>
                        <div>
                          <div className="filter_1 d-flex flex-column ">
                            <h7 style={{ fontSize: "12px" }}>LTP Range</h7>
                            <div className="d-flex">
                              <div className="me-2">
                                <InputGroup size="sm" className="mb-3">
                                  <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="minimum"
                                  />
                                </InputGroup>
                              </div>
                              <div>
                                <InputGroup size="sm" className="mb-3">
                                  <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="maximum"
                                  />
                                </InputGroup>
                              </div>
                            </div>
                          </div>
                          <div className="filter_1 d-flex">
                            <h7 style={{ fontSize: "12px" }}>
                              LTP change % by
                            </h7>

                            <div>
                              <DropdownButton
                                as={ButtonGroup}
                                variant="link"
                                title="trial"
                              >
                                <Dropdown.Item eventKey="1">
                                  Action
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2">
                                  Another action
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                  Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">
                                  Separated link
                                </Dropdown.Item>
                              </DropdownButton>
                            </div>
                          </div>
                          <div className="filter_1 d-flex">
                            <h7>Specific Strike</h7>
                            <div className="d-flex">
                              <div className="ms-2">
                                <InputGroup size="sm" className="mb-3">
                                  <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="minimum"
                                  />
                                </InputGroup>
                              </div>
                            </div>
                          </div>
                          <div className="filter_1 d-flex">
                            <h7>Display</h7>

                            <div className="ms-2 d-flex flex-row ">
                              <Form.Check // prettier-ignore
                                type="checkbox"
                                label="calls"
                              />
                              <Form.Check // prettier-ignore
                                type="checkbox"
                                label="puts"
                                className="ms-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Toast.Header>
                    <Toast.Body></Toast.Body>
                  </Toast>
                </Col>
              </Row>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
