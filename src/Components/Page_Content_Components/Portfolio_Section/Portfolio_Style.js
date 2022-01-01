import Styled from 'styled-components';

const PortfolioFilter = Styled.ul`
    margin-bottom: 30px;
    padding: 0px;
`;

const List = Styled.li`
    display: inline-block;
    margin-right: 15px;
    font-size: 13px;
    opacity: 0.7;
`;

const PortfolioLink = Styled.a`
    color: #aaa !important;
    cursor: pointer;
    padding: 0px;
`;

export { PortfolioFilter, List, PortfolioLink };
