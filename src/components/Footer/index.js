import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, 
    SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="signin">About us</FooterLink>
                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investers</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="signin">About us</FooterLink>
                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investers</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="signin">About us</FooterLink>
                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investers</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="signin">About us</FooterLink>
                            <FooterLink to="signin">How it works</FooterLink>
                            <FooterLink to="signin">Testimonials</FooterLink>
                            <FooterLink to="signin">Careers</FooterLink>
                            <FooterLink to="signin">Investers</FooterLink>
                            <FooterLink to="signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>OpenFoilo</SocialLogo>
                        <WebSiteRights>OpenFoilo ?? {new Date().getFullYear()} All rights reserved.</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
