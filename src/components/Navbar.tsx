import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <NavbarBS sticky='top' className='bg-white shadow-sm mb-3' >
                <Container>
                    <Nav className='me-auto'>
                        <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                        <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                        <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                    </Nav>
                    <Button style={{ width: "3rem", height: "3rem", position: "relative" }} variant="outline-primary" className="rounded-circle ">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256" viewBox="0 0 256 256" >
                            <path d="M 19.306 23.417 c -1.374 0 -2.613 -0.95 -2.925 -2.347 l -1.375 -6.155 c -0.554 -2.48 -2.716 -4.212 -5.258 -4.212 H 3 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 6.749 c 5.372 0 9.942 3.662 11.113 8.904 l 1.375 6.155 c 0.361 1.617 -0.657 3.221 -2.274 3.582 C 19.742 23.393 19.522 23.417 19.306 23.417 z" />
                        </svg> */}
                        <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'>3</div>
                    </Button>
                </Container>
            </NavbarBS>
        </div>
    )
}

export default Navbar