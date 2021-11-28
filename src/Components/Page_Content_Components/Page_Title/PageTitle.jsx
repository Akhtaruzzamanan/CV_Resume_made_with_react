import React from 'react';
import {
    PageTitleDiv,
    PageTitleHeading,
    PageTitleSpan,
} from './PageTitle_Style';

function PageTitle(props) {
    return (
        <PageTitleDiv
            Height={props.height}
            Width={props.width}
            PadRight={props.paddingRight}
            PadBottom={props.paddingBottom}
            MarBottom={props.marginBottom}
        >
            <PageTitleHeading FontSize={props.fontSize}>
                {props.Title} <PageTitleSpan>{props.Span}</PageTitleSpan>
            </PageTitleHeading>
        </PageTitleDiv>
    );
}

export default PageTitle;
