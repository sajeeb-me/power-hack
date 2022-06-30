import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Power Hack</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Paid Total : 00</Nav.Link>
                    <Nav.Link href="#features">Log out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;