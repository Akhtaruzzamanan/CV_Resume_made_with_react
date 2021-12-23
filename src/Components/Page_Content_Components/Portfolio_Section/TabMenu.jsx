import React from 'react';
import {
    PortfolioItemImg,
    Figure,
    FigureImg,
    FigureLink,
    FigureIcon,
    FigureName,
    FigureCategory,
} from './TabMenu_Style';

function TabMenu(props) {
    return (
        <Figure>
            <PortfolioItemImg>
                <FigureImg src={props.image} alt={props.name} />
                <FigureLink
                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                    title={props.name}
                ></FigureLink>
            </PortfolioItemImg>

            <FigureIcon className={props.icon}></FigureIcon>
            <FigureName>{props.name}</FigureName>
            <FigureCategory>{props.category}</FigureCategory>
        </Figure>
    );
}

export default TabMenu;
