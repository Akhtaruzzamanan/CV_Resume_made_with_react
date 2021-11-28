import React from 'react';
import {
    FwPackage,
    FwHeadingSpan,
    FwButtonRow,
    FwDefaultRow,
    FwPricingRow,
    FwPricingSpan,
    FwPricingSmall,
} from './Pricing_Style';
function Pricing(props) {
    return (
        <div class="col-md-6">
            <FwPackage>
                <div>
                    <FwHeadingSpan>{props.pricingName}</FwHeadingSpan>
                </div>

                <FwPricingRow>
                    <FwPricingSpan>{props.pricingDollar}</FwPricingSpan>
                    <FwPricingSmall>per month</FwPricingSmall>
                </FwPricingRow>

                <FwButtonRow>
                    <a
                        to="/"
                        target="_self"
                        className="
                                btn
                                btn-secondary
                            "
                    >
                        Free Trial
                    </a>
                </FwButtonRow>

                <FwDefaultRow>{props.pricingPara1}</FwDefaultRow>
                <FwDefaultRow>{props.pricingPara2}</FwDefaultRow>
                <FwDefaultRow>{props.pricingPara3}</FwDefaultRow>
            </FwPackage>
        </div>
    );
}

export default Pricing;
