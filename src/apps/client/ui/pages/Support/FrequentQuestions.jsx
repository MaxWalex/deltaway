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

class FrequentQuestions extends Component {
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

  componentDidMount () {
      const script = document.createElement('script');
      script.src = 'https://widgets.bitcoin.com/widget.js';
      script.async = true;
      document.body.appendChild(script);
      //   })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');
  }

  render () {
      const { authenticationFormPopup } = this.props;
      const { langMap } = this.props;
      const text = propOr('support', {}, langMap);
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

                                          <h2 className="title-head">{text.second[1]}</h2>

                                          <hr />

                                          <ul className="breadcrumb">
                                              <li><a href="../"> {text.second[2]}</a></li>
                                              <li>{text.second[3]}</li>
                                          </ul>

                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </section>

              </section>
              <div className=" nobottommargin clearfix">

                  <section className="faq">
                      <div className="container">
                          <div className="row">
                              <div className="col-xs-12 col-md-12">

                                  <div className="panel-group" id="accordion">

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                                      {text.second[4]}
                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse1" className="panel-collapse collapse in">
                                              <div className="panel-body">{text.second[5]}
                                              </div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                                      {text.second[6]}

                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse2" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[7]}
                                              </div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                                      {text.second[8]}
                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse3" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[9]}
                                              </div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                                                      {text.second[10]}
                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse4" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[11]}
                                                  <a href="https://deltaway.io/">MetaTrader 5
                                                  </a>, {text.second[12]}</div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                                                      {text.second[13]}
                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse5" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[14]}
                                                  <a href="https://deltaway.io/">{text.second[15]}</a>.
                                              </div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                                                      {text.second[16]}

                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse6" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[17]}
                                              </div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                                                      {text.second[18]}
                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse7" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[19]}
                                                  <a href="https://deltaway.io/">{text.second[20]},</a> {text.second[21]}</div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse8">
                                                      {text.second[22]}

                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse8" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[23]}
                                              </div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse9">
                                                      {text.second[24]}
                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse9" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[25]}
                                              </div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse10">
                                                      {text.second[26]}
                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse10" className="panel-collapse collapse">
                                              <div className="panel-body">Yes, you can open additional live accounts without
                                            having to register a new profile.</div>
                                          </div>

                                      </div>

                                      <div className="panel panel-default">

                                          <div className="panel-heading">
                                              <h4 className="panel-title">
                                                  <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse11">
                                                      {text.second[27]}
                                                  </a>
                                              </h4>
                                          </div>

                                          <div id="collapse11" className="panel-collapse collapse">
                                              <div className="panel-body">{text.second[28]}
                                              </div>
                                          </div>

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
                                          <h2>{text.second[30]}
                                          </h2>
                                          <p className="lead">{text.second[31]}
                                          </p>
                                      </div>

                                      <p className="action-btn"><a className="btn btn-primary" href="https://deltaway.io/">{text.second[32]}
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
    connect(mapStateToProps, mapDispatchToProps)(FrequentQuestions)
);
