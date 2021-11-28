import Styled from 'styled-components';

const SkillContainer = Styled.div`
    position: relative;
    display: inline-block;
    background-color: #222;
    border: 1px solid #04b4e0;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 10px;
    margin-bottom: 8px;
    width: 100%;

    &:before {
        content: '';
        position: absolute;
        background-color: #04b4e0;
    }
`;

const SkillValue = Styled.div`
    font-size: 11px;
    line-height: 1.1em;
    position: relative;
    float: right;
    margin: 0 0 4px;
    color: #aaa;
`;

const SkillPercentage = Styled.div`
    background-color: #04b4e0;
    border: 2px solid #222;
    -moz-border-radius: 9px;
    -webkit-border-radius: 9px;
    border-radius: 9px;
    height: 8px;
    padding: 0;
    width: ${(props) => props.skillPercent || `0`};
     
    &${SkillValue} {
        -webkit-transition: all 2s ease-in-out;
        -moz-transition: all 2s ease-in-out;
        -o-transition: all 2s ease-in-out;
        -ms-transition: all 2s ease-in-out;
        transition: all 2s ease-in-out;
    }
`;

const SkillHeading = Styled.h4`
    font-size: 13px !important;
    line-height: 1.1em;
    position: relative;
    float: left;
    margin: 0 0 4px;
`;

export { SkillContainer, SkillHeading, SkillValue, SkillPercentage };
