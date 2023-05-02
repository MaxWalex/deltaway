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

class ConditionsToTrade extends Component {
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

                                          <h2 className="title-head">ИСКЛЮЧИТЕЛЬНЫЕ
                                              <span>УСЛОВИЯ</span></h2>

                                          <hr />

                                          <ul className="breadcrumb">
                                              <li><a href="https://deltaway.io/"> ТОРГОВЛЯ
                                              </a></li>
                                              <li>ТОРГОВЫЕ УСЛОВИЯ
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
                  <section className="services shop-cart">
                      <div className="container">

                          <div className="row about-content">

                              <div className="col-sm-12 col-md-12 col-lg-12">
                                  <div className="feature-about">

                                      <h3 className="title-about">ТРЕЙДИНГ, В КОТОРОМ МОЖНО БЫТЬ УВЕРЕННЫМ
                                      </h3>
                                      <p className="lead">Каждому трейдеру необходимо прочное торговое окружение. Клиентам
                                    доступен эффективный набор активов и функций. Ключевыми преимуществами аккаунтов
                                    Начинающий, Стартовый, Премиум, Продвинутый, Профессиональный и VIP являются:
                                      </p>

                                      <div className="col-sm-12 col-md-6 col-lg-6">
                                          <p>
                                          </p><ul className="unstyled">

                                              <li><i className="fa fa-check color"></i>Надёжные методы инвестирования
                                              </li><li>
                                              </li><li><i className="fa fa-check color"></i>Быстрый вывод средств без комиссий
                                              </li><li>
                                              </li><li><i className="fa fa-check color"></i>Бесплатные обучающие материалы и анализ
                                            рынка
                                              </li><li>
                                              </li><li><i className="fa fa-check color"></i>Более 500 финансовых инструментов для
                                            торговли
                                              </li><li>

                                              </li></ul>
                                          <p></p>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-6">
                                          <p>
                                          </p><ul className="unstyled">
                                              <li><i className="fa fa-check color"></i>Без проскальзываний, без реквот
                                              </li><li>
                                              </li><li><i className="fa fa-check color"></i>Кредитное плечо до 1:400
                                              </li><li>
                                              </li><li><i className="fa fa-check color"></i>Продвинутая торговая платформа
                                              </li><li>
                                              </li><li><i className="fa fa-check color"></i>MetaTrader 5 доступна на ОС Windows,
                                            Android и Apple
                                              </li><li>

                                              </li></ul>
                                          <p></p>
                                      </div>

                                  </div>
                              </div>
                              <hr />
                              <div className="col-sm-12 col-md-12 col-lg-12">
                                  <div className="feature-about mt-50 mb-50">
                                      <h3 className="title-about risk-title"><i className="fa fa-clock-o"></i> Время торгов
                                      </h3>
                                      <table id="table_times" className="table order text-center">
                                          <thead>
                                              <tr>
                                                  <th>Timezone</th>
                                                  <th>Business Days</th>
                                                  <th>Opening</th>
                                                  <th>Closing</th>
                                              </tr>
                                          </thead>
                                          <tbody>

                                          </tbody>
                                      </table>

                                      <p>Рынок работает ежедневно с понедельника (00:05) по пятницу (23:55), или с воскресенья
                                    (17:05 EST) по пятницу (16:55 EST).
                                      </p>
                                  </div>
                              </div>

                          </div>

                          <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                              <h5 className="title-about risk-title">СМОТРИТЕ ТАКЖЕ
                              </h5>
                              <Button color='inherit' className="btn btn-secondary" component={Link} to="/trading/trading-products">ФИНАНСОВЫЕ ИНСТРУМЕНТЫ</Button>
                              <Button color='inherit' className="btn btn-secondary" component={Link} to="/trading/compare-accounts">СРАВНЕНИЕ АККАУНТОВ</Button>
                          </div>

                      </div>

                  </section></div>
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
              <FooterLanding />
          </div>
      );
  }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ConditionsToTrade)
);
