import React from 'react';
import HeaderContent from './HeaderContent';
import {
    HeaderButton,
    HeaderButtonLink,
    HeaderWithMobile,
} from './Header_Style';
import SidebarMenu from './SidebarMenu';
import SocialLinks from './SocialLinks';

function Header() {
    return (
        <HeaderWithMobile id="site_header" className="mobile-menu-hide">
            <HeaderContent />
            <SidebarMenu />
            <SocialLinks />
            <HeaderButton>
                <HeaderButtonLink
                    href="#"
                    target="_blank"
                    className="btn btn-primary"
                >
                    Download CV
                </HeaderButtonLink>
            </HeaderButton>
            {/* <div className="copyrights">© 2020 All rights reserved.</div> */}
        </HeaderWithMobile>
    );
}

export default Header;
