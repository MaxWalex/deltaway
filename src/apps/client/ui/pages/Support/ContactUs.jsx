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

class ContactUs extends Component {
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

                                          <h2 className="title-head">{text.first[1]} <span>{text.first[2]}</span></h2>

                                          <hr />

                                          <ul className="breadcrumb">
                                              <li><a href="https://deltaway.io/"> {text.first[3]}</a></li>
                                              <li>{text.first[4]}</li>
                                          </ul>

                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </section>

              </section>
              <div className=" nobottommargin clearfix">

                  <section className="contact">
                      <div className="container">
                          <div className="row">
                              <div className="col-xs-12 col-md-8 contact-form">
                                  <h3 className="col-xs-12">{text.first[5]}
                                  </h3>
                                  <p className="col-xs-12">{text.first[6]}
                                  </p>

                                  <form className="form-contact" method="post" action="/Contact.aspx">

                                      <div className="form-group col-md-6">
                                          <input className="form-control" name="firstname" id="firstname" placeholder={text.first[13]} type="text" required="" />
                                      </div>

                                      <div className="form-group col-md-6">
                                          <input className="form-control" name="lastname" id="lastname" placeholder={text.first[14]} type="text" required="" />
                                      </div>

                                      <div className="form-group col-md-6">
                                          <input className="form-control" name="email" id="email" placeholder={text.first[15]} type="email" required="" />
                                      </div>

                                      <div className="form-group col-md-6">
                                          <input className="form-control" name="text" id="subject" placeholder={text.first[16]} type="text" required="" />
                                      </div>

                                      <div className="form-group col-xs-12">
                                          <textarea className="form-control" id="message" name="message" placeholder={text.first[17]} required=""></textarea>
                                      </div>

                                      <div className="form-group col-xs-12 col-sm-4">
                                          <input className="btn btn-primary btn-contact" type="submit" value={text.first[18]}/>
                                      </div>

                                  </form>

                              </div>

                              <div className="col-xs-12 col-md-4">
                                  <div className="widget">
                                      <div className="contact-page-info">

                                          <div className="contact-info-box">
                                              <i className="fa fa-phone big-icon"></i>
                                              <div className="contact-info-box-content">
                                                  <h4>{text.first[7]}
                                                  </h4>
                                                  <p>+74993807528</p>
                                              </div>
                                          </div>

                                          <div className="contact-info-box">
                                              <i className="fa fa-envelope big-icon"></i>
                                              <div className="contact-info-box-content">
                                                  <h4>{text.first[8]}
                                                  </h4>

                                                  <p><a href="mailto:DELTAWAY.IO12@GMAIL.COM" className="link" target="_blank">DELTAWAY.IO12@GMAIL.COM</a>
                                                  </p></div>
                                          </div>

                                          <div className="contact-info-box">
                                              <i className="fa fa-share-alt big-icon"></i>
                                              <div className="contact-info-box-content">
                                                  <h4>{text.first[9]}
                                                  </h4>
                                                  <div className="social-contact">
                                                      <ul>
                                                          <li className="facebook"><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                          <li className="twitter"><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                      </ul>
                                                  </div>
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
                                          <h2>{text.first[10]}
                                          </h2>
                                          <p className="lead">{text.first[11]}
                                          </p>
                                      </div>

                                      <p className="action-btn"><a className="btn btn-primary" href="https://deltaway.io/">{text.first[12]}
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
    connect(mapStateToProps, mapDispatchToProps)(ContactUs)
);
