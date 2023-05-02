import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'eventemitter3';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

class SafetyOfFunds extends Component {
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
  }

  handleAuthenticationForm = index => () => {
      this.props.setAuthenticationPopup({ isPopup: true, index });
  }

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

                                          <h2 className="title-head">{text.third[1]}
                                              <span>{text.third[2]}</span></h2>

                                          <hr />

                                          <ul className="breadcrumb">
                                              <li><a href="https://deltaway.io/"> {text.third[3]}
                                              </a></li>
                                              <li>{text.third[4]}
                                              </li>
                                          </ul>

                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </section>
              </section>
              <div className=" nobottommargin clearfix">
                  <section className="about-us">
                      <div className="container">

                          <div className="row text-center mt-50">

                              <div className="title-head-subtitle">
                                  <p>{text.third[5]}
                                  </p>
                              </div>
                          </div>

                          <div className="row about-content">

                              <div className="col-sm-12 col-md-5 col-lg-6 text-center">
                                  <img className="img-responsive img-about-us" src="/src/apps/client/ui/pages/LandingPage/images/safety_forex.png" alt="" />
                              </div>

                              <div className="col-sm-12 col-md-7 col-lg-6">
                                  <h3 className="title-about">{text.third[6]}
                                  </h3>
                                  <p className="about-text">{text.third[7]}
                                  </p>
                                  <ul className="nav nav-tabs">
                                      <li className="active"><a data-toggle="tab" href="#menu1">{text.third[8]}</a></li>

                                      <li><a data-toggle="tab" href="#menu2">{text.third[9]}
                                      </a></li>
                                  </ul>
                                  <div className="tab-content">
                                      <div id="menu1" className="tab-pane fade in active">
                                          <p>{text.third[10]}
                                          </p>
                                      </div>

                                      <div id="menu2" className="tab-pane fade">
                                          <p>{text.third[11]}
                                          </p>
                                      </div>
                                  </div>
                                  <a className="btn btn-primary" href="https://deltaway.io/">{text.third[12]}
                                  </a>
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
                                          <h2>{text.third[13]}
                                          </h2>
                                          <p className="lead">{text.third[14]}
                                          </p>
                                      </div>

                                      <p className="action-btn"><a className="btn btn-primary" href="https://deltaway.io/">{text.third[15]}
                                      </a></p>

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
    connect(mapStateToProps, mapDispatchToProps)(SafetyOfFunds)
);
