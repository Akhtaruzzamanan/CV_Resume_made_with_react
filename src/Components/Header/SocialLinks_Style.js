import Styled from 'styled-components';

const SocialLinkDiv = Styled.div`
    margin: 20px 0;
`;

const SocialLinkUl = Styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const SocialLinkLi = Styled.li`
    display: inline-block;
`;

const SocialLinkA = Styled.a`
    color: #fff !important;
    border-radius: 20px;
    font-size: 18px;
    padding: 0;
    height: 30px;
    width: 30px;
    display: block;
    line-height: 30px;
    text-align: center;
    opacity: 0.9;

    &:hover {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export { SocialLinkDiv, SocialLinkUl, SocialLinkLi, SocialLinkA };
