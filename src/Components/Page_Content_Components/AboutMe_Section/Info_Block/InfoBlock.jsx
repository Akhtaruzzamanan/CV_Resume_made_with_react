import React from 'react';
import {
    CiIcon,
    Icon,
    InfoBlockHeading,
    InfoBlockPara,
    InfoBlockWithIcon,
} from './InfoBlock_Style';

function InfoBlock(props) {
    return (
        <InfoBlockWithIcon>
            <CiIcon>
                <Icon className={props.IconName}></Icon>
            </CiIcon>
            <div>
                <InfoBlockHeading>{props.Heading}</InfoBlockHeading>
                <InfoBlockPara>{props.Paragraph}</InfoBlockPara>
            </div>
        </InfoBlockWithIcon>
    );
}

export default InfoBlock;
