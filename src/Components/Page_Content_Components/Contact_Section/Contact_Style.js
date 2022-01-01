import Styled from 'styled-components';

const LmInfoBlock = Styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    display: block;
    margin: 0 0 15px;
    background-color: #333;
    padding: 20px 10px;
    border: 1px solid #444;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    overflow: hidden;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
`;

const InfoIcon = Styled.i`
    position: relative;
    font-size: 33px;
    color: #04b4e0;
    z-index: 1;
`;

const InfoHeading = Styled.h4`
    font-size: 15px !important;
    margin-top: 8px;
    line-height: inherit;
    margin-bottom: 0;
`;

const InfoBlockValue = Styled.span`
    font-size: 30px;
    line-height: 30px;
    font-weight: 400;
    display: block;
    margin: 10px 0;
    color: #04b4e0;

    &:empty {
        margin: 0;
    }
`;

const ClearFix = Styled.div`
    &:before {
        content: ' ';
        display: table;
    }

    &:after {
        content: ' ';
        display: table;
        clear: both;
    }
`;

const LeftColumn = Styled.div`
    width: 47%;
    float: left;
    margin-right: 3%;

    @media (max-width: 480px) {
        float: none;
        margin: 0;
        width: 100%;
    }
`;

const RightColumn = Styled.div`
    width: 50%;
    float: right;

    @media (max-width: 480px) {
        float: none;
        margin: 0;
        width: 100%;
    }
`;

const FormGroup = Styled.div`
    position: relative;
    margin: 0 0 21.5px;
`;

const FormControl = Styled.input`
    height: 42px;
    position: relative;
    border: 2px solid #999 !important;
    border-radius: 5px !important;
    display: block !important;
    font-size: 1em !important;
    line-height: 1.4 !important;
    margin: 0;
    padding: 10px 12px !important;
    width: 100% !important;
    background: 0 0;
    background-color: transparent !important;
    text-align: left;
    color: inherit !important;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
    font-family: poppins, Helvetica, sans-serif;
    box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.1);

    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);

    &:-moz-placeholder,
    &:-ms-input-placeholder,
    &:-webkit-input-placeholder {
        color: #adadac;
    }
`;

const Textarea = Styled.textarea`
    position: relative;
    border: 2px solid #999 !important;
    border-radius: 5px !important;
    display: block !important;
    font-size: 1em !important;
    line-height: 1.4 !important;
    margin: 0;
    padding: 10px 12px !important;
    width: 100% !important;
    background: 0 0;
    background-color: transparent !important;
    text-align: left;
    color: inherit !important;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
    font-family: poppins, Helvetica, sans-serif;
    box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.1);

    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    transform: translateZ(0);

    &:-moz-placeholder,
    &:-ms-input-placeholder,
    &:-webkit-input-placeholder {
        color: #adadac;
    }

    ${FormControl}
    height: auto;

    &:focus {
        height: auto;
    }
`;

const ReCaptcha = Styled.div`
    margin-bottom: 20px;
`;

const Map = Styled.div`
    width: 100%;
    height: 140px;
    margin: 0 0 35px;
`;

const Iframe = Styled.iframe`
    height: 140px;
    max-width: 100%;
    width: 100%;
    margin: 0;
    line-height: 1;
    border: none;
`;

const SubmitBtn = Styled.input`
    display: inline-block !important;
    position: relative !important;
    padding: 0.8em 2.1em !important;
    margin-bottom: 0.75em !important;
    margin-right: 0.25em;
    font-size: 1em !important;
    line-height: 1.2 !important;
    border: 0;
    outline: 0 !important;
    border: 2px solid #04b4e0 !important;
    color: #f5f5f5;
    text-shadow: none !important;
    background-color: transparent !important;
    border-radius: 30px !important;
    font-family: poppins, Helvetica, sans-serif !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out !important;
    box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.3) !important;

    &:hover {
        background-color: #04b4e0 !important;
        color: #fff !important;
        border: 2px solid #04b4e0 !important;
    }
`;
export {
    LmInfoBlock,
    InfoIcon,
    InfoHeading,
    InfoBlockValue,
    Map,
    Iframe,
    ClearFix,
    LeftColumn,
    RightColumn,
    FormGroup,
    Textarea,
    FormControl,
    ReCaptcha,
    SubmitBtn,
};
