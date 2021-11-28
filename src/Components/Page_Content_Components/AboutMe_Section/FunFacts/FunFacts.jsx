import React from 'react';
import {
    FunFactsDiv,
    FunFactsHeading,
    FunFactsIcon,
    FunFactValue,
    FunFactText,
} from './FunFacts_Style';
function FunFacts(props) {
    return (
        <div class="col-xs-12 col-sm-4">
            <FunFactsDiv>
                <FunFactsIcon className={props.icon}></FunFactsIcon>
                <FunFactsHeading>{props.heading}</FunFactsHeading>
                <FunFactValue>{props.value}</FunFactValue>
                <FunFactText>{props.text}</FunFactText>
            </FunFactsDiv>
        </div>
    );
}

export default FunFacts;
