import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'eventemitter3';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import checkAuthentication from '../../../services/client/checkAuthentication';
import getPrices from '../../../services/client/getPrices';
import Header from '../LandingPage/components/Header/Header';
import FooterLanding from '../LandingPage/components/FooterLanding/FooterLanding';
import AuthenticationPopup from '../../components/AuthenticationPopup/AuthenticationPopup';
import propOr from '@tinkoff/utils/object/propOr';

import '../LandingPage/style.css';

const events = new EventEmitter();

const mapStateToProps = ({ application, data, charts }) => {
    return {
        lang: application.lang,
        langRoute: application.langRoute,
        authenticationFormPopup: data.authenticationFormPopup,
        user: data.user,
        accountInfoPopup: data.accountInfoPopup,
        paymentsPopup: data.paymentsPopup,
        withdrawPopup: data.withdrawPopup,
        chartSymbol: charts.chartSymbol,
        openOrders: data.openOrders,
        langMap: application.langMap
    };
};

const mapDispatchToProps = (dispatch) => ({
    checkAuthentication: (payload) => dispatch(checkAuthentication(payload)),
    getPrices: (payload) => dispatch(getPrices(payload))
});

class AboutUs extends Component {
  static propTypes = {
      setAuthenticationPopup: PropTypes.func,
      authenticationFormPopup: PropTypes.object.isRequired,
      lang: PropTypes.string.isRequired,
      langMap: PropTypes.object.isRequired
  };

  static defaultProps = {
      langRoute: '',
      user: null,
      openOrders: []
  };

  state = {
      connectionStatus: true
  };

  componentDidMount () {
      const script = document.createElement('script');
      script.src = 'https://widgets.bitcoin.com/widget.js';
      script.async = true;
      document.body.appendChild(script);
      //   })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');
  }

  handleAuthenticationForm = index => () => {
      this.props.setAuthenticationPopup({ isPopup: true, index });
  };

  render () {
      const { authenticationFormPopup } = this.props;
      const { langMap } = this.props;
      const text = propOr('about', {}, langMap);
      return (
          <div className="wrapper-landing">
              <Header
                  events={events}
                  setAuthenticationPopup={this.props.setAuthenticationPopup}
              />
              <AuthenticationPopup
                  isVisible={authenticationFormPopup.isPopup}
                  activeIndex={authenticationFormPopup.activeIndex}
              />
              <section id="page-title">

                  <section className="banner-area">
                      <div className="banner-overlay">
                          <div className="banner-text text-center">
                              <div className="container">

                                  <div className="row text-center">
                                      <div className="col-xs-12">

                                          <h2 className="title-head">{text.first[1]} <span>{text.first[2]}</span></h2>

                                          <hr />

                                          <ul className="breadcrumb">
                                              <li><a href="https://deltaway.io/">{text.first[1]} {text.first[2]}</a></li>
                                              <li>{text.first[1]} Deltaway</li>
                                          </ul>

                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </section>

              </section>
              <div className=" nobottommargin clearfix">

                  <section className="about-page">
                      <div className="container">

                          <div className="row about-content">

                              <div className="col-sm-12 col-md-5 col-lg-6 text-center">
                                  <img className="img-responsive img-about-us" src="/src/apps/client/ui/pages/LandingPage/images/about-us.jpg" alt="about us" />
                              </div>

                              <div className="col-sm-12 col-md-7 col-lg-6">
                                  <div className="feature-about">
                                      <h3 className="title-about">{text.first[3]}</h3>
                                      <p>{text.first[4]}</p>
                                      <p>{text.first[5]}
                                      </p>
                                      <Button color='inherit' className="btn btn-primary btn-pricing" component={Link} to="/trading/conditions-to-trade">{text.first[6]}</Button>
                                  </div>

                              </div>

                          </div>

                      </div></section>

                  <section className="facts">

                      <div className="container">

                          <div className="row text-center facts-content">
                              <div className="text-center heading-facts">
                                  <h2>{text.first[7]}<span>{text.first[8]}
                                  </span></h2>
                                  <p>{text.first[9]}
                                  </p>
                              </div>

                              <div className="col-xs-12 col-md-3 col-sm-6 fact">
                                  <h3>250+</h3>
                                  <h4>{text.first[10]}
                                  </h4>
                              </div>

                              <div className="col-xs-12 col-md-3 col-sm-6 fact fact-clear">
                                  <h3>1:400</h3>
                                  <h4>{text.first[11]}
                                  </h4>
                              </div>

                              <div className="col-xs-12 col-md-3 col-sm-6 fact">
                                  <h3>ECN/NDD</h3>
                                  <h4>{text.first[12]}
                                  </h4>
                              </div>

                              <div className="col-xs-12 col-md-3 col-sm-6">
                                  <h3>{text.first[13]}</h3>
                                  <h4>{text.first[14]}</h4>
                              </div>

                              <div className="col-xs-12 buttons">
                                  <Button color='inherit' className="btn btn-primary btn-pricing" component={Link} to="/trading/conditions-to-trade">{text.first[15]}</Button>
                                  <span className="or"> {text.first[20]}
                                  </span>
                                  <Button color='inherit' className="btn btn-primary btn-pricing" component={Link} to="/trading/compare-accounts">{text.first[16]}</Button>
                              </div>
                          </div>

                      </div>

                  </section>

                  <section className="call-action-all">
                      <div className="call-action-all-overlay">
                          <div className="container">
                              <div className="row">
                                  <div className="col-xs-12">

                                      <div className="action-text">
                                          <h2>{text.first[17]}
                                          </h2>
                                          <p className="lead">{text.first[18]}
                                          </p>
                                      </div>

                                      {/* <p className="action-btn"><span className="btn btn-primary" onClick={this.handleAuthenticationForm(2)}>{text.first[19]}
                                      </span></p> */}

                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

              </div>
              <FooterLanding />
          </div>
      );
  }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AboutUs)
);
