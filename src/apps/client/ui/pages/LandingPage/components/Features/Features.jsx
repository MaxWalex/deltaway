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

class Features extends Component {
    static propTypes = {
        lang: PropTypes.string.isRequired,
        langMap: PropTypes.object.isRequired
    }

    render () {
        const { langMap } = this.props;
        const text = propOr('landing', {}, langMap);
        return (
            <section className="features">
                <div className="container">
                    <div className="row features-row">
                        {/* Feature Box Starts */}
                        <div className="feature-box three col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <img
                                    src="/src/apps/client/ui/pages/LandingPage/images/icons/home-featured-3.png"
                                    alt="buy and sell online"
                                />
                            </span>
                            <div className="feature-box-content">
                                <h3>{text.features[1]}</h3>
                                <p>
                                    {text.features[2]}
                                </p>
                            </div>
                        </div>
                        {/* Feature Box Ends */}
                        {/* Feature Box Starts */}
                        <div className="feature-box col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <img
                                    src="/src/apps/client/ui/pages/LandingPage/images/icons/home-featured-1.png"
                                    alt="Full Ttransparency"
                                />
                            </span>
                            <div className="feature-box-content">
                                <h3>{text.features[3]}</h3>
                                <p>
                                    {text.features[4]}
                                </p>
                            </div>
                        </div>
                        {/* Feature Box Ends */}
                        {/* Feature Box Starts */}
                        <div className="feature-box two col-md-4 col-sm-12">
                            <span className="feature-icon">
                                <img
                                    src="/src/apps/client/ui/pages/LandingPage/images/icons/home-featured-2.png"
                                    alt="Multi-Asset Trading"
                                />
                            </span>
                            <div className="feature-box-content">
                                <h3>{text.features[5]}</h3>
                                <p>
                                    {text.features[6]}
                                </p>
                            </div>
                        </div>
                        {/* Feature Box Ends */}
                    </div>
                </div>
            </section>);
    }
}

export default connect(mapStateToProps)(Features);
