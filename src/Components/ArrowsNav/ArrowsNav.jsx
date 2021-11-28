import React from 'react';
import { ArrowIconDiv, ArrowNavDiv } from './ArrowsNav_Style';

function ArrowsNav() {
    return (
        <ArrowNavDiv>
            <ArrowIconDiv>
                <i className="lnr lnr-chevron-right"></i>
            </ArrowIconDiv>
            <ArrowIconDiv>
                <i className="lnr lnr-chevron-left"></i>
            </ArrowIconDiv>
        </ArrowNavDiv>
    );
}

export default ArrowsNav;
