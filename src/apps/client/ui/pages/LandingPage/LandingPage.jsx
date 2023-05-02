import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'eventemitter3';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import checkAuthentication from '../../../services/client/checkAuthentication';
import getPrices from '../../../services/client/getPrices';
import Header from './components/Header/Header';
import FooterLanding from './components/FooterLanding/FooterLanding';
import Pricing from './components/Pricing/Pricing';
import OurAdvantages from './components/OurAdvantages/OurAdvantages';
import AboutUs from './components/AboutUs/AboutUs';
import Features from './components/Features/Features';
import AuthenticationPopup from '../../components/AuthenticationPopup/AuthenticationPopup';
import MainSlider from './components/MainSlider/MainSlider';

import './style.css';

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
    checkAuthentication: payload => dispatch(checkAuthentication(payload)),
    getPrices: payload => dispatch(getPrices(payload))
});

class LandingPage extends Component {
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
    };

    render () {
        const { authenticationFormPopup } = this.props;
        return (
            <div className='wrapper-landing'>
                <Header events={events} setAuthenticationPopup={this.props.setAuthenticationPopup} />
                <AuthenticationPopup isVisible={authenticationFormPopup.isPopup} activeIndex={authenticationFormPopup.activeIndex} />
                <MainSlider />
                <Features />
                <AboutUs />
                <OurAdvantages />
                <Pricing />
                <FooterLanding />
            </div>);
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));
