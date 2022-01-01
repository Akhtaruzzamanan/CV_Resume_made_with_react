import React from 'react';
import { Link } from 'react-router-dom';
import {
    BlogCard,
    CategoryLink,
    PostImg,
    Mask,
    MediaBlock,
    PostInfo,
    PostTitle,
    PostDate,
} from './BlogPost_Style';

function BlogPost(props) {
    return (
        <div class="item post-1">
            <BlogCard>
                <MediaBlock>
                    <div>
                        <CategoryLink href="#" title="View all posts">
                            {props.title}
                        </CategoryLink>
                    </div>
                    <Link to={props.link}>
                        <PostImg src={props.image} alt={props.heading} />
                        <Mask></Mask>
                    </Link>
                </MediaBlock>
                <PostInfo>
                    <PostDate>{props.date}</PostDate>
                    <Link to={props.link}>
                        <PostTitle>{props.heading}</PostTitle>
                    </Link>
                </PostInfo>
            </BlogCard>
        </div>
    );
}

export default BlogPost;
