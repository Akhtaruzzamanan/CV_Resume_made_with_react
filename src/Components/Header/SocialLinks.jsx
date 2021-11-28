import React from 'react';
import {
    SocialLinkA,
    SocialLinkDiv,
    SocialLinkLi,
    SocialLinkUl,
} from './SocialLinks_Style';
function SocialLinks() {
    return (
        <SocialLinkDiv class="social-links">
            <SocialLinkUl>
                <SocialLinkLi>
                    <SocialLinkA
                        href="https://www.linkedin.com/"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </SocialLinkA>
                </SocialLinkLi>
                <SocialLinkLi>
                    <SocialLinkA
                        href="https://www.facebook.com/"
                        target="_blank"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </SocialLinkA>
                </SocialLinkLi>
                <SocialLinkLi>
                    <SocialLinkA href="https://twitter.com/" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </SocialLinkA>
                </SocialLinkLi>
            </SocialLinkUl>
        </SocialLinkDiv>
    );
}

export default SocialLinks;
