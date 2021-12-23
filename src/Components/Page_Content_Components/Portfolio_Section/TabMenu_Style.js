import Styled from 'styled-components';

const PortfolioItemImg = Styled.div`
    position: relative;
    overflow: hidden;

    &:after {
        content: '';
        position: absolute;
        background-color: rgba(0, 0, 0, 0.05);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
`;

const FigureImg = Styled.img`
    display: block;
    position: relative;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: 100%;
    
`;

const FigureLink = Styled.a`
    display: block;
    position: relative;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;
`;

const FigureIcon = Styled.i`
    display: inline-block;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 16px;
    opacity: 0;
    width: 30px;
    height: 30px;
    background-color: #222;
    color: #04b4e0;
    text-align: center;
    line-height: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

`;

const FigureName = Styled.h4`
    display: block;
    padding: 15px 0;
    font-size: 16px !important;
    position: relative;
    margin: 0px;

`;

const FigureCategory = Styled.span`
    display: inline-block;
    padding: 2px 7px;
    background-color: #222;
    color: #f5f5f5;
    font-size: 11px;
    line-height: 1.2em;
    top: 15px;
    left: 15px;
    position: absolute;
    opacity: 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

`;

const Figure = Styled.figure`
    width: 33.33333%;
    float: left;
    padding: 7px;
    position: relative;
    overflow: hidden;

    &:hover {
        ${PortfolioItemImg} {
            &:after {
                opacity: 1;
            }
        }

        ${FigureImg} {
            transform: scale(1.1);
        }

        ${FigureIcon},
        ${FigureName},
        ${FigureCategory} {
            opacity: 1;
        }
    }
`;

export {
    PortfolioItemImg,
    Figure,
    FigureImg,
    FigureLink,
    FigureIcon,
    FigureName,
    FigureCategory,
};
