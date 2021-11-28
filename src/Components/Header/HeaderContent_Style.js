import Styled from 'styled-components';

const HeaderPhoto = Styled.div`
    position: relative;
    width: 180px;
    margin: 0 auto 30px;
    z-index: 1; 

    &:after {
        position: absolute;
        opacity: 0.3;
        top: 7%;
        left: 7%;
        border-radius: 300px;
        content: '';
        height: calc(100% + 0px);
        width: calc(100% + 0px);
        background-image: -webkit-repeating-radial-gradient(
            center center,
            #fff,
            #fff 1px,
            transparent 0px,
            transparent 100%
        );
        background-image: -moz-repeating-radial-gradient(
            center center,
            #fff,
            #fff 1px,
            transparent 0px,
            transparent 100%
        );
        background-image: -ms-repeating-radial-gradient(
            center center,
            #fff,
            #fff 1px,
            transparent 0px,
            transparent 100%
        );
        -webkit-background-size: 6px 6px;
        -moz-background-size: 6px 6px;
        background-size: 6px 6px;
        z-index: -1;
    }

    @media (max-width: 1024px) {
        max-width: 130px;
        margin-bottom: 25px;
    }
`;

const HeaderPhotoImage = Styled.img`
    max-width: 100%;
    background-color: #fff;
    border: 3px solid #fff;
    border-radius: 300px;
`;

const HeaderTitleH2 = Styled.h2`
    font-size: 36px;
    font-weight: 600;
    color: #f5f5f5;
    margin: 5px 0 7px;
    line-height: 1.2em;

    @media (max-width: 1024px) {
        font-size: 30px;
        margin-bottom: 10px;
    }
`;

const HeaderTitleH4 = Styled.h4`
    font-size: 18px;
    font-weight: 300 !important;
    color: #bbb;
    margin: 5px 0;
    line-height: 1.2em;

    @media (max-width: 1024px) {
        font-size: 17px;
    }
`;
export { HeaderPhoto, HeaderPhotoImage, HeaderTitleH2, HeaderTitleH4 };
