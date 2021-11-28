import Styled from 'styled-components';

const CertificateItem = Styled.div`
    position: relative;
    display: table;
    table-layout: fixed;
    width: 100%;
    border: 2px solid #444;
    border-radius: 8px;
    margin-bottom: 20px;
    -webkit-transition: all 2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    // @media (min-width: 1025px) {
    //     display: block;
    // }

    &:before,
    &:after {
        content: ' ';
        display: table;
    }

    &:after {
        clear: both;
    }
`;

const CertiLogo = Styled.div`
    display: table-cell;
    width: 120px;
    height: 100%;
    background-color: #444;
    padding: 25px;
    vertical-align: middle;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

const LogoImage = Styled.img`
    display: block;
    max-width: 100%;
`;

const CertiContent = Styled.div`
    display: table-cell;
    width: 100%;
    padding: 20px 15px;
    vertical-align: middle;
`;

const TitleHeading = Styled.h4`
    font-size: 16px !important;
    margin: 0 0 5px;
    line-height: inherit;
`;

const CertiId = Styled.div`
    font-size: 0.9em;
    color: #777;
`;

const CertiDate = Styled.div`
    font-size: 0.7em;
    color: #777;
    opacity: 0.7;
`;

export {
    CertificateItem,
    CertiLogo,
    LogoImage,
    CertiContent,
    TitleHeading,
    CertiId,
    CertiDate,
};
