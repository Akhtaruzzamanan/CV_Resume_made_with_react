import React, { useState } from 'react';
import PageTitle from '../Page_Title/PageTitle';
import Menu from './PortfolioData';
// Images for portfolio start
import TabMenu from './TabMenu';
// Images for portfolio end

function Portfolio() {
    const [menuItems, setMenuItems] = useState(Menu);

    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((currentElement) => {
            return currentElement.category === categoryItem;
        });

        setMenuItems(updatedItems);
    };
    return (
        <section data-id="portfolio" class="animated-section">
            <PageTitle Title="Portfolio" />

            <div class="section-content">
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        {/* <!-- Portfolio Content --> */}
                        <div class="portfolio-content">
                            <ul class="portfolio-filters">
                                <li class="">
                                    <a
                                        class="
                                                            filter
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_all"
                                        onClick={() => setMenuItems(Menu)}
                                    >
                                        All
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="
                                                            filter
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_detailed"
                                        onClick={() => filterItem('Detailed')}
                                    >
                                        Detailed
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="
                                                            filter
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_mockups"
                                        onClick={() => filterItem('Mockups')}
                                    >
                                        Mockups
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="
                                                            filter
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_soundcloud"
                                        onClick={() => filterItem('SoundCloud')}
                                    >
                                        SoundCloud
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="
                                                            filter
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_vimeo-videos"
                                        onClick={() =>
                                            filterItem('Vimeo Videos')
                                        }
                                    >
                                        Vimeo Videos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="
                                                            filter
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_youtube-videos"
                                        onClick={() =>
                                            filterItem('YouTube Videos')
                                        }
                                    >
                                        YouTube Videos
                                    </a>
                                </li>
                            </ul>

                            {/* <!-- Portfolio Grid --> */}
                            <div>
                                {menuItems.map((element) => {
                                    const { id, image, name, category, icon } =
                                        element;

                                    return (
                                        <TabMenu
                                            image={image}
                                            name={name}
                                            category={category}
                                            icon={icon}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        {/* <!-- End of Portfolio Content --> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
