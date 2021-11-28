import Styled from 'styled-components';

const ArrowNavDiv = Styled.div`
    position: absolute;
    padding: 10px 0;
    width: 60px;
    right: -80px;
    background-color: #444;
    border-radius: 35px;
    z-index: 98;
    list-style: none;
    bottom: 0;
    -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.15);

    @media (max-width: 1024px) {
        background-color: rgba(0, 0, 0, 0.6);
        width: 48px;
        right: 10px;
        bottom: 10px;
        padding: 5px 0;
        border: 2px solid #04b4e0;
    }
`;

const ArrowIconDiv = Styled.div`
    display: block;
    position: relative;
    text-align: center;
    color: #b5b6b7;
    padding: 10px;
    font-size: 24px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #04b4e0;
    }

    @media (max-width: 1024px) {
        font-size: 24px;
    }
`;

export { ArrowNavDiv, ArrowIconDiv };
