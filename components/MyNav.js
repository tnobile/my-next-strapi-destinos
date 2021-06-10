import React from "react";
import Link from "next/link";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

const MyNav = ({ categories }) => {
    return (
        <Navbar bg="light" expand="lg" variant="primary" className='navbar'>
            <Link href="/" >
                <a className="nav-link">HOME</a>
            </Link>
            <Navbar.Toggle bg="transparent" variant="dark" aria-controls="basic-navbar-nav" >
                <span className="navbar-hamburger">&#9776;</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {categories && categories.length > 0 &&
                        <NavDropdown title="CATEGORY" id="basic-nav-dropdown">
                            {[...categories].sort((a, b) => a.localeCompare(b)).map((category) =>
                                <NavDropdown.Item key={category}>
                                    <Link as={`/category/${category}`} href="/category/[id]">
                                        <a className="nav-link">{category}</a>
                                    </Link>
                                </NavDropdown.Item>)}
                        </NavDropdown>
                    }
                    {categories && categories.length > 0 &&
                        <NavDropdown title="SEASON">
                            {["spring", "summer", "autumn", "winter"].map(s =>
                                <NavDropdown.Item key={s}>{s}</NavDropdown.Item>
                            )}
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