import Styled from 'styled-components';

const RightPart = Styled.div`
    width: 70%;
    display: table-cell;
    padding-left: 25px;
    padding-right: 15px;
    vertical-align: top;

    @media (max-width: 480px) {
        width: 100%;
        display: block;
        padding-left: 25px;
        padding-right: 0;
    }
`;

const TimelineItemDiv = Styled.div`
    position: relative;
    display: table;
    table-layout: fixed;
    width: 100%;
    padding-bottom: 15px;

    &:last-child {
        padding-bottom: 0;
        ${RightPart} {
            padding-bottom: 0;
        }
    }

    @media (max-width: 480px) {
        position: relative;
        display: block;
    }
`;

const LeftPart = Styled.div`
    width: 30%;
    display: table-cell;
    padding-right: 25px;
    min-height: 100%;
    text-align: right;
    vertical-align: top;

    @media (max-width: 480px) {
        width: 100%;
        display: block;
        padding-left: 25px;
        min-height: 100%;
        text-align: left;
    }
`;

const ItemPeriodHeading = Styled.h5`
    color: #aaa;
    margin: 3px 0;
    font-size: 14px;
    line-height: 1.4em;
`;

const ItemCompanySpan = Styled.span`
    display: block;
    margin: 0 0 4px;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.45em;
    color: #a5a6a7;
`;

const Divider = Styled.div`
    position: absolute;
    top: 0;
    left: 30%;
    bottom: 0;
    width: 1px;
    background-color: #444;

    &:before {
        content: '';
        display: block;
        position: absolute;
        margin-top: 4px;
        width: 17px;
        height: 17px;
        position: absolute;
        margin-left: -8px;
        border-radius: 10px;
        background-color: #04b4e0;
        opacity: 0.25;
        z-index: 0;
    }

    &:after {
        content: '';
        display: block;
        position: absolute;
        margin-top: 8px;
        width: 9px;
        height: 9px;
        margin-left: -4px;
        background-color: #222;
        border-radius: 5px;
        border: 2px solid #04b4e0;
        z-index: 1;
    }

    @media (max-width: 480px) {
        left: 0;
    }
`;

const ItemTitleHeading = Styled.h4`
    font-size: 16px !important;
    margin-bottom: 3px;
    line-height: inherit;
`;

const RightPartPara = Styled.p`
    font-size: 0.92em;
`;

export {
    TimelineItemDiv,
    LeftPart,
    RightPart,
    ItemPeriodHeading,
    ItemCompanySpan,
    Divider,
    ItemTitleHeading,
    RightPartPara,
};
