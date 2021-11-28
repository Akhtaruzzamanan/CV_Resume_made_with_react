import React, { useState } from 'react';
import {
    LinkText,
    MainMenuLink,
    MainMenuUl,
    MenuIcon,
} from './SidebarMenu_Style';
function SidebarMenu() {
    return (
        <MainMenuUl>
            <li>
                <MainMenuLink to="/" className="nav-anim ">
                    <MenuIcon className="lnr lnr-home"></MenuIcon>
                    <LinkText>Home</LinkText>
                </MainMenuLink>
            </li>
            <li>
                <MainMenuLink to="/about" className="nav-anim ">
                    <MenuIcon className="lnr lnr-user"></MenuIcon>
                    <LinkText>About Me</LinkText>
                </MainMenuLink>
            </li>
            <li>
                <MainMenuLink to="/resume" className="nav-anim">
                    <MenuIcon className="lnr lnr-graduation-hat"></MenuIcon>
                    <LinkText>Resume</LinkText>
                </MainMenuLink>
            </li>
            <li>
                <MainMenuLink to="/portfolio" class="nav-anim">
                    <MenuIcon className="lnr lnr-briefcase"></MenuIcon>
                    <LinkText>Portfolio</LinkText>
                </MainMenuLink>
            </li>
            <li>
                <MainMenuLink to="/blog" class="nav-anim">
                    <MenuIcon className="lnr lnr-book"></MenuIcon>
                    <LinkText>Blog</LinkText>
                </MainMenuLink>
            </li>
            <li>
                <MainMenuLink to="/contact" class="nav-anim">
                    <MenuIcon className="lnr lnr-envelope"></MenuIcon>
                    <LinkText>Contact</LinkText>
                </MainMenuLink>
            </li>
        </MainMenuUl>
    );
}

export default SidebarMenu;
