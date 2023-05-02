import React, { Component } from 'react';

import '../../style.css';

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-2">
                                <h4>БЫСТРЫЕ ССЫЛКИ</h4>
                                <div className="menu">
                                    <ul>
                                        <li>
                                            <a href="./trading/trading-products.html">
          ФИНАНСОВЫЕ ИНСТРУМЕНТЫ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./trading/conditions-to-trade.html">
          ТОРГОВЫЕ УСЛОВИЯ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./trading/compare-accounts.html">
          СРАВНЕНИЕ АККАУНТОВ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="./trading/platform-and-apps.html">
          ПЛАТФОРМЫ И ПРИЛОЖЕНИЯ
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-2">
                                <h4>ПОДДЕРЖКА</h4>
                                <div className="menu">
                                    <ul>
                                        <li>
                                            <a href="./about/about-us.html">О PPFTrade</a>
                                        </li>
                                        <li>
                                            <a href="./support/contact-us.html">ВЕБ-ПЛАТФОРМА МТ5</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3">
                                <h4>Напишите нам</h4>
                                <div className="contacts">
                                    <div>
                                        <span>ppftrade@supportinfo.space</span>
                                    </div>
                                    <div>
                                        <span>+74993807528</span>
                                    </div>
                                    <div>
                                        <span>
                                          <a
                                                href="https://goo.gl/maps/c9b1gEribrY34zxT7"
                                                target="_blank"
                                            >
                                               května 1057/21, Nusle, 140 00 Praha 4
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className="facts-footer">
                                    <p>
      Трейдинг валютными парами и деривативами с маржинальными
      требованиями и высоким уровнем риска может не подходить для
      всех типов инвесторов. Прежде чем приступать к торговле
      валютными парами или деривативами, определите свои
      инвестиционные намерения и узнайте обо всех вовлеченных
      рисках.
                                        <br />
                                        <br /> Уважаемый трейдер, пожалуйста, обратите внимание, что
      торгуя с PPFTrade, вы соглашаетесь с тем, что вы несете
      полную ответственность за проверку соответствия услуг с
      правилами вашей соответствующей юрисдикции.
                                    </p>
                                </div>
                                <hr />
                                <div class="payment-logos">
                                    <h4 class="payment-title">ПОДДЕРЖИВАЕМЫЕ МЕТОДЫ ОПЛАТЫ
                                    </h4>
                                    <img src="/src/apps/client/ui/pages/LandingPage/images/icons/payment/bitcoin.png" alt="bitcoin" />
                                    <img src="/src/apps/client/ui/pages/LandingPage/images/icons/payment/mastercard.png" alt="mastercard" />
                                    <img src="/src/apps/client/ui/pages/LandingPage/images/icons/payment/visa.png" alt="visa" />
                                    <img src="/src/apps/client/ui/pages/LandingPage/images/icons/payment/wire.png" alt="wire" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <p className="text-center">
    Copyright © 2022 PPFTrade. All rights reserved.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>);
    }
}

export default Footer;
