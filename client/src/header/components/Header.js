import React, { Component } from 'react'
import { Link } from 'react-router'

import './Header.css'
import androidLogo from './images/android-logo.png'
import SigninSignoutLink from '../../users/components/SigninSignoutLink'

class Header extends Component {
  render() {
    return (
      <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
          <span className="android-title mdl-layout-title">
            <Link to="/"><img className="android-logo-image" src={androidLogo} alt="logo" /></Link>
          </span>
          <div className="android-header-spacer mdl-layout-spacer"></div>
          <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search-field" />
            </div>
          </div>
          <div className="android-navigation-container">
            <nav className="android-navigation mdl-navigation">
              <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/todos">Todos</Link>
              <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/products">Products</Link>
              <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/admin/products">Products Admin</Link>
              <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/cart">Cart</Link>
              <Link className="mdl-navigation__link mdl-typography--text-uppercase" to="/checkout">Checkout</Link>
              <SigninSignoutLink />
            </nav>
          </div>
          <span className="android-mobile-title mdl-layout-title">
            <img className="android-logo-image" src={androidLogo} alt="Smiley face"/>
          </span>
          <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
            <i className="material-icons">more_vert</i>
          </button>
          <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="more-button">
            <li className="mdl-menu__item">5.0 Lollipop</li>
            <li className="mdl-menu__item">4.4 KitKat</li>
            <li disabled className="mdl-menu__item">4.3 Jelly Bean</li>
            <li className="mdl-menu__item">Android History</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
