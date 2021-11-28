import React from 'react';
import Typewriter from 'typewriter-effect';
function Home() {
    return (
        <section data-id="home" class="animated-section start-page">
            <div class="section-content vcentered">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="title-block">
                            <h2>Alex Smith</h2>
                            {/* <div
                                class="
                                                    owl-carousel
                                                    text-rotation
                                                "
                            >
                                <div class="item">
                                    <div class="sp-subtitle">Web Designer</div>
                                </div>

                                <div class="item">
                                    <div class="sp-subtitle">
                                        Frontend-developer
                                    </div>
                                </div>
                            </div> It was before and now we are use in this place Typing effect */}
                            <div className="item">
                                <div className="sp-subtitle">
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            strings: [
                                                'Web Developer',
                                                'Web Designer',
                                                'JavaScript Developer',
                                                'React Developer',
                                                'Frontend Developer',
                                                'YouTuber',
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
