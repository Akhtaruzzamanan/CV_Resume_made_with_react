import Styled from 'styled-components';

const PageTitleDiv = Styled.div`
    display: inline-block;
    position: relative;
    padding-right: ${(props) => (props.PadRight ? `12px` : `25px`)};
    padding-bottom: ${(props) => (props.PadBottom ? `10px` : `15px`)};
    margin-bottom: ${(props) => (props.MarBottom ? `15px` : `30px`)};

    &:after {
        position: absolute;
        opacity: 0.45;
        top: 10px;
        right: 0;
        content: '';
        height: ${(props) => (props.Height ? `20px` : `30px`)};
        width: ${(props) => (props.Width ? `30px` : `50px`)};
        background-image: -webkit-repeating-radial-gradient(
            center center,
            #04b4e0,
            #04b4e0 1px,
            transparent 0px,
            transparent 100%
        );
        background-image: -moz-repeating-radial-gradient(
            center center,
            #04b4e0,
            #04b4e0 1px,
            transparent 0px,
            transparent 100%
        );
        background-image: -ms-repeating-radial-gradient(
            center center,
            #04b4e0,
            #04b4e0 1px,
            transparent 0px,
            transparent 100%
        );
        -webkit-background-size: 6px 6px;
        -moz-background-size: 6px 6px;
        background-size: 6px 6px;
        z-index: 0;
    }
`;

const PageTitleHeading = Styled.h2`
    position: relative;
    font-size: ${(props) => (props.FontSize ? `21px` : `32px`)};
    z-index: 1;
    margin: 0;
    line-height: inherit;
`;

const PageTitleSpan = Styled.span`
    color: #04b4e0;
`;

export { PageTitleDiv, PageTitleHeading, PageTitleSpan };
