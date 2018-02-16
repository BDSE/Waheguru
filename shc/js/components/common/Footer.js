import React, { Component } from 'react';
import { render } from 'react-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-column col-sm-4">
                            <h6>Stanford Health Care</h6>
                            <ul>
                                <li>&nbsp;</li>
                                <li><a href="http://stanfordhealthcare.org/search-results.doctors.html" target="_blank">Find a Doctor</a></li>
                                <li>&nbsp;</li>
                                <li><a href="http://stanfordhealthcare.org/search-results.conditions.html" target="_blank">Find Conditions &amp; Treatments</a></li>
                                <li>&nbsp;</li>
                                <li><a href="http://stanfordhealthcare.org/search-results.clinics.html" target="_blank">Find a Stanford Clinic</a></li>
                            </ul>
                        </div>
                        <div className="footer-column col-sm-4">
                            <h6>MyHealth Support</h6>
                            <ul>
                                <li>&nbsp;</li>
                                <li className="terms-link">Email the Help Desk</li>
                                <li>&nbsp;</li>
                                <li>Phone the Help Desk 24/7</li>
                                <li>(866) 367-0758</li>
                                <li>&nbsp;</li>
                                <li className="terms-link">Share feedback about MyHealth</li>
                                <li>&nbsp;</li>
                                <li className="terms-link">Take a Tour</li>
                            </ul>

                        </div>
                        <div className="footer-column col-sm-4">
                            <h6>MyHealth FAQ</h6>
                            <ul>
                                <li>&nbsp;</li>
                                <li><a href="https://stanfordhealthcare.org/for-patients-visitors/myhealth/faqs.html" target="_blank">General FAQ</a></li>
                                <li><a href="https://stanfordhealthcare.org/for-patients-visitors/myhealth/faqs.html#activation" target="_blank">Account Activation FAQ</a></li>
                                <li><a href="https://stanfordhealthcare.org/for-patients-visitors/myhealth/faqs.html#messaging" target="_blank">Messaging FAQ</a></li>
                                <li><a href="https://stanfordhealthcare.org/for-patients-visitors/myhealth/faqs.html#test-results" target="_blank">Test Results FAQ</a></li>
                                <li><a href="https://stanfordhealthcare.org/for-patients-visitors/myhealth/faqs.html#technical" target="_blank">Technical FAQ</a></li>
                                <li><a href="https://stanfordhealthcare.org/for-patients-visitors/myhealth/faqs.html#billing" target="_blank">Billing FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="copyright">
                                <div className="footer-logo">
                                    <a href="https://stanfordhealthcare.org"><img src={ SHC.config.resourceHost + "/resources/images/svg/StanfordHealthCare-white.svg" } width="135" height="40" /></a>
                                </div>
                                <ul className="footer-footer">
                                    <span>
                                        <li className="terms-link">Terms &amp; Conditions</li>
                                    </span>
                                    <li>&copy;&nbsp;{ new Date().getFullYear() } Stanford Health Care. All rights reserved.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
