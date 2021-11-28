import React from 'react';
import PageTitle from '../Page_Title/PageTitle';
import Certificate from './Certificate/Certificate';
import Skill from './Skills/Skill';
import TimelineItem from './TimelineItems/TimelineItem';
import image1 from '../../img/clients/client-1.png';
import image2 from '../../img/clients/client-5.png';

function Resume() {
    return (
        <section data-id="resume" class="animated-section">
            <PageTitle Title="Resume" />

            <div class="section-content">
                <div class="row">
                    <div class="col-xs-12 col-sm-7">
                        <PageTitle
                            Title="Education"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />

                        <div
                            class="
                                                timeline timeline-second-style
                                                clearfix
                                            "
                        >
                            <TimelineItem
                                periodTime="2008"
                                companyName="University of Studies"
                                itemTitle="Frontend Development"
                                itemPara="Maecenas finibus nec sem ut imperdiet.
                                        Ut tincidunt est ac dolor aliquam
                                        sodales. Phasellus sed mauris hendrerit,
                                        laoreet sem in, lobortis ante."
                            />

                            <TimelineItem
                                periodTime="2007"
                                companyName="University of Studies"
                                itemTitle="Graphic Design"
                                itemPara="Aliquam tincidunt malesuada tortor vitae
                                iaculis. In eu turpis iaculis, feugiat
                                risus quis, aliquet urna. Quisque
                                fringilla mollis risus, eu pulvinar
                                dolor."
                            />
                        </div>

                        <div class="white-space-50"></div>

                        <PageTitle
                            Title="Experience"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />

                        <div
                            class="
                                                timeline timeline-second-style
                                                clearfix
                                            "
                        >
                            <TimelineItem
                                periodTime="2016 - Current"
                                companyName="Google"
                                itemTitle="Lead Ui/Ux Designer"
                                itemPara="Praesent dignissim sollicitudin justo,
                                sed elementum quam lacinia quis.
                                Phasellus eleifend tristique posuere.
                                Sed vitae dui nec magna."
                            />

                            <TimelineItem
                                periodTime="2013 - 2016"
                                companyName="Adobe"
                                itemTitle="Senior Ui/Ux Designer"
                                itemPara="Maecenas tempus faucibus rutrum. Duis eu
                                aliquam urna. Proin vitae nulla
                                tristique, ornare felis id, congue
                                libero. Nam volutpat euismod quam."
                            />

                            <TimelineItem
                                periodTime="2011 - 2013"
                                companyName="Google"
                                itemTitle="Junior Ui/Ux Designer"
                                itemPara="Duis mollis nunc quis quam viverra
                                venenatis. Nulla nulla arcu, congue
                                vitae nunc ac, sodales ultricies diam.
                                Nullam justo leo, tincidunt sit amet."
                            />
                        </div>
                    </div>

                    {/* <!-- Skills & Certificates --> */}
                    <div class="col-xs-12 col-sm-5">
                        {/* <!-- Design Skills --> */}
                        <PageTitle
                            Title="Design"
                            Span="Skills"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />

                        <div
                            class="
                                                skills-info skills-second-style
                                            "
                        >
                            <Skill skillHeading="Web Design" skillValue="95%" />
                            <Skill
                                skillHeading="Print Design"
                                skillValue="65%"
                            />
                            <Skill
                                skillHeading="Logo Design"
                                skillValue="80%"
                            />
                            <Skill
                                skillHeading="Graphic Design"
                                skillValue="90%"
                            />
                        </div>
                        {/* <!-- End of Design Skills --> */}

                        <div class="white-space-10"></div>

                        {/* <!-- Coding Skills --> */}
                        <PageTitle
                            Title="Coding"
                            Span="Skills"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />

                        <div
                            class="
                                                skills-info skills-second-style
                                            "
                        >
                            <Skill skillHeading="JavaScript" skillValue="95%" />
                            <Skill skillHeading="PHP" skillValue="85%" />
                            <Skill skillHeading="HTML/CSS" skillValue="100%" />
                            <Skill
                                skillHeading="Smarty/Twig"
                                skillValue="75%"
                            />
                            <Skill skillHeading="Perl" skillValue="90%" />
                        </div>
                        {/* <!-- End of Coding Skills --> */}

                        <div class="white-space-10"></div>

                        {/* <!-- Knowledges --> */}
                        <PageTitle
                            Title="Knowledges"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />

                        <ul class="knowledges">
                            <li>Marketing</li>
                            <li>Print</li>
                            <li>Digital Design</li>
                            <li>Social Media</li>
                            <li>Time Management</li>
                            <li>Communication</li>
                            <li>Problem-Solving</li>
                            <li>Social Networking</li>
                            <li>Flexibility</li>
                        </ul>
                        {/* <!-- End of Knowledges --> */}
                    </div>
                    {/* <!-- End of Skills & Certificates --> */}
                </div>

                <div class="white-space-50"></div>

                {/* <!-- Certificates --> */}
                <div class="row">
                    <div class="col-xs-12 col-sm-12">
                        <PageTitle
                            Title="Certificates"
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
                    {/* <!-- Certificate 1 --> */}
                    <Certificate
                        image={image1}
                        title="Psyhology of Intertnation Design"
                        certiId="Membership ID: XXXX"
                        date="19 April 2018"
                    />

                    <Certificate
                        image={image2}
                        title="Psyhology of Intertnation Design"
                        certiId="Membership ID: XXXX"
                        date="19 April 2018"
                    />
                </div>
                {/* <!-- End of Certificates --> */}
            </div>
        </section>
    );
}

export default Resume;
