import React from "react"
import { Container, Row } from "react-bootstrap";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Footer = () => {
    return (
        <div className="fixed-bottom">
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand>Casa 1 Vagas</NavbarBrand>
                    <NavbarText>Test</NavbarText>
                </Container>
            </Navbar>
        </div>
    );

};

export default Footer;