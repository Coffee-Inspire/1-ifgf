import React from 'react'

import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../../redux/actions/auth.actions';

// import { sendEmailAction } from '../../redux/actions/email.actions';

function NavAdminSide() {
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logoutAction());
    }

    return (

        <Navbar sticky="top" bg="dark" variant="dark" expand="lg" className="px-3 px-lg-4 vh-100 align-items-end flex-column flex-nowrap">
        {/* <Navbar.Brand href="#home" disabled>IFGF</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="any" className="mt-3"/>
        <Navbar.Collapse id="" className="flex-column mt-3 navbar-animation">
            <Navbar.Brand href="" className="cursorDefault">IFGF Dashboard</Navbar.Brand>
            <hr className="text-white w-100"></hr>
            <Nav className="mt-3 flex-column w-100">
            <Nav.Link href="/dashboard">Home Page Details</Nav.Link>
            <Nav.Link href="/dashboard/DashIcare">Icare</Nav.Link>
            <Nav.Link href="/dashboard/DashEvent">Event</Nav.Link>
            <Nav.Link href="/dashboard/DashAbout">About Us Post</Nav.Link>
            <Nav.Link href="/dashboard/DashProfile">Profile Web</Nav.Link>
            <Nav.Link href="/dashboard/DashFooter">Footer Details</Nav.Link>
            <Nav.Link href="/dashboard/DashAdmin">Change Password Admin</Nav.Link>
            <Nav.Link onClick={() => logoutHandle()}>Logout</Nav.Link>
            {/* <Nav.Link onClick={() => dispatch(sendEmailAction())}>Send Email</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavAdminSide
