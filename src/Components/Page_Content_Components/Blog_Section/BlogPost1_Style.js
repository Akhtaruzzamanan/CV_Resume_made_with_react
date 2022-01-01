import Styled from 'styled-components';

const SinglePageContent = Styled.div`
    position: absolute;
    background-color: #222;
    height: 100%;
    width: 100%;
    border-radius: 30px;
    padding: 60px;
    overflow: auto;

    @media (max-width: 1024px) {
        border-radius: 0;
        overflow: auto !important;
    }
`;

const PostThumbnail = Styled.div`
    background: #b2b2b2;
    display: block;
    position: relative;
    width: 100%;
    z-index: 0;
`;

const PostContent = Styled.div`
    position: relative;
    margin-top: -70px;
    margin-left: 40px;
    margin-right: 40px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #222;
    z-index: 1;

    @media (max-width: 1024px) {
        position: relative;
        margin-left: 20px;
        margin-right: 20px;
    }

    @media (max-width: 480px) {
        position: relative;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding-left: 0;
        padding-right: 0;
    }
`;

const EntryHeader = Styled.header`
    position: relative;
    z-index: 1;
    padding: 5px 0 0;
`;

const EntryMetaTop = Styled.div`
    color: #9e9e9e;
    margin: 15px 0;
    font-size: 13px;
`;

const MetaTopLink = Styled.a`
    color: #b5b5b5 !important;
`;

const EntryMetaBottom = Styled.div`
    // color: #9e9e9e;
    // margin: 15px 0;
    // font-size: 13px;

    display: inline-block;
    width: 100%;
    background-color: #333;
    border: 1px solid #444;
    padding: 0 10px;
    margin: 30px 0 0;
`;

const EntryTitle = Styled.h2`
    font-size: 32px;
    line-height: 1.3;
    margin: 15px 0;
`;

const DataAuthor = Styled.div`
    display: inline-block;
    line-height: 28px;
    margin: 5px 0;
`;

const Span1 = Styled.span`
    &:after {
        content: '';
        height: 14px;
        line-height: 1em;
        display: inline-block;
        margin: 0 6px 0 9px;
        background-color: #e5e5e5;
        width: 1px;
        top: 2px;
        position: relative;
    }
`;

const Span2 = Styled.span`
    &:after {
        display: none;
    }
`;

const Blockquote = Styled.blockquote`
    padding: 15px 20px;
    margin: 20px 0;
    font-size: 1em;
    border-left: 2px solid #d8d8d8;
    font-style: italic;
`;

// const Span3 = Styled.span`
//     &:after {
//         display: none;
//     }
// `;

const EntryShare = Styled.div`
    float: right;
    // display: block;
    // margin: 25px 0 0;

    display: inline-block;
    margin: 5px 0;
`;

const ShareButtonLink = Styled.a`
    display: inline-block;
    // margin: 0 3px 0 0;
    margin: 0 7px 0 0;
    // margin: 5px
    padding: 0;
    width: 28px;
    height: 28px;
    color: #b5b5b5 !important;
    background-color: #222;
    border: 1px solid #222;
    text-align: center;
    border-radius: 0;

    &:hover {
        color: #fff !important;
        background-color: #04b4e0;
        border-color: #04b4e0;
    }

    &:last-child {
        margin-right: 0;
        border-radius: 0;
    }
`;

const ShareIcon = Styled.i`
    font-size: 14px;
    line-height: 26px;
`;

const PostTags = Styled.div`
    margin: 30px 0;
    text-align: left;
`;

const Tags = Styled.div`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const TagsLink = Styled.a`
    display: inline-block;
    font-size: 12px;
    line-height: 1.5em;
    color: #e5e5e5 !important;
    padding: 2px 7px;
    background-color: #444;
    border-radius: 3px;
    border: 1px solid #444;
    margin: 3px 2px 2px;

    &:first-child {
        margin-left: 0;
    }
`;

export {
    SinglePageContent,
    PostThumbnail,
    PostContent,
    EntryHeader,
    EntryMetaTop,
    MetaTopLink,
    EntryMetaBottom,
    EntryTitle,
    DataAuthor,
    Span1,
    Span2,
    Blockquote,
    // Span3,
    EntryShare,
    ShareButtonLink,
    ShareIcon,
    PostTags,
    Tags,
    TagsLink,
};
