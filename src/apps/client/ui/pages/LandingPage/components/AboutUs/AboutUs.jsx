import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propOr from '@tinkoff/utils/object/propOr';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import '../../style.css';

const mapStateToProps = ({ application, data }) => {
    return {
        lang: application.lang,
        langMap: application.langMap,
        user: data.user
    };
};

class AboutUs extends Component {
    static propTypes = {
        lang: PropTypes.string.isRequired,
        langMap: PropTypes.object.isRequired
    }

    render () {
        const { langMap } = this.props;
        const text = propOr('landing', {}, langMap);
        return (
            <section className="about-us">
                <div className="container">
                    <div className="row text-center">
                        <h2 className="title-head">
                            {text.about[1]} <span>Deltaway</span>
                        </h2>
                        <div className="title-head-subtitle">
                            <p>{text.about[2]}</p>
                        </div>
                    </div>
                    <div className="row about-content">
                        {/* Image Starts */}
                        <div className="col-sm-12 col-md-5 col-lg-6 text-center">
                            <img
                                className="img-responsive img-about-us"
                                src="/src/apps/client/ui/pages/LandingPage/images/backgrounds/screen.png"
                                alt=""
                            />
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-6">
                            <h3 className="title-about">
                                {text.about[3]}
                            </h3>
                            <p className="about-text">
                                {text.about[4]}
                            </p>
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a data-toggle="tab" href="#menu1">
                                        {text.about[5]}
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#menu2">
                                        {text.about[6]}
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#menu3">
                                        {text.about[7]}
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="menu1" className="tab-pane fade in active">
                                    <p>
                                        {text.about[8]}
                                    </p>
                                </div>
                                <div id="menu2" className="tab-pane fade">
                                    <p>
                                        {text.about[9]}
                                    </p>
                                </div>
                                <div id="menu3" className="tab-pane fade">
                                    <p>
                                        {text.about[10]}
                                    </p>
                                </div>
                            </div>
                            <Button color='inherit' component={Link} to="/trading/conditions-to-trade">{text.header[15]}
                                {text.about[11]}
                            </Button>
                        </div>
                        {/* Content Ends */}
                    </div>
                    {/* Section Content Ends */}
                </div>
            </section>);
    }
}

export default connect(mapStateToProps)(AboutUs);
