import React from 'react';
import {
    Divider,
    ItemCompanySpan,
    ItemPeriodHeading,
    ItemTitleHeading,
    LeftPart,
    RightPart,
    RightPartPara,
    TimelineItemDiv,
} from './TimelineItem_Style';

function TimelineItem(props) {
    return (
        <TimelineItemDiv className="clearfix">
            <LeftPart>
                <ItemPeriodHeading>{props.periodTime}</ItemPeriodHeading>
                <ItemCompanySpan>{props.companyName}</ItemCompanySpan>
            </LeftPart>
            <Divider></Divider>
            <RightPart>
                <ItemTitleHeading>{props.itemTitle}</ItemTitleHeading>
                <RightPartPara>{props.itemPara}</RightPartPara>
            </RightPart>
        </TimelineItemDiv>
    );
}

export default TimelineItem;
