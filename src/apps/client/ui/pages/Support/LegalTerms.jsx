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
import pdf1 from './lic_1.png';
import pdf2 from './lic_2.png';
import pdf3 from './lic_3.png';

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

class LegalTerms extends Component {
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

                  <section className="terms-of-services">
                      <div className="container">
                          <div className="row mb-50">
                              <div className="col-xs-12 feature-about">
                                  <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                                      <div style={{ marginRight: '20px' }}>
                                          <h3><i className="fa fa-file"></i>
                                              {text.third[5]} 1
                                          </h3>
                                          <a href='https://bucket6375.s3.us-east-2.amazonaws.com/photo_2022-11-08_16-51-14.jpg' rel="noreferrer" target="_blank" className="link">{text.third[6]}</a>
                                      </div>
                                      <div style={{ marginRight: '20px' }}>
                                          <h3><i className="fa fa-file"></i>
                                              {text.third[5]} 2
                                          </h3>
                                          <a href='https://bucket6375.s3.us-east-2.amazonaws.com/photo_2022-11-08_16-51-17.jpg' rel="noreferrer" target="_blank" className="link">{text.third[6]}</a>
                                      </div>
                                      <div>
                                          <h3><i className="fa fa-file"></i>
                                              {text.third[5]} 3
                                          </h3>
                                          <a href='https://bucket6375.s3.us-east-2.amazonaws.com/photo_2022-11-08_16-51-21.jpg' rel="noreferrer" target="_blank" className="link">{text.third[6]}</a>
                                      </div>
                                  </div>
                                  <h3><i className="fa fa-file"></i> {text.third[7]}
                                  </h3>
                                  <p>{text.third[8]}
                                      <br /><a href="https://d3jvdp77675ftq.cloudfront.net/policies/riskpolicy.pdf" target="_blank" className="link">{text.third[23]} </a></p>
                                  <h3><i className="fa fa-file"></i> {text.third[9]}
                                  </h3>
                                  <p>{text.third[10]}
                                      <br /><a href="https://d3jvdp77675ftq.cloudfront.net/policies/termsconditions.pdf" target="_blank" className="link">{text.third[23]} </a></p>
                                  <h3><i className="fa fa-file"></i> {text.third[11]}
                                  </h3>
                                  <p>{text.third[12]}
                                      <br /><a href="https://d3jvdp77675ftq.cloudfront.net/policies/orderexecutionpolicy.pdf" target="_blank" className="link">{text.third[23]} </a></p>
                                  <h3><i className="fa fa-file"></i> {text.third[13]}
                                  </h3>
                                  <p> {text.third[14]}
                                      // eslint-disable-next-line max-len
                                      <br /><a href="https://d3jvdp77675ftq.cloudfront.net/policies/privacypolicy.pdf" target="_blank" className="link">{text.third[23]} </a></p>
                                  <h3><i className="fa fa-file"></i> {text.third[15]}
                                  </h3>
                                  <p>{text.third[16]}
                                      <br /><a href="https://d3jvdp77675ftq.cloudfront.net/policies/conflictinterestpolicy.pdf" target="_blank" className="link">{text.third[23]} </a></p>
                                  <h3><i className="fa fa-file"></i> {text.third[17]}
                                  </h3>
                                  <p>{text.third[18]}<br /><a href="https://d3jvdp77675ftq.cloudfront.net/policies/kycpolicy.pdf" target="_blank" className="link">{text.third[23]} </a></p>
                                  <h3><i className="fa fa-file"></i> {text.third[19]}
                                  </h3>
                                  <p>{text.third[20]}
                                      <br /><a href="https://d3jvdp77675ftq.cloudfront.net/policies/amlpolicy.pdf" target="_blank" className="link">{text.third[23]} </a></p>
                                  <h3><i className="fa fa-file"></i> {text.third[21]}
                                  </h3>
                                  <p>{text.third[22]}
                                      <br /><a href="https://bucket6375.s3.us-east-2.amazonaws.com/politics.pdf" target="_blank" className="link">{text.third[23]} </a></p>
                                  <h3><i className="fa fa-file"></i> {text.third[24]}
                                  </h3>
                                  <p>{text.third[25]}
                                      <br /><a href="https://d3jvdp77675ftq.cloudfront.net/policies/complaintpolicy.pdf" target="_blank" className="link">{text.third[23]} </a></p>

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
                                          <h2>{text.third[26]}
                                          </h2>
                                          <p className="lead">{text.third[27]}
                                          </p>
                                      </div>

                                      <p className="action-btn"><a className="btn btn-primary" href="https://deltaway.io/">{text.third[28]}
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
    connect(mapStateToProps, mapDispatchToProps)(LegalTerms)
);
