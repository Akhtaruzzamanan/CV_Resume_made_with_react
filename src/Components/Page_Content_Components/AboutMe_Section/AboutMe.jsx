import React from 'react';
import PageTitle from '../Page_Title/PageTitle';
import InfoBlock from './Info_Block/InfoBlock';
import InfoList from './Info_List/InfoList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialImag1 from '../../img/testimonials/testimonial-1.jpg';
import testimonialImag2 from '../../img/testimonials/testimonial-2.jpg';
import testimonialImag3 from '../../img/testimonials/testimonial-3.jpg';
import Pricing from './Pricing/Pricing';
import FunFacts from './FunFacts/FunFacts';
function AboutMe() {
    const testimonial = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    return (
        <section data-id="about-me" class="animated-section">
            <PageTitle Title="About" Span="Me" />

            <div class="section-content">
                {/* <!-- Personal Information --> */}
                <div class="row">
                    <div class="col-xs-12 col-sm-7">
                        <p>
                            Proin volutpat mauris ac pellentesque pharetra.
                            Suspendisse congue elit vel odio suscipit, sit amet
                            tempor nisl imperdiet. Quisque ex justo, faucibus ut
                            mi in, condimentum finibus dolor. Aliquam vitae
                            hendrerit dolor, eget imperdiet mauris. Maecenas et
                            ante id ipsum condimentum dictum et vel massa. Ut in
                            imperdiet dolor, vel consectetur dui.
                        </p>
                    </div>

                    <InfoList />
                </div>
                {/* <!-- End of Personal Information --> */}

                <div class="white-space-50"></div>

                {/* <!-- Services --> */}
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        {/* <BlockTitle /> */}
                        <PageTitle
                            Title="What"
                            Span="I Do"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <div class="col-inner">
                            <div class="info-list-w-icon">
                                <InfoBlock
                                    IconName="lnr lnr-store"
                                    Heading="E-commerce"
                                    Paragraph="Pellentesque pellentesque, ipsum sit
                                            amet auctor accumsan, odio tortor
                                            bibendum massa, sit amet ultricies
                                            ex lectus scelerisque nibh. Ut non
                                            sodales."
                                />
                                <InfoBlock
                                    IconName="lnr lnr-laptop-phone"
                                    Heading="Web Design"
                                    Paragraph="Pellentesque pellentesque, ipsum sit
                                            amet auctor accumsan, odio tortor
                                            bibendum massa, sit amet ultricies
                                            ex lectus scelerisque nibh. Ut non
                                            sodales."
                                />
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-6">
                        <div class="col-inner">
                            <div class="info-list-w-icon">
                                <InfoBlock
                                    IconName="lnr lnr-pencil"
                                    Heading="Copywriting"
                                    Paragraph="Pellentesque pellentesque, ipsum sit
                                            amet auctor accumsan, odio tortor
                                            bibendum massa, sit amet ultricies
                                            ex lectus scelerisque nibh. Ut non
                                            sodales."
                                />

                                <InfoBlock
                                    IconName="lnr lnr-flag"
                                    Heading="Management"
                                    Paragraph="Pellentesque pellentesque, ipsum sit
                                            amet auctor accumsan, odio tortor
                                            bibendum massa, sit amet ultricies
                                            ex lectus scelerisque nibh. Ut non
                                            sodales."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End of Services --> */}

                <div class="white-space-30"></div>

                {/* <!-- Testimonials --> */}
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <PageTitle
                            Title="Testimonials"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        {/* <Slider
                            class="testimonials owl-carousel"
                            {...testimonial}
                        > */}
                        {/* <!-- Testimonial 1 --> */}
                        <div class="testimonial">
                            <div class="img">
                                <img src={testimonialImag1} alt="Alex Smith" />
                            </div>
                            <div class="text">
                                <p>
                                    Vivamus at molestie dui, eu ornare orci.
                                    Curabitur vel egestas dolor. Nulla
                                    condimentum nunc sit amet urna tempus
                                    finibus. Duis mollis leo id ligula
                                    pellentesque, at vehicula dui ultrices.
                                </p>
                            </div>

                            <div class="author-info">
                                <h4 class="author">Julia Hickman</h4>
                                <h5 class="company">Omni Source</h5>
                                <div class="icon">
                                    <i
                                        class="
                                fas
                                fa-quote-right
                            "
                                    ></i>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End of Testimonial 1 --> */}

                        {/* <!-- Testimonial 2 --> */}
                        <div class="testimonial">
                            <div class="img">
                                <img src={testimonialImag2} alt="Alex Smith" />
                            </div>
                            <div class="text">
                                <p>
                                    Vivamus at molestie dui, eu ornare orci.
                                    Curabitur vel egestas dolor. Nulla
                                    condimentum nunc sit amet urna tempus
                                    finibus. Duis mollis leo id ligula
                                    pellentesque, at vehicula dui ultrices.
                                </p>
                            </div>

                            <div class="author-info">
                                <h4 class="author">Robert Watkins</h4>
                                <h5 class="company">Endicott Shoes</h5>
                                <div class="icon">
                                    <i
                                        class="
                                fas
                                fa-quote-right
                            "
                                    ></i>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End of Testimonial 2 --> */}

                        {/* <!-- Testimonial 3 --> */}
                        <div class="testimonial">
                            <div class="img">
                                <img src={testimonialImag3} alt="Alex Smith" />
                            </div>
                            <div class="text">
                                <p>
                                    Vivamus at molestie dui, eu ornare orci.
                                    Curabitur vel egestas dolor. Nulla
                                    condimentum nunc sit amet urna tempus
                                    finibus. Duis mollis leo id ligula
                                    pellentesque, at vehicula dui ultrices.
                                </p>
                            </div>

                            <div class="author-info">
                                <h4 class="author">Kristin Carroll</h4>
                                <h5 class="company">Helping Hand</h5>
                                <div class="icon">
                                    <i
                                        class="
                                fas
                                fa-quote-right
                            "
                                    ></i>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End of Testimonial 3 --> */}
                        {/* </Slider> */}
                    </div>
                </div>
                {/* <!-- End of Testimonials --> */}

                <div class="white-space-50"></div>

                {/* <!-- Clients --> */}
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <PageTitle
                            Title="Cilents"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div class="clients owl-carousel">
                            <div class="client-block">
                                <a href="#" target="_blank" title="Logo">
                                    <img
                                        src="img/clients/client-1.png"
                                        alt="Logo"
                                    />
                                </a>
                            </div>

                            <div class="client-block">
                                <a href="#" target="_blank" title="Logo">
                                    <img
                                        src="img/clients/client-2.png"
                                        alt="Logo"
                                    />
                                </a>
                            </div>

                            <div class="client-block">
                                <a href="#" target="_blank" title="Logo">
                                    <img
                                        src="img/clients/client-3.png"
                                        alt="Logo"
                                    />
                                </a>
                            </div>

                            <div class="client-block">
                                <a href="#" target="_blank" title="Logo">
                                    <img
                                        src="img/clients/client-4.png"
                                        alt="Logo"
                                    />
                                </a>
                            </div>

                            <div class="client-block">
                                <a href="#" target="_blank" title="Logo">
                                    <img
                                        src="img/clients/client-5.png"
                                        alt="Logo"
                                    />
                                </a>
                            </div>

                            <div class="client-block">
                                <a href="#" target="_blank" title="Logo">
                                    <img
                                        src="img/clients/client-6.png"
                                        alt="Logo"
                                    />
                                </a>
                            </div>

                            <div class="client-block">
                                <a href="#" target="_blank" title="Logo">
                                    <img
                                        src="img/clients/client-7.png"
                                        alt="Logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End of Clients --> */}

                <div class="white-space-50"></div>

                {/* <!-- Pricing --> */}
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <PageTitle
                            Title="Pricing"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <div class="fw-pricing clearfix row">
                            <Pricing
                                pricingName="Silver"
                                pricingDollar="$64"
                                pricingPara1="Lorem ipsum dolor"
                                pricingPara2="Pellentesque scelerisque"
                                pricingPara3="Morbi eu sagittis"
                            />

                            <Pricing
                                pricingName="Gold"
                                pricingDollar="$128"
                                pricingPara1="Lorem ipsum dolor"
                                pricingPara2="Pellentesque scelerisque"
                                pricingPara3="Morbi eu sagittis"
                            />
                        </div>
                    </div>
                </div>
                {/* <!-- End of Pricing --> */}

                <div class="white-space-50"></div>

                {/* <!-- Fun Facts --> */}
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <PageTitle
                            Title="Fun"
                            Span="Facts"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />
                    </div>
                </div>

                <div class="row">
                    <FunFacts
                        icon="lnr lnr-heart"
                        heading="Happy Clients"
                        value="578"
                        text=""
                    />

                    <FunFacts
                        icon="lnr lnr-clock"
                        heading="Working Hours"
                        value="4,780"
                        text=""
                    />

                    <FunFacts
                        icon="lnr lnr-star"
                        heading="Awards Won"
                        value="15"
                        text=""
                    />
                </div>
                {/* <!-- End of Fun Facts --> */}
            </div>
        </section>
    );
}

export default AboutMe;
