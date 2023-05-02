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

class TradingProducts extends Component {
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
      const text = propOr('trading', {}, langMap);
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

                                          <h2 className="title-head">{text.second[1]}
                                              <span>{text.second[2]}</span></h2>

                                          <hr />

                                          <ul className="breadcrumb">
                                              <li><a href="https://deltaway.io/">{text.second[3]}
                                              </a></li>
                                              <li>{text.second[4]}
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

                  <section className="services">
                      <div className="container">
                          <div className="row">

                              <div className="col-md-6 service-box">
                                  <div>
                                      <img src="/src/apps/client/ui/pages/LandingPage/images/products-1.png" alt="forex currencies" />
                                      <div className="service-box-content">
                                          <h3>{text.second[5]}
                                          </h3>
                                          <p>{text.second[6]}
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-6 service-box">
                                  <div>
                                      <img src="/src/apps/client/ui/pages/LandingPage/images/products-2.png" alt="spot commodities" />
                                      <div className="service-box-content">
                                          <h3>{text.second[7]}
                                          </h3>
                                          <p>{text.second[8]}
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-6 service-box">
                                  <div>
                                      <img src="/src/apps/client/ui/pages/LandingPage/images/products-3.png" alt="spot indices" />
                                      <div className="service-box-content">
                                          <h3>{text.second[9]}</h3>
                                          <p>{text.second[10]} </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-6 service-box">
                                  <div>
                                      <img src="/src/apps/client/ui/pages/LandingPage/images/products-4.png" alt="spot energies" />
                                      <div className="service-box-content">
                                          <h3>{text.second[11]}
                                          </h3>
                                          <p>{text.second[12]}
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-6 service-box">
                                  <div>
                                      <img src="/src/apps/client/ui/pages/LandingPage/images/products-5.png" alt="Cryptocurrencies" />
                                      <div className="service-box-content">
                                          <h3>{text.second[13]}
                                          </h3>
                                          <p>{text.second[14]}</p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-6 service-box">
                                  <div>
                                      <img src="/src/apps/client/ui/pages/LandingPage/images/products-6.png" alt="Spot Shares" />
                                      <div className="service-box-content">
                                          <h3>{text.second[15]}
                                          </h3>
                                          <p>{text.second[16]}
                                          </p>
                                      </div>
                                  </div>
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
                                          <h2>{text.second[17]}
                                          </h2>
                                          <p className="lead">{text.second[18]}
                                          </p>
                                      </div>

                                      <p className="action-btn"><a className="btn btn-primary" href="https://deltaway.io/">{text.second[19]}
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
    connect(mapStateToProps, mapDispatchToProps)(TradingProducts)
);
