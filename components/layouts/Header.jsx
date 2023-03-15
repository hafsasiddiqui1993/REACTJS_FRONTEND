import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
const Header = () => {
  return (
    <div className="header">
      <Container fluid>
        <Row> 
            <p className="headp">
            <Link className="sgn" to="/Signup">Sign-up</Link>
            <Link className="sgn" to="/MemberSignin">Already a Member?</Link>
      

            </p>
        </Row>
        <Outlet />

      </Container>
    </div>
  );
};

export default Header;
