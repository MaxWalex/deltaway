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

class OurAdvantages extends Component {
    static propTypes = {
        lang: PropTypes.string.isRequired,
        langMap: PropTypes.object.isRequired
    }

    render () {
        const { langMap } = this.props;
        const text = propOr('landing', {}, langMap);
        return (
            <section id="our-advantages" className="image-block">
                <div className="container-fluid">
                    <div className="row">
                        {/* Features Starts */}
                        <div className="col-md-8 ts-padding img-block-left">
                            <div className="gap-20" />
                            <div className="row">
                                {/* Feature Starts */}
                                <div className="col-sm-6 col-md-6 col-xs-12">
                                    <div className="feature text-center">
                                        <span className="feature-icon">
                                            <img
                                                src="/src/apps/client/ui/pages/LandingPage/images/icons/home-benefits-1.png"
                                                alt="strong security"
                                            />
                                        </span>
                                        <h3 className="feature-title"> {text.advantages[1]}</h3>
                                        <p>
                                            {text.advantages[2]}
                                        </p>
                                    </div>
                                </div>
                                {/* Feature Ends */}
                                <div className="gap-20-mobile" />
                                {/* Feature Starts */}
                                <div className="col-sm-6 col-md-6 col-xs-12">
                                    <div className="feature text-center">
                                        <span className="feature-icon">
                                            <img
                                                src="/src/apps/client/ui/pages/LandingPage/images/icons/home-benefits-2.png"
                                                alt="world coverage"
                                            />
                                        </span>
                                        <h3 className="feature-title">{text.advantages[3]}</h3>
                                        <p>
                                            {text.advantages[4]}
                                            <br />
                                            {text.advantages[5]}
                                        </p>
                                    </div>
                                </div>
                                {/* Feature Ends */}
                            </div>
                            <div className="gap-20" />
                            <div className="row">
                                {/* Feature Starts */}
                                <div className="col-sm-6 col-md-6 col-xs-12">
                                    <div className="feature text-center">
                                        <span className="feature-icon">
                                            <img
                                                src="/src/apps/client/ui/pages/LandingPage/images/icons/home-benefits-3.png"
                                                alt="payment options"
                                            />
                                        </span>
                                        <h3 className="feature-title">{text.advantages[6]}</h3>
                                        <p>
                                            {text.advantages[7]} <br />
                                            {text.advantages[8]}
                                        </p>
                                    </div>
                                </div>
                                {/* Feature Ends */}
                                <div className="gap-20-mobile" />
                                {/* Feature Starts */}
                                <div className="col-sm-6 col-md-6 col-xs-12">
                                    <div className="feature text-center">
                                        <span className="feature-icon">
                                            <img
                                                src="/src/apps/client/ui/pages/LandingPage/images/icons/home-benefits-4.png"
                                                alt="mobile app"
                                            />
                                        </span>
                                        <h3 className="feature-title">{text.advantages[9]}</h3>
                                        <p>
                                            {text.advantages[10]} <br />{text.advantages[11]}
                                        </p>
                                    </div>
                                </div>
                                {/* Feature Ends */}
                            </div>
                            <div className="gap-20" />
                            <div className="row">
                                {/* Feature Starts */}
                                <div className="col-sm-6 col-md-6 col-xs-12">
                                    <div className="feature text-center">
                                        <span className="feature-icon">
                                            <img
                                                src="/src/apps/client/ui/pages/LandingPage/images/icons/home-benefits-5.png"
                                                alt="Effective Portfolio"
                                            />
                                        </span>
                                        <h3 className="feature-title">{text.advantages[12]}</h3>
                                        <p>
                                            {text.advantages[13]}<br />
                                            {text.advantages[14]}{' '}
                                        </p>
                                    </div>
                                </div>
                                {/* Feature Ends */}
                                <div className="gap-20-mobile" />
                                {/* Feature Starts */}
                                <div className="col-sm-6 col-md-6 col-xs-12">
                                    <div className="feature text-center">
                                        <span className="feature-icon">
                                            <img
                                                src="/src/apps/client/ui/pages/LandingPage/images/icons/home-benefits-6.png"
                                                alt="high liquidity"
                                            />
                                        </span>
                                        <h3 className="feature-title">{text.advantages[15]}</h3>
                                        <p>
                                            {text.advantages[16]}
                                            <br /> {text.advantages[17]}
                                        </p>
                                    </div>
                                </div>
                                {/* Feature Ends */}
                            </div>
                        </div>
                        {/* Features Ends */}
                        {/* Video Starts */}
                        <div className="col-md-4 ts-padding bg-image-1">
                            <div></div>
                        </div>
                        {/* Video Ends */}
                    </div>
                </div>
            </section>);
    }
}

export default connect(mapStateToProps)(OurAdvantages);
