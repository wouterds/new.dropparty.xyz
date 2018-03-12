//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styles from './styles.css';
import Footer from 'components/Footer';
import Base from 'components/Pages/Base';
import { getUrlParam } from 'helpers/url';
import jwtDecode from 'jwt-decode';

class Authenticate extends Component<{}>
{
  /**
   * When the component mounted
   */
  componentDidMount() {
    const token = getUrlParam('token');

    // Empty token?
    if (!token) {
      window.location = 'http://localhost/authenticate';
      return;
    }

    const decodedToken = jwtDecode(token);

    console.log(decodedToken);
  }

  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    return (
      <div className={styles.authenticate}>
        <p>Signing you in..</p>
      </div>
    );
  }
}

export default Base(Authenticate);
