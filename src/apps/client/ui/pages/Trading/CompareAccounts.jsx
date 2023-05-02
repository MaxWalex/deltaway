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

class CompareAccounts extends Component {
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

                                          <h2 className="title-head">{text.first[1]}
                                              <span>{text.first[2]}</span></h2>

                                          <hr />

                                          <ul className="breadcrumb">
                                              <li><a href="https://deltaway.io/"> {text.first[3]}
                                              </a></li>
                                              <li>{text.first[4]}
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

                  <section className="pricing">
                      <div className="container">

                          <h3 className="text-center">{text.first[5]}
                          </h3>
                          <p className="text-center">{text.first[6]}
                          </p>
                          <div className="row pricing-tables-content pricing-page">
                              <div className="pricing-container">

                                  <ul className="pricing-list bounce-invert">
                                      <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                          <ul className="pricing-wrapper">

                                              <li>
                                                  <header className="pricing-header">
                                                      <div className="price">

                                                          <span className="value">{text.first[7]}
                                                          </span>
                                                      </div>
                                                      <h2>

                                                          <span>{text.first[8]}</span>
                                                          <span>{text.first[9]}</span>
                                                          <span>METATRADER 5</span>
                                                          <span>{text.first[10]}</span>
                                                          <span>{text.first[11]}</span>

                                                          <span>-</span>
                                                          <span>-</span>

                                                      </h2>

                                                  </header>
                                              </li>

                                          </ul>
                                      </li>
                                      <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                          <ul className="pricing-wrapper">

                                              <li>
                                                  <header className="pricing-header">
                                                      <div className="price">

                                                          <span className="value">{text.first[13]}
                                                          </span>
                                                      </div>
                                                      <h2>

                                                          <span>{text.first[14]}</span>
                                                          <span>{text.first[15]}</span>
                                                          <span>METATRADER 5</span>
                                                          <span>{text.first[16]}</span>
                                                          <span>{text.first[17]}</span>
                                                          <span>{text.first[18]}</span>

                                                          <span>-</span>
                                                      </h2>
                                                  </header>
                                              </li>

                                          </ul>
                                      </li>
                                      <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                          <ul className="pricing-wrapper">

                                              <li>
                                                  <header className="pricing-header">
                                                      <div className="price">
                                                          <span className="value">{text.first[19]}
                                                          </span>
                                                      </div>
                                                      <h2>
                                                          <span>{text.first[20]}</span>
                                                          <span>{text.first[21]}</span>
                                                          <span>METATRADER 5</span>
                                                          <span>{text.first[22]}</span>
                                                          <span>{text.first[23]}</span>
                                                          <span>{text.first[24]}</span>
                                                          <span>{text.first[25]}</span>
                                                      </h2>
                                                  </header>
                                              </li>

                                          </ul>
                                      </li>
                                      <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                          <ul className="pricing-wrapper">

                                              <li>
                                                  <header className="pricing-header">
                                                      <div className="price">
                                                          <span className="value">{text.first[26]}
                                                          </span>
                                                      </div>
                                                      <h2>

                                                          <span> {text.first[27]}</span>
                                                          <span>{text.first[28]}</span>
                                                          <span>METATRADER 5</span>
                                                          <span>{text.first[29]}</span>
                                                          <span>{text.first[30]}</span>
                                                          <span>{text.first[31]}</span>

                                                          <span>-</span>
                                                      </h2>
                                                  </header>
                                              </li>

                                          </ul>
                                      </li>

                                      <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                          <ul className="pricing-wrapper">

                                              <li>
                                                  <header className="pricing-header">
                                                      <div className="price">
                                                          <span className="value">{text.first[32]}
                                                          </span>
                                                      </div>
                                                      <h2>

                                                          <span>{text.first[33]}</span>
                                                          <span>{text.first[34]}</span>
                                                          <span>METATRADER 5</span>
                                                          <span>{text.first[35]}</span>
                                                          <span>{text.first[36]}</span>
                                                          <span>{text.first[37]}</span>
                                                          <span>{text.first[38]}</span>

                                                      </h2>
                                                  </header>
                                              </li>

                                          </ul>
                                      </li>

                                      <li className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                          <ul className="pricing-wrapper">

                                              <li>
                                                  <header className="pricing-header">
                                                      <div className="price">
                                                          <span className="value">VIP</span>
                                                      </div>
                                                      <h2>

                                                          <span>{text.first[39]}
                                                          </span>
                                                          <span><i className="fa fa-gift"></i></span>
                                                          <span><i className="fa fa-gift"></i></span>
                                                          <span><i className="fa fa-gift"></i></span>
                                                          <span><i className="fa fa-gift"></i></span>
                                                          <span><i className="fa fa-gift"></i></span>
                                                          <span><em>{text.first[40]}</em></span>
                                                      </h2>
                                                  </header>
                                              </li>

                                          </ul>
                                      </li>

                                  </ul>
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
                                          <h2>{text.first[41]}
                                          </h2>
                                          <p className="lead">{text.first[42]}
                                          </p>
                                      </div>
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
    connect(mapStateToProps, mapDispatchToProps)(CompareAccounts)
);
