import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import propOr from '@tinkoff/utils/object/propOr';
import { connect } from 'react-redux';

import '../../style.css';

const mapStateToProps = ({ application, data }) => {
    return {
        lang: application.lang,
        langMap: application.langMap,
        user: data.user
    };
};

class FooterLanding extends Component {
    static propTypes = {
        lang: PropTypes.string.isRequired,
        langMap: PropTypes.object.isRequired
    }

    render () {
        const { langMap } = this.props;
        const text = propOr('landing', {}, langMap);
        return (
            <footer className="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-2">
                                <h4>{text.header[21]}</h4>
                                <div className="menu">
                                    <ul>
                                        <li>
                                            <Button color='inherit' component={Link} to="/trading/trading-products">{text.header[12]}</Button>
                                        </li>
                                        <li>
                                            <Button color='inherit' component={Link} to="/trading/conditions-to-trade">{text.header[15]}</Button>
                                        </li>
                                        <li>
                                            <Button color='inherit' component={Link} to="/trading/compare-accounts">{text.header[13]}</Button>
                                        </li>
                                        <li>
                                            <Button color='inherit' component={Link} to="/trading/platform-and-apps">{text.header[14]}</Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2">
                                <h4>{text.header[22]}</h4>
                                <div className="menu">
                                    <ul>
                                        <li>
                                            <Button color='inherit' component={Link} to="/about/about-us">{text.header[8]}</Button>
                                        </li>
                                        <li>
                                            <Button color='inherit' component={Link} to="/support/contact-us">{text.header[23]}</Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3">
                                <h4>{text.header[24]}</h4>
                                <div className="contacts">
                                    <div>
                                        <span>deltaway.io12@gmail.com</span>
                                    </div>
                                    <div>
                                        <span>+74993807528</span>
                                    </div>
                                    <div>
                                        <span>
                                            <a
                                                href="https://goo.gl/maps/Dn6TS1vHrm8gckmq7"
                                                target="_blank"
                                            >
                                               Россия, Санкт-Петербург Московский пр. 120 БЦ Атлас Сити
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className="facts-footer">
                                    <p>
                                        {text.header[25]}
                                        <br />
                                        <br /> {text.header[26]}
                                    </p>
                                </div>
                                <hr />
                                <div className="payment-logos">
                                    <h4 className="payment-title">{text.header[27]}
                                    </h4>
                                    <img src="/src/apps/client/ui/pages/LandingPage/images/icons/payment/bitcoin.png" alt="bitcoin" />
                                    <img src="/src/apps/client/ui/pages/LandingPage/images/icons/payment/mastercard.png" alt="mastercard" />
                                    <img src="/src/apps/client/ui/pages/LandingPage/images/icons/payment/visa.png" alt="visa" />
                                    <img src="/src/apps/client/ui/pages/LandingPage/images/icons/payment/wire.png" alt="wire" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <p className="text-center">
    Copyright © 2022 Deltaway. All rights reserved.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>);
    }
}

export default connect(mapStateToProps)(FooterLanding);
