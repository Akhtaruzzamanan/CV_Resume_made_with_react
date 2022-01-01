import React, { useState } from 'react';
import PageTitle from '../Page_Title/PageTitle';
import Menu from './PortfolioData';
import { PortfolioFilter, List, PortfolioLink } from './Portfolio_Style';
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
                        <div>
                            <PortfolioFilter>
                                <List>
                                    <PortfolioLink
                                        className="
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_all"
                                        onClick={() => setMenuItems(Menu)}
                                    >
                                        All
                                    </PortfolioLink>
                                </List>
                                <List>
                                    <PortfolioLink
                                        className="
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_detailed"
                                        onClick={() => filterItem('Detailed')}
                                    >
                                        Detailed
                                    </PortfolioLink>
                                </List>
                                <List>
                                    <PortfolioLink
                                        className="
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_mockups"
                                        onClick={() => filterItem('Mockups')}
                                    >
                                        Mockups
                                    </PortfolioLink>
                                </List>
                                <List>
                                    <PortfolioLink
                                        className="
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_soundcloud"
                                        onClick={() => filterItem('SoundCloud')}
                                    >
                                        SoundCloud
                                    </PortfolioLink>
                                </List>
                                <List>
                                    <PortfolioLink
                                        className="
                                                            btn btn-sm btn-link
                                                        "
                                        data-group="category_vimeo-videos"
                                        onClick={() =>
                                            filterItem('Vimeo Videos')
                                        }
                                    >
                                        Vimeo Videos
                                    </PortfolioLink>
                                </List>
                                <List>
                                    <PortfolioLink
                                        className="btn btn-sm btn-link"
                                        data-group="category_youtube-videos"
                                        onClick={() =>
                                            filterItem('YouTube Videos')
                                        }
                                    >
                                        YouTube Videos
                                    </PortfolioLink>
                                </List>
                            </PortfolioFilter>

                            {/* <!-- Portfolio Grid --> */}
                            <div>
                                {menuItems.map((element) => {
                                    const { image, name, category, icon } =
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
