//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import HeaderActions from './Actions';
import styles from './styles.css';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

type State = {
  user: ?Object,
  showActions: boolean,
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
      showActions: false,
    };
  }

  toggleActions() {
    const { showActions } = this.state;

    this.setState({
      showActions: !showActions,
    });
  }

  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    const { user, showActions } = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.left}>
          <Link to='/'>
            <h1>Drop Party</h1>
          </Link>
          <hr />
        </div>
        {user ? (
          <div className={styles.right}>
            <div className={styles.row}>
              <div className={styles.info}>
                <div className={styles.name}>{user.first_name} {user.name}</div>
                <div className={styles.email}>{user.email}</div>
              </div>
              <button className={styles.buttonMore} onClick={() => this.toggleActions()}>
                <i className="material-icons">more_horiz</i>
              </button>
            </div>
            <div className={styles.row}>
              <HeaderActions show={showActions} />
            </div>
          </div>
        ) : null}
      </header>
    );
  }
}

export default Header;
