import React, { Component } from 'react';

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

class Pricing extends Component {
    static propTypes = {
        lang: PropTypes.string.isRequired,
        langMap: PropTypes.object.isRequired
    }

    render () {
        const { langMap } = this.props;
        const text = propOr('landing', {}, langMap);

        return (
            <div id="pricing">
                <section className="pricing">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="title-head">
                                {text.pricing[1]}
                                <span> {text.pricing[2]}</span>
                            </h2>
                            <div className="title-head-subtitle">
                                <p />
                            </div>
                        </div>
                        <div className="row pricing-tables-content">
                            <div className="pricing-container">
                                <div className="pricing-switcher">
                                    <p>
                                        <input
                                            type="radio"
                                            name="switch"
                                            defaultValue="buy"
                                            id="buy-1"
                                            defaultChecked=""
                                        />
                                        <label htmlFor="buy-1">{text.pricing[3]}</label>
                                        <input
                                            type="radio"
                                            name="switch"
                                            defaultValue="sell"
                                            id="sell-1"
                                        />
                                        <label htmlFor="sell-1">{text.pricing[4]}</label>
                                        <span className="switch" />
                                    </p>
                                </div>
                                <ul className="pricing-list bounce-invert">
                                    <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                        <ul className="pricing-wrapper">
                                            <li data-type="buy" className="is-visible">
                                                <header className="pricing-header">
                                                    <div className="price">
                                                        <span className="value">EUR/USD</span>
                                                    </div>
                                                </header>
                                            </li>
                                            <li data-type="sell" className="is-hidden">
                                                <header className="pricing-header">
                                                    <div className="price">
                                                        <span className="value">BTC/USD</span>
                                                    </div>
                                                </header>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                        <ul className="pricing-wrapper">
                                            {/* Buy Pricing Table #2 Starts */}
                                            <li data-type="buy" className="is-visible">
                                                <header className="pricing-header">
                                                    <div className="price">
                                                        <span className="value">USD/JPY</span>
                                                    </div>
                                                </header>
                                            </li>
                                            <li data-type="sell" className="is-hidden">
                                                <header className="pricing-header">
                                                    <div className="price">
                                                        <span className="value">LTC/USD</span>
                                                    </div>
                                                </header>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                        <ul className="pricing-wrapper">
                                            <li data-type="buy" className="is-visible">
                                                <header className="pricing-header">
                                                    <div className="price">
                                                        <span className="value">GBP/USD</span>
                                                    </div>
                                                </header>
                                            </li>
                                            <li data-type="sell" className="is-hidden">
                                                <header className="pricing-header">
                                                    <div className="price">
                                                        <span className="value">ETH/USD</span>
                                                    </div>
                                                </header>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                        <ul className="pricing-wrapper">
                                            {/* Buy Pricing Table #4 Starts */}
                                            <li data-type="buy" className="is-visible">
                                                <header className="pricing-header">
                                                    <div className="price">
                                                        <span className="value">USD/CAD</span>
                                                    </div>
                                                </header>
                                            </li>
                                            <li data-type="sell" className="is-hidden">
                                                <header className="pricing-header">
                                                    <div className="price">
                                                        <span className="value">XRP/USD</span>
                                                    </div>
                                                </header>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="image-block2">
                    <section className="image-block2">
                        <div className="container-fluid">
                            <div className="row">
                                {/* Quote Starts */}
                                <div className="col-md-4 img-block-quote bg-image-2">
                                    <h3 className="title-head ml-0 pl-0">
                                        {text.pricing[6]}<span>{text.pricing[7]}</span>
                                    </h3>
                                    <p>
                                        {text.pricing[8]}
                                    </p>
                                    <p>
                                        {text.pricing[9]}
                                    </p>
                                </div>
                                <div className="col-md-8 bg-grey-chart">
                                    <div className="chart-widget dark-chart chart-1">
                                        <div>
                                            <div className="btcwdgt-chart" data-bw-theme="dark" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>);
    }
}

export default connect(mapStateToProps)(Pricing);
