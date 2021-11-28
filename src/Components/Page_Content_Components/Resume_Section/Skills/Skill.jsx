import React from 'react';
import {
    SkillContainer,
    SkillHeading,
    SkillPercentage,
    SkillValue,
} from './Skill_Style';

function Skill(props) {
    return (
        <>
            <div className="clearfix">
                <SkillHeading>{props.skillHeading}</SkillHeading>
                <SkillValue>{props.skillValue}</SkillValue>
            </div>
            <SkillContainer>
                <SkillPercentage
                    skillPercent={props.skillValue}
                ></SkillPercentage>
            </SkillContainer>
        </>
    );
}

export default Skill;
