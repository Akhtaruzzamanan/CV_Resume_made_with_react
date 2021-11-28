import React from 'react';
import { ListLi, TitleSpan } from './List_Style';

function List(props) {
    return (
        <ListLi>
            <TitleSpan class="title">{props.Title}</TitleSpan>
            <span>{props.Data}</span>
        </ListLi>
    );
}

export default List;
