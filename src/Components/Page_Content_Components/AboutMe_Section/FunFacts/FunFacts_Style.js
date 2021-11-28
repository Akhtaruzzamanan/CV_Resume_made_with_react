import Styled from 'styled-components';

const FunFactsDiv = Styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    display: block;
    margin: 0 0 15px;
    background: #333;
    padding: 25px 10px 15px;
    border: 2px solid #444;
    border-radius: 10px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    overflow: hidden;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    &:hover {
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        -o-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
        -o-box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
        box-shadow: 0 12px 17px rgba(0, 0, 0, 0.12);
    }
`;

const FunFactsHeading = Styled.h4`
    font-size: 16px !important;
    margin: 15px;
    line-height: inherit;
`;

const FunFactsIcon = Styled.i`
    position: relative;
    font-size: 33px;
    color: #04b4e0;
    margin-bottom: 6px;
    width: 33px;
    height: 33px;
`;
const FunFactValue = Styled.span`
    color: #aaa;
    font-size: 36px;
    line-height: 50px;
    display: block;
    margin: 15px 0 10px;
`;

const FunFactText = Styled.span`
    display: block;
`;

export {
    FunFactsDiv,
    FunFactsHeading,
    FunFactsIcon,
    FunFactValue,
    FunFactText,
};
