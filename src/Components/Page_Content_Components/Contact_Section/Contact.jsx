import React from 'react';
import PageTitle from '../Page_Title/PageTitle';

function Contact() {
    return (
        <section data-id="contact" class="animated-section">
            <PageTitle Title="Contact" />

            <div class="section-content">
                <div class="row">
                    {/* <!-- Contact Info --> */}
                    <div class="col-xs-12 col-sm-4">
                        <div class="lm-info-block gray-default">
                            <i class="lnr lnr-map-marker"></i>
                            <h4>San Francisco</h4>
                            <span class="lm-info-block-value"></span>
                            <span class="lm-info-block-text"></span>
                        </div>

                        <div class="lm-info-block gray-default">
                            <i class="lnr lnr-phone-handset"></i>
                            <h4>415-832-2000</h4>
                            <span class="lm-info-block-value"></span>
                            <span class="lm-info-block-text"></span>
                        </div>

                        <div class="lm-info-block gray-default">
                            <i class="lnr lnr-envelope"></i>
                            <h4>
                                <a
                                    href="https://lmpixels.com/cdn-cgi/l/email-protection"
                                    class="__cf_email__"
                                    data-cfemail="741518110c34110c15190418115a171b19"
                                >
                                    [email&#160;protected]
                                </a>
                            </h4>
                            <span class="lm-info-block-value"></span>
                            <span class="lm-info-block-text"></span>
                        </div>

                        <div class="lm-info-block gray-default">
                            <i class="lnr lnr-checkmark-circle"></i>
                            <h4>Freelance Available</h4>
                            <span class="lm-info-block-value"></span>
                            <span class="lm-info-block-text"></span>
                        </div>
                    </div>
                    {/* <!-- End of Contact Info --> */}

                    {/* <!-- Contact Form --> */}
                    <div class="col-xs-12 col-sm-8">
                        <div id="map" class="map">
                            <div class="lmpixels-map">
                                <iframe
                                    frameborder="0"
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                    src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;amp;t=m&amp;amp;z=16&amp;amp;output=embed&amp;amp;iwloc=near&amp;output=embed"
                                ></iframe>
                            </div>
                        </div>
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
                            class="contact-form"
                            action="https://lmpixels.com/demo/breezycv/dark/1/contact_form/contact_form.php"
                            method="post"
                        >
                            <div class="messages"></div>

                            <div class="controls two-columns">
                                <div class="fields clearfix">
                                    <div class="left-column">
                                        <div
                                            class="
                                                                form-group
                                                                form-group-with-icon
                                                            "
                                        >
                                            <input
                                                id="form_name"
                                                type="text"
                                                name="name"
                                                class="
                                                                    form-control
                                                                "
                                                placeholder=""
                                                required="required"
                                                data-error="Name is required."
                                            />
                                            <label>Full Name</label>
                                            <div
                                                class="
                                                                    form-control-border
                                                                "
                                            ></div>
                                            <div
                                                class="
                                                                    help-block
                                                                    with-errors
                                                                "
                                            ></div>
                                        </div>

                                        <div
                                            class="
                                                                form-group
                                                                form-group-with-icon
                                                            "
                                        >
                                            <input
                                                id="form_email"
                                                type="email"
                                                name="email"
                                                class="
                                                                    form-control
                                                                "
                                                placeholder=""
                                                required="required"
                                                data-error="Valid email is required."
                                            />
                                            <label>Email Address</label>
                                            <div
                                                class="
                                                                    form-control-border
                                                                "
                                            ></div>
                                            <div
                                                class="
                                                                    help-block
                                                                    with-errors
                                                                "
                                            ></div>
                                        </div>

                                        <div
                                            class="
                                                                form-group
                                                                form-group-with-icon
                                                            "
                                        >
                                            <input
                                                id="form_subject"
                                                type="text"
                                                name="subject"
                                                class="
                                                                    form-control
                                                                "
                                                placeholder=""
                                                required="required"
                                                data-error="Subject is required."
                                            />
                                            <label>Subject</label>
                                            <div
                                                class="
                                                                    form-control-border
                                                                "
                                            ></div>
                                            <div
                                                class="
                                                                    help-block
                                                                    with-errors
                                                                "
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="right-column">
                                        <div
                                            class="
                                                                form-group
                                                                form-group-with-icon
                                                            "
                                        >
                                            <textarea
                                                id="form_message"
                                                name="message"
                                                class="
                                                                    form-control
                                                                "
                                                placeholder=""
                                                rows="7"
                                                required="required"
                                                data-error="Please, leave me a message."
                                            ></textarea>
                                            <label>Message</label>
                                            <div
                                                class="
                                                                    form-control-border
                                                                "
                                            ></div>
                                            <div
                                                class="
                                                                    help-block
                                                                    with-errors
                                                                "
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="g-recaptcha"
                                    data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"
                                    data-theme="dark"
                                ></div>

                                <input
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
