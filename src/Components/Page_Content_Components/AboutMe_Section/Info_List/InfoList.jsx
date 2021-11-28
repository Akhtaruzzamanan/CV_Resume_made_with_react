import React from 'react';
import { InfoListDiv, InfoListUl } from './InfoList_Style';
import List from './List';

function InfoList() {
    return (
        <div class="col-xs-12 col-sm-5">
            <InfoListDiv>
                <InfoListUl>
                    <List Title="Age" Data="32" />
                    <List Title="Residence" Data="USA" />
                    <List Title="Address" Data="88 Some Street, Some Town" />
                    <List Title="e-mail" Data="[email&#160;protected]" />
                    <List Title="Phone" Data="+0123 123 456 789" />
                </InfoListUl>
            </InfoListDiv>
        </div>
    );
}

export default InfoList;
