//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styles from './styles.css';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

type State = {
  user: ?Object,
};

class Header extends Component<{}, State>
{
  constructor() {
    super(...arguments);

    let user = null;
    if (Cookies.get('token')) {
      const decodedToken = jwtDecode(Cookies.get('token'));

      user = {
        first_name: decodedToken.first_name,
        name: decodedToken.name,
        email: decodedToken.email,
      };
    }

    this.state = {
      user,
    };
  }
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    const { user } = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.left}>
          <h1>Drop Party</h1>
          <hr />
        </div>
        {user ? (
          <div className={styles.right}>
            <div className={styles.name}>{user.first_name} {user.name}</div>
            <div className={styles.email}>{user.email}</div>
          </div>
        ) : null}
      </header>
    );
  }
}

export default Header;
