//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styles from './styles.css';
import Cookies from 'js-cookie';

type State = {
  acknowledgedCookies: boolean,
};

class CookieBanner extends Component<{}, State>
{
  constructor() {
    super(...arguments);

    const acknowledgedCookies = Cookies.get('acknowledged-cookies') === 'true';

    this.state = {
      acknowledgedCookies,
    };
  }

  onClick() {
    Cookies.set('acknowledged-cookies', true, { expires: 30 });

    this.setState({
      acknowledgedCookies: true,
    });
  }

  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    const { acknowledgedCookies } = this.state;

    if (acknowledgedCookies === true) {
      return null;
    }

    return (
      <div className={styles.cookieBanner}>
        <p>Yes, we use cookies. If you don't like it, change website, we won't miss you!</p>
        <button onClick={() => this.onClick()}>I understand</button>
      </div>
    );
  }
}

export default CookieBanner;
