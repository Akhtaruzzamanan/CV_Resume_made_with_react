import Styled from 'styled-components';

const InfoBlockWithIcon = Styled.div`
    margin-bottom: 25px;
`;

const InfoBlockHeading = Styled.h4`
    margin: 5px 0;
`;

const InfoBlockPara = Styled.p`
    font-size: 0.95em;
`;

const CiIcon = Styled.div`
    display: table-cell;
    width: 54px;
    padding-right: 25px;
`;
const Icon = Styled.i`
    position: relative;
    font-size: 42px;
    color: #04b4e0;
    opacity: 0.7;
`;

export { InfoBlockWithIcon, InfoBlockHeading, InfoBlockPara, CiIcon, Icon };
