import Styled from 'styled-components';

const InfoListDiv = Styled.div`
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const InfoListUl = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export { InfoListDiv, InfoListUl };
