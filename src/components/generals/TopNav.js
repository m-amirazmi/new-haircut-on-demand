import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { routes } from '../../utils/routes';
import styles from '../../assets/css/TopNav.module.css'

export const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggle = () => setIsOpen(!isOpen);

    const renderLinks = () => routes.map((route) => {
        if (!route.isProtected && route.showOnNav) return (
            <NavItem className={styles.nav__item}>
                <Link to={route.path}>{route.name}</Link>
            </NavItem>
        )
    })


    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">HAIRMESS</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {renderLinks()}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}