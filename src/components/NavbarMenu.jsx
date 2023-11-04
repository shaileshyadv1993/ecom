import React from "react";

import {
  Container,
  Nav,
  Navbar,
  Button,
  InputGroup,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavbarMenu = ({ searchProduct }) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bazzar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/counter");
              }}
            >
              Counter
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/quotes");
              }}
            >
              Quotes
            </Nav.Link>
          </Nav>
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search Product Here"
                  className=" mr-sm-2"
                  onChange={searchProduct}
                />
              </Col>
              <Col xs="auto">
                <Button
                  type="submit"
                  onClick={(e) => {
                    localStorage.clear("isLoggedIn");
                    navigate("/");
                  }}
                >
                  Log out
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
