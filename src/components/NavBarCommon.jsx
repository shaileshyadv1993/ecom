import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBarCommon = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/products");
            }}
          >
            Bazzar
          </Navbar.Brand>
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

export default NavBarCommon;
