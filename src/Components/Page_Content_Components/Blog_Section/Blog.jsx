import React from 'react';
import PageTitle from '../Page_Title/PageTitle';
import BlogPost from './BlogPost';
import BlogItem from './BlogData';

function Blog() {
    return (
        <section data-id="blog" class="animated-section">
            <PageTitle Title="Blog" />

            <div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div
                            className="
                                                blog-masonry
                                                two-columns
                                                clearfix
                                            "
                        >
                            {/* <!-- Blog Post 1 --> */}

                            {BlogItem.map((element) => {
                                const { title, heading, date, link, image } =
                                    element;

                                return (
                                    <BlogPost
                                        title={title}
                                        heading={heading}
                                        date={date}
                                        link={link}
                                        image={image}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
