import React from 'react';
import {
    LmInfoBlock,
    InfoIcon,
    InfoHeading,
    InfoBlockValue,
    Map,
    Iframe,
    ClearFix,
    LeftColumn,
    RightColumn,
    FormGroup,
    Textarea,
    FormControl,
    ReCaptcha,
    SubmitBtn,
} from './Contact_Style';
import Info from './ContactInfoData';
import PageTitle from '../Page_Title/PageTitle';

function Contact() {
    return (
        <section data-id="contact" class="animated-section">
            <PageTitle Title="Contact" />

            <div>
                <div class="row">
                    {/* <!-- Contact Info --> */}
                    <div class="col-xs-12 col-sm-4">
                        {Info.map((element) => {
                            const { icon, heading } = element;

                            return (
                                <LmInfoBlock>
                                    <InfoIcon className={icon}></InfoIcon>
                                    <InfoHeading>{heading}</InfoHeading>
                                    <InfoBlockValue></InfoBlockValue>
                                </LmInfoBlock>
                            );
                        })}
                    </div>
                    {/* <!-- End of Contact Info --> */}

                    {/* <!-- Contact Form --> */}
                    <div class="col-xs-12 col-sm-8">
                        <Map id="map" class="map">
                            <div class="lmpixels-map">
                                <Iframe
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                    src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;amp;t=m&amp;amp;z=16&amp;amp;output=embed&amp;amp;iwloc=near&amp;output=embed"
                                ></Iframe>
                            </div>
                        </Map>
                        <PageTitle
                            Title="How Can I"
                            Span="Help You?"
                            height
                            width
                            paddingRight
                            paddingBottom
                            marginBottom
                            fontSize
                        />

                        <form
                            id="contact_form"
                            class=""
                            action=""
                            method="post"
                        >
                            {/* <div class="messages"></div> */}

                            <div class="">
                                <ClearFix class="fields clearfix">
                                    <LeftColumn class="left-column">
                                        <FormGroup
                                            class="
                                                                form-group
                                                                form-group-with-icon
                                                            "
                                        >
                                            <FormControl
                                                id="form_name"
                                                type="text"
                                                name="name"
                                                class="
                                                                    form-control
                                                                "
                                                placeholder="Full Name"
                                                required="required"
                                                data-error="Name is required."
                                            />
                                        </FormGroup>

                                        <FormGroup
                                            class="
                                                                form-group
                                                                form-group-with-icon
                                                            "
                                        >
                                            <FormControl
                                                id="form_email"
                                                type="email"
                                                name="email"
                                                class="
                                                                    form-control
                                                                "
                                                placeholder="Email Address"
                                                required="required"
                                                data-error="Valid email is required."
                                            />
                                        </FormGroup>

                                        <FormGroup
                                            class="
                                                                form-group
                                                                form-group-with-icon
                                                            "
                                        >
                                            <FormControl
                                                id="form_subject"
                                                type="text"
                                                name="subject"
                                                class="
                                                                    form-control
                                                                "
                                                placeholder="Subject"
                                                required="required"
                                                data-error="Subject is required."
                                            />
                                        </FormGroup>
                                    </LeftColumn>
                                    <RightColumn class="right-column">
                                        <FormGroup
                                            class="
                                                                form-group
                                                                form-group-with-icon
                                                            "
                                        >
                                            <Textarea
                                                id="form_message"
                                                name="message"
                                                class="form-control"
                                                placeholder="Message..."
                                                rows="7"
                                                required="required"
                                                data-error="Please, leave me a message."
                                            ></Textarea>
                                        </FormGroup>
                                    </RightColumn>
                                </ClearFix>

                                <ReCaptcha
                                    class="g-recaptcha"
                                    data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                                    data-theme="dark"
                                ></ReCaptcha>

                                <SubmitBtn
                                    type="submit"
                                    class="button btn-send"
                                    value="Send message"
                                />
                            </div>
                        </form>
                    </div>
                    {/* <!-- End of Contact Form --> */}
                </div>
            </div>
        </section>
    );
}

export default Contact;
