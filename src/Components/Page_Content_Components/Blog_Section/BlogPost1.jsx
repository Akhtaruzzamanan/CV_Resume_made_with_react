import React from 'react';
import FullImg from '../../../images/blog/blog_post_1_full.jpg';

import {
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
} from './BlogPost1_Style';
function BlogPost1() {
    return (
        <SinglePageContent class="single-page-content">
            <article class="post">
                <PostThumbnail class="post-thumbnail">
                    <img src={FullImg} alt="image" />
                </PostThumbnail>

                <PostContent class="post-content">
                    {/* <!-- /Entry header --> */}
                    <EntryHeader class="entry-header">
                        {/* <!-- Entry meta --> */}
                        <EntryMetaTop class="entry-meta entry-meta-top">
                            <span>
                                <MetaTopLink
                                    style={{ color: '#b5b5b5 !important' }}
                                    href="#"
                                    rel="category tag"
                                >
                                    UI
                                </MetaTopLink>
                            </span>
                        </EntryMetaTop>
                        {/* <!-- /Entry meta --> */}

                        <EntryTitle class="entry-title">
                            Best Practices for Animated Progress Indicators
                        </EntryTitle>
                    </EntryHeader>
                    {/* <!-- /Entry header --> */}

                    {/* <!-- Entry content --> */}
                    <div class="entry-content">
                        <div class="row">
                            <div class=" col-xs-12 col-sm-12 ">
                                <div class="col-inner">
                                    <p>
                                        Nulla nulla nisl, sodales ac nulla ac,
                                        consequat vulputate purus. Curabitur
                                        tincidunt ipsum vel nibh rutrum
                                        accumsan. Nunc ullamcorper posuere leo,
                                        vitae aliquet risus pharetra in. Integer
                                        turpis eros, iaculis et mi non, pulvinar
                                        egestas leo. Etiam sagittis ex turpis,
                                        vitae cursus tortor interdum eu. Quisque
                                        ultrices nunc eget erat vestibulum
                                        euismod. Ut mauris nisi, facilisis at
                                        arcu nec, facilisis porttitor lorem.
                                    </p>
                                    <p>
                                        Vivamus vitae neque molestie, porta
                                        libero sed, tincidunt leo. In nec
                                        posuere odio, id rhoncus lorem. Proin id
                                        erat ut dolor condimentum viverra.
                                        Praesent viverra sed dolor ac luctus.
                                        Praesent placerat id lorem quis lacinia.
                                    </p>

                                    <Blockquote class="quote">
                                        Maecenas id finibus felis. Etiam vitae
                                        nibh et felis efficitur pellentesque.
                                        Mauris suscipit sapien nunc, a lacinia
                                        nibh feugiat ut. In hac habitasse platea
                                        dictumst.
                                        <footer class="quote-author">
                                            <span>Larry L. Johnson</span>
                                        </footer>
                                    </Blockquote>

                                    <p>
                                        Etiam interdum vulputate risus, vitae
                                        elementum neque consectetur sed. Donec
                                        at risus dui. Ut in suscipit neque.
                                        Vestibulum sit amet lobortis magna,
                                        commodo venenatis ante. Cras molestie,
                                        ex a auctor lacinia, risus est aliquam
                                        risus, sit amet semper purus tortor id
                                        ante. Donec lacus ipsum, porttitor et
                                        libero a, fringilla auctor quam. Sed in
                                        nisl id libero tincidunt aliquet. Aenean
                                        dui ipsum, auctor ut leo ut, semper
                                        dignissim lacus. Suspendisse faucibus
                                        viverra consequat. Maecenas efficitur
                                        massa vel eros sagittis dapibus. Nam
                                        lobortis mi in turpis hendrerit
                                        eleifend. Nulla non massa felis.
                                    </p>

                                    <p>
                                        Donec sit amet dolor ante. Vivamus vel
                                        massa accumsan, faucibus quam quis,
                                        convallis velit. Aliquam erat volutpat.
                                        Integer imperdiet diam quis arcu
                                        venenatis, quis sagittis nibh rhoncus.
                                        Donec non nisi scelerisque, sodales
                                        metus quis, accumsan mauris. Curabitur
                                        volutpat risus rutrum erat condimentum
                                        tristique. Nullam at felis diam. Quisque
                                        dictum felis non ante pretium mollis.
                                        Aliquam turpis neque, varius nec diam a,
                                        aliquam pulvinar diam. Interdum et
                                        malesuada fames ac ante ipsum primis in
                                        faucibus. Sed ipsum libero, aliquet sed
                                        bibendum faucibus, semper a dui.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Entry content --> */}

                    <EntryMetaBottom class="entry-meta entry-meta-bottom">
                        <DataAuthor class="date-author">
                            <Span1 class="entry-date">
                                <MetaTopLink href="#" rel="bookmark">
                                    <i className="far fa-clock"></i>{' '}
                                    <Span2 class="entry-date">
                                        March 16, 2020
                                    </Span2>
                                </MetaTopLink>
                            </Span1>
                            <span class="author vcard">
                                <MetaTopLink
                                    className="url fn n"
                                    href="#"
                                    rel="author"
                                >
                                    {' '}
                                    <i className="fas fa-user"></i> LMPixels
                                </MetaTopLink>
                            </span>
                        </DataAuthor>

                        {/* <!-- Share Buttons --> */}
                        <EntryShare class="entry-share btn-group share-buttons">
                            <ShareButtonLink
                                href="#"
                                class="btn"
                                target="_blank"
                                title="Share on Facebook"
                            >
                                <ShareIcon className="fab fa-facebook-f"></ShareIcon>
                            </ShareButtonLink>

                            <ShareButtonLink
                                href="#"
                                class="btn"
                                target="_blank"
                                title="Share on Twitter"
                            >
                                <ShareIcon className="fab fa-twitter"></ShareIcon>
                            </ShareButtonLink>

                            <ShareButtonLink
                                href="#"
                                class="btn"
                                title="Share on LinkedIn"
                            >
                                <ShareIcon className="fab fa-linkedin-in"></ShareIcon>
                            </ShareButtonLink>
                        </EntryShare>
                        {/* <!-- /Share Buttons --> */}
                    </EntryMetaBottom>

                    <PostTags class="post-tags">
                        <Tags class="tags">
                            <TagsLink href="#" rel="tag">
                                animate
                            </TagsLink>
                            <TagsLink href="#" rel="tag">
                                bar
                            </TagsLink>
                            <TagsLink href="#" rel="tag">
                                design
                            </TagsLink>
                            <TagsLink href="#" rel="tag">
                                progress
                            </TagsLink>
                            <TagsLink href="#" rel="tag">
                                ui
                            </TagsLink>
                        </Tags>
                    </PostTags>
                </PostContent>
            </article>
        </SinglePageContent>
    );
}

export default BlogPost1;
