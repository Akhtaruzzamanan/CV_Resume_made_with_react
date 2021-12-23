import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Style/animations.css';
import './Style/bootstrap-grid.min.css';
import './Style/magnific-popup.css';
import './Style/main.css';
import './Style/owl.carousel.css';
import './Style/perfect-scrollbar.css';
import './Style/reset.css';
import { css } from '@emotion/react';
import BounceLoader from 'react-spinners/BounceLoader';
// import mainBg from 'images/main_bg.png';
import Header from './Header/Header';
import MenuToggle from './MobileNavigation/MenuToggle';
import ArrowsNav from './ArrowsNav/ArrowsNav';
import Home from './Page_Content_Components/Home_Section/Home';
import AboutMe from './Page_Content_Components/AboutMe_Section/AboutMe';
import Resume from './Page_Content_Components/Resume_Section/Resume';
import Portfolio from './Page_Content_Components/Portfolio_Section/Portfolio';
import Blog from './Page_Content_Components/Blog_Section/Blog';
import Contact from './Page_Content_Components/Contact_Section/Contact';

const override = css`
    margin: auto;
    justify-content: center;
`;

function App() {
    // PreLoader Here
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);
    // PreLoader End here
    return (
        <div className="App">
            {loading ? (
                <BounceLoader
                    css={override}
                    color={'#04b4e0'}
                    loading={loading}
                    size={50}
                />
            ) : (
                // Copy form HTML

                <div class="page">
                    <div class="page-content">
                        {/* <Router> */}
                        <Header />

                        {/* <!-- Mobile Navigation --> */}
                        <MenuToggle />
                        {/* <!-- End Mobile Navigation --> */}

                        {/* <!-- Arrows Nav --> */}
                        <ArrowsNav />
                        {/* <!-- End Arrows Nav --> */}

                        <div class="content-area">
                            {/* <div class="animated-sections"> */}
                            <Routes>
                                {/* <!-- Home Subpage --> */}
                                <Route path="/home" element={<Home />} />
                                {/* <!-- End of Home Subpage --> */}

                                {/* <!-- About Me Subpage --> */}
                                <Route path="/about" element={<AboutMe />} />
                                {/* <!-- End of About Me Subpage --> */}

                                {/* <!-- Resume Subpage --> */}
                                <Route path="/resume" element={<Resume />} />
                                {/* <!-- End of Resume Subpage --> */}

                                {/* <!-- Portfolio Subpage --> */}
                                <Route
                                    path="/portfolio"
                                    element={<Portfolio />}
                                />
                                {/* <!-- End of Portfolio Subpage --> */}

                                {/* <!-- Blog Subpage --> */}
                                <Route path="/blog" element={<Blog />} />
                                {/* <!-- End of Blog Subpage --> */}

                                {/* <!-- Contact Subpage --> */}
                                <Route path="/contact" element={<Contact />} />
                                {/* <!-- End of Contact Subpage --> */}
                            </Routes>
                            {/* </div> */}
                        </div>
                        {/* </Router> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
