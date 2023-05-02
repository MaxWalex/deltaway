import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import setAuthenticationPopup from '../../../../../actions/setAuthenticationPopup';
import noop from '@tinkoff/utils/function/noop';
import propOr from '@tinkoff/utils/object/propOr';
import maps from '../../../../hocs/lang/maps';
import lang from '../../../../hocs/lang/lang';

const mapStateToProps = ({ application, data }) => {
    return {
        lang: application.lang,
        langMap: application.langMap,
        user: data.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    setAuthenticationPopup: payload => dispatch(setAuthenticationPopup(payload))
});

@lang
class Header extends Component {
    static propTypes = {
        setAuthenticationPopup: PropTypes.func,
        lang: PropTypes.string.isRequired,
        langMap: PropTypes.object.isRequired,
        setLang: PropTypes.func.isRequired,
        setLangMap: PropTypes.func.isRequired
    }

    static defaultProps = {
        setAuthenticationPopup: noop
    };

    state = {
        time: new Date(),
        currentLanguage: ''
    };

    componentWillReceiveProps (nextProps) {
        this.setState({ currentLanguage: nextProps.lang });
    };

    handleAuthenticationForm = index => () => {
        this.props.setAuthenticationPopup({ isPopup: true, index });
    };

    setLang = (lang) => {
        const langMap = maps[lang];
        typeof window !== 'undefined' ? localStorage.lang = lang : '';

        this.props.setLangMap(langMap);
        this.props.setLang(lang);
    };

    setCurrenLanguage () {
        if (typeof window !== 'undefined' && localStorage.lang) {
            this.setState({ currentLanguage: localStorage.lang });
        }

        if (typeof window !== 'undefined' && !localStorage.lang) {
            this.setState({ currentLanguage: this.props.lang });
        }
    }

    componentDidMount () {
        const script = document.createElement('script');
        script.src = 'https://widgets.bitcoin.com/widget.js';
        script.async = true;
        document.body.appendChild(script);
    };

    render () {
        const { langMap } = this.props;
        const text = propOr('landing', {}, langMap);
        return (
            <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs">
                            <a href="/" className="img-logo">
                                <img
                                    className="img-responsive"
                                    src="/src/apps/client/ui/pages/LandingPage/images/favicon.png"
                                    style={{
                                        maxWidth: '260px',
                                        maxHeight: '80px',
                                        marginBottom: '-40px',
                                        marginTop: '-10px',
                                        marginRight: '-80px',
                                        marginLeft: '80px'
                                    }}
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="col-md-7 col-lg-7">
                            <ul className="unstyled bitcoin-stats text-center">
                                <li>
                                    <h6>9,450 USD</h6>
                                    <span>{text.header[1]}</span>
                                </li>
                                <li>
                                    <h6>+5.26%</h6>
                                    <span>{text.header[2]}</span>
                                </li>
                                <li>
                                    <h6>231,775</h6>
                                    <span>{text.header[3]}</span>
                                </li>
                                <li>
                                    <div className="btcwdgt-price" bw-cur="usd" bw-theme="light"></div>
                                    <span>{text.header[4]}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 mobile-cta-top">
                            <ul
                                className="unstyled user"
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                <li className="sign-in">
                                    <span onClick={this.handleAuthenticationForm(1)} className="btn btn-primary">
                                        <i className="fa fa-user" /> {text.header[5]}
                                    </span>
                                </li>
                                <li className="sign-up">
                                    <span onClick={this.handleAuthenticationForm(2)} className="btn btn-primary">
                                        <i className="fa fa-user-plus" />
                                        <span style={{ marginLeft: '5px' }}>{text.header[6]}</span>
                                    </span>
                                </li>
                                <li style={{ marginLeft: 15, marginBottom: 1 }}>
                                    {this.props.lang === 'ru' && <div
                                        className="css-1se4h0w btn btn-primary"
                                        data-google-lang="cs"
                                        id="change-lang-cs"
                                        onClick={() => this.setLang('en')}
                                    >
                                        EN
                                    </div>}
                                    {this.props.lang === 'en' && <div
                                        className="css-1se4h0w btn btn-primary"
                                        data-google-lang="ru"
                                        id="change-lang-ru"
                                        onClick={() => this.setLang('ru')}
                                    >
                                         RU
                                    </div>}
                                </li>
                            </ul>
                        </div>
                        {/* User Sign In/Sign Up Ends */}
                    </div>
                </div>
                <nav className="site-navigation navigation" id="site-navigation">
                    <div className="container">
                        <div className="site-nav-inner">
                            <a className="logo-mobile" href="/">
                                <img className="img-responsive" src="/src/apps/client/ui/pages/LandingPage/images/favicon.png" alt="" />
                            </a>
                            {/* Toggle Icon for Mobile Ends */}
                            <div className="collapse navbar-collapse navbar-responsive-collapse">
                                {/* Main Menu Starts */}
                                <ul className="nav navbar-nav">
                                    <li></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            {text.header[7]} <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li>
                                                <Button color='inherit' component={Link} to="/about/about-us">{text.header[8]}</Button>
                                            </li>
                                            <li>
                                                <Button color='inherit' component={Link} to="/about/reasons-to-trade">{text.header[9]}</Button>
                                            </li>
                                            <li>
                                                <Button color='inherit' component={Link} to="/about/safety-of-funds">{text.header[10]}</Button>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            {text.header[11]}
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li>
                                                <Button color='inherit' component={Link} to="/trading/trading-products">{text.header[12]}</Button>
                                            </li>
                                            <li>
                                                <Button color='inherit' component={Link} to="/trading/compare-accounts">{text.header[13]}</Button>
                                            </li>
                                            <li>
                                                <Button color='inherit' component={Link} to="/trading/platform-and-apps">{text.header[14]}</Button>
                                            </li>
                                            <li>
                                                <Button color='inherit' component={Link} to="/trading/conditions-to-trade">{text.header[15]}</Button>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            {text.header[16]}
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li>
                                                <Button color='inherit' component={Link} to="/support/contact-us">{text.header[19]}</Button>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* Cart Icon Starts */}
                                    <li className="cart">
                                        <span onClick={this.handleAuthenticationForm(1)}>
                                            <i className="fa fa-desktop" /> {text.header[20]}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
