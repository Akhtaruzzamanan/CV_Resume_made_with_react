import Styled from 'styled-components';

const BlogCard = Styled.div`
    display: block;
    position: relative;
    padding: 0;
    background: #444;
`;

const CategoryLink = Styled.a`
    position: absolute;
    top: 10px;
    left: 10px;
    background: #fff;
    padding: 2px 7px;
    line-height: 1.2em;
    font-size: 11px;
    color: #222 !important;
    z-index: 3;
`;

const PostImg = Styled.img`
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
`;

const Mask = Styled.div`
    position: absolute;
    background: #4f565e;
    background: rgba(0, 0, 0, 0.12);
    display: inline-block;
    font-family: linearicons-free;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    left: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    &:after {
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -22px 0 0 -22px;
        width: 44px;
        line-height: 44px;
        font-size: 44px;
        text-align: center;
        content: '\\e828';
        color: #fff;
    }
`;

const MediaBlock = Styled.div`
    overflow: hidden;
    position: relative;

    &:hover {
        ${PostImg} {
            transform: scale(1.1);
        }

        ${Mask} {
            visibility: visible;
            opacity: 1;
        }
    }
`;

const PostInfo = Styled.div`
    padding: 1em 1.4em 1.4em;
    border: 1px solid #444;
    border-top: 0;
`;

const PostTitle = Styled.h4`
    margin: 5px 0 0;
    line-height: 1.5em;
`;

const PostDate = Styled.div`
    display: inline-block;
    color: #aaa;
    font-size: 11px;
    line-height: 1.1em;
    font-weight: 300;
`;

export {
    BlogCard,
    CategoryLink,
    PostImg,
    Mask,
    MediaBlock,
    PostInfo,
    PostTitle,
    PostDate,
};
