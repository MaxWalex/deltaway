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
        openOrders: data.openOrders
    };
};

const mapDispatchToProps = (dispatch) => ({
    checkAuthentication: (payload) => dispatch(checkAuthentication(payload)),
    getPrices: (payload) => dispatch(getPrices(payload))
});

class PlatformAndApps extends Component {
  static propTypes = {
      setAuthenticationPopup: PropTypes.func,
      authenticationFormPopup: PropTypes.object.isRequired
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

                                          <h2 className="title-head">ПЛАТФОРМЫ
                                              <span>И ПРИЛОЖЕНИЯ</span></h2>

                                          <hr />

                                          <ul className="breadcrumb">
                                              <li>ПЛАТФОРМЫ И ПРИЛОЖЕНИЯ
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
                          <div className="row text-center mt-30 mb-30">

                              <img src="/src/apps/client/ui/pages/LandingPage/images/platform-apps.png" className="img-responsive margin-auto" />

                              <div className="title-head-subtitle">
                                  <p>ЕДИНСТВЕННЫЙ ТОРГОВЫЙ ПУТЬ НА МИРОВЫЕ ФОНДОВЫЕ РЫНКИ
                                  </p>
                              </div>

                          </div>

                          <div className="row">

                              <div className="col-md-6 service-box">
                                  <div className="platform-bg-metatrader">

                                      <div className="service-box-content">
                                          <h3>Клиентский Терминал MetaTrader 5
                                          </h3>
                                          <p>Получайте преимущества от торговли на самой популярной торговой платформе мира -
                                        MetaTrader 5
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-6 service-box">
                                  <div className="platform-bg-webtrader">

                                      <div className="service-box-content">
                                          <h3>Веб-платформа MT5
                                          </h3>
                                          <p>Получите прямой доступ к торговле на международных рынках со своего браузера, не
                                        скачивая дополнительных приложений
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-6 service-box">
                                  <div className="platform-bg-android">

                                      <div className="service-box-content">
                                          <h3>Приложение для Android
                                          </h3>
                                          <p>Управляйте своими торговыми аккаунтами прямо со смартфона или планшета на Android
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div className="col-md-6 service-box">
                                  <div className="platform-bg-apple">

                                      <div className="service-box-content">
                                          <h3>Приложение для iPhone/iPad
                                          </h3>
                                          <p>Торгуйте прямо со своего iPhone или iPad в нашем приложении на базе iOS
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
                                          <h2>Начать торговать
                                          </h2>
                                          <p className="lead">Откройте бесплатный аккаунт и начните торговать без ограничений!
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
    connect(mapStateToProps, mapDispatchToProps)(PlatformAndApps)
);
