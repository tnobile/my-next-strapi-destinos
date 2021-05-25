import React from "react";
import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

const MyNav = ({ categories }) => {
    return (
        <Navbar bg="light" expand="lg" variant="primary">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/" >
                        <a className="nav-link">HOME</a>
                    </Link>
                    {categories &&
                        <NavDropdown title="CATEGORY" id="basic-nav-dropdown">
                            {[...categories].sort((a, b) => a.localeCompare(b)).map((category) =>
                                <NavDropdown.Item>
                                    <Link as={`/category/${category}`} href="/category/[id]">
                                        <a className="nav-link">{category}</a>
                                    </Link>
                                </NavDropdown.Item>)}
                        </NavDropdown>
                    }
                </Nav>
            </Navbar.Collapse>
            <Link href="/about">
                <a className="nav-link">ABOUT</a>
            </Link>
        </Navbar>
    );
};

export default MyNav;