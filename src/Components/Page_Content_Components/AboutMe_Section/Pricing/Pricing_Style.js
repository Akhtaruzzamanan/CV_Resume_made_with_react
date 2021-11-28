import Styled from 'styled-components';

const FwPackage = Styled.div`
    background-color: #333;
    border: 2px solid #444;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 10px;
    text-align: center;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-box-shadow: 0 7px 12px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 7px 12px rgba(0, 0, 0, 0.12);
    -o-box-shadow: 0 7px 12px rgba(0, 0, 0, 0.12);
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.12);

    &:hover {
        -webkit-transform: translateY(-9px);
        -ms-transform: translateY(-9px);
        -o-transform: translateY(-9px);
        transform: translateY(-9px);
        -webkit-box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
        -o-box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
        box-shadow: 0 18px 24px rgba(0, 0, 0, 0.15);
    }
`;

const FwHeadingSpan = Styled.span`
    position: relative;
    display: inline-block;

    &:after {
        content: '';
        height: 2px;
        margin-top: 0;
        background-color: #04b4e0;
        position: absolute;
        left: 0;
        bottom: -3px;
        right: 0;
    }
`;

const FwButtonRow = Styled.div`
    padding: 10px 0 20px;
`;

const FwDefaultRow = Styled.div`
    padding: 5px 0;
    font-size: 14px;
`;

const FwPricingRow = Styled.div`
    padding: 30px 0 10px;
`;

const FwPricingSpan = Styled.span`
    display: block;
    line-height: 1;
    color: #f5f5f5;
    font-size: 42px;
`;

const FwPricingSmall = Styled.small`
    color: #aaa;
    display: block;
`;

export {
    FwPackage,
    FwHeadingSpan,
    FwButtonRow,
    FwDefaultRow,
    FwPricingRow,
    FwPricingSpan,
    FwPricingSmall,
};
