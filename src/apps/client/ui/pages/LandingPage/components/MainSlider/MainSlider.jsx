import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import PropTypes from 'prop-types';
import setAuthenticationPopup from '../../../../../actions/setAuthenticationPopup';
import noop from '@tinkoff/utils/function/noop';
import propOr from '@tinkoff/utils/object/propOr';
import { connect } from 'react-redux';

import '../../style.css';

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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class MainSlider extends Component {
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

    handleAuthenticationForm = index => () => {
        this.props.setAuthenticationPopup({ isPopup: true, index });
    };

    render () {
        const { langMap } = this.props;
        const text = propOr('landing', {}, langMap);
        const images = [
            {
                title: `${text.slider[1]} <br /><span>${text.slider[2]}</span>`,
                desc: `${text.slider[3]}`,
                button: `${text.slider[4]}`
            },
            {
                title: `<span>${text.slider[5]}</span> ${text.slider[6]} <br />${text.slider[7]} <span>${text.slider[8]}</span>`,
                desc: `${text.slider[9]}`,
                button1: `${text.slider[10]}`,
                button: `${text.slider[11]}`
            }
        ];
        return (
            <section
                id="main-slide"
                className="carousel slide carousel-fade"
                data-ride="carousel"
            >
                <AutoPlaySwipeableViews
                    axis="x"
                    enableMouseEvents
                    className='slider-wrapper'
                >
                    {images.map((step, index) => (
                        <div className={`item bg-parallax item-${index + 1} active`} key={step.title}>
                            <div className="slider-content">
                                <div className="container">
                                    <div className="slider-text text-center">
                                        <h3 className="slide-title" dangerouslySetInnerHTML={{ __html: step.title }} />
                                        <p dangerouslySetInnerHTML={{ __html: step.desc }} ></p>
                                        <div>
                                            <p>
                                                {step.button1 && <a
                                                    href="trading/trading-products"
                                                    className="slider btn btn-primary"
                                                >
                                                    {step.button1}
                                                </a>}
                                                <a
                                                    onClick={this.handleAuthenticationForm(1)}
                                                    className="slider btn btn-primary btn-cta"
                                                >
                                                    {step.button}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSlider);
