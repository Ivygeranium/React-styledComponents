import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';


const NavBar = ({ toggle }) => {
    const [bgColor, setbgColor] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setbgColor(true)
        } else {
            setbgColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <Nav bgColor={bgColor}>
            <NavbarContainer>
                <NavLogo to='/' onClick={() => scroll.scrollToTop()}>OpenFoilo</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Programing</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Finance</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Activities</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default NavBar
