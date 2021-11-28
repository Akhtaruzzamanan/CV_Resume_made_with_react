import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainMenuUl = Styled.ul`
    @media (min-width: 1025px) {
        position: absolute;
        padding: 15px 0;
        width: 70px;
        right: -90px;
        background-color: #444;
        border-radius: 35px;
        z-index: 999;
        list-style: none;
        top: 0;
        -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.15);
        box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 1024px) {
        margin: 30px 0;
    }
`;

const LinkText = Styled.span`
    @media (min-width: 1025px) {
        position: absolute;
        width: auto;
        visibility: hidden;
        opacity: 0;
        color: #fff;
        padding: 2px 10px;
        background-color: #04b4e0;
        white-space: nowrap;
        right: 0;
        top: -50%;
        margin-top: 50%;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        z-index: 0;
        box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.22);
    }

    @media (max-width: 1024px) {
        font-size: 16px;
        line-height: 21px;
    }
`;

const MainMenuLink = Styled(NavLink)`
    @media (min-width: 1025px) {
        display: block;
        position: relative;
        color: #b5b6b7 !important;
        padding: 10px;
        text-decoration: none;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;

        &:focus,
        &.active,
        &:hover {
            color: #04b4e0 !important;
        }

        &:hover {
            ${LinkText} {
                right: 100%;
                visibility: visible;
                opacity: 1;
            }
        }
    }

    @media (max-width: 1024px) {
        display: block;
        color: #fff;
        padding: 12px 0;
        line-height: 21px;
        opacity: 0.7;

        &.active {
            opacity: 1;
        }
    }
`;

const MenuIcon = Styled.span`
    @media (min-width: 1025px) {
        display: block;
        font-size: 30px;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;

export { MainMenuUl, MainMenuLink, LinkText, MenuIcon };
