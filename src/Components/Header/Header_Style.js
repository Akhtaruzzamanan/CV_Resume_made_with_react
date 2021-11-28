import Styled from 'styled-components';

const HeaderButton = Styled.div`
    margin-top: 50px;
`;

const HeaderButtonLink = Styled.a`
    background-color: transparent;
    color: #f5f5f5 !important;
    border-color: #f5f5f5;

    &:hover {
        background-color: #fff !important;
        color: #04b4e0 !important;
        border-color: #f5f5f5 !important;
    }
`;

const HeaderWithMobile = Styled.header`
    @media (max-width: 1280px) {
        max-width: 330px;
    }

    @media (max-width: 1024px) {
        position: absolute;
        width: 100%;
        max-width: 330px;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #444;
        z-index: 99;
        padding: 30px 30px 10px;
        text-align: center;
        opacity: 1;
        visibility: visible;
        overflow: auto;
        -webkit-transition: all 0.25s ease-in-out;
        -moz-transition: all 0.25s ease-in-out;
        -o-transition: all 0.25s ease-in-out;
        -ms-transition: all 0.25s ease-in-out;
        transition: all 0.25s ease-in-out;

        &.mobile-menu-hide {
            width: 0;
            right: 0;
            margin-right: -100%;
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
        } 
    }

    @media (min-width: 1025px) {
        display: inline-block;
        float: left;
        width: 100%;
        max-width: 380px;
        height: 100%;
        max-height: 80vh;
        min-height: inherit;
        text-align: center;
        padding: 45px;
        overflow: auto;
    }
`;

export { HeaderButton, HeaderButtonLink, HeaderWithMobile };
