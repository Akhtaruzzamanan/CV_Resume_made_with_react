import React from 'react';
import {
    CertiContent,
    CertiDate,
    CertificateItem,
    CertiId,
    CertiLogo,
    LogoImage,
    TitleHeading,
} from './Certificate_Style';

function Certificate(props) {
    return (
        <div className="col-xs-12 col-sm-6">
            <CertificateItem>
                <CertiLogo>
                    <LogoImage src={props.image} alt="logo" />
                </CertiLogo>

                <CertiContent>
                    <div>
                        <TitleHeading>{props.title}</TitleHeading>
                    </div>
                    <CertiId>
                        <span>{props.certiId}</span>
                    </CertiId>
                    <CertiDate>
                        <span>{props.date}</span>
                    </CertiDate>
                </CertiContent>
            </CertificateItem>
        </div>
    );
}

export default Certificate;
