//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import Base from 'components/Pages/Base';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

class Landing extends Component<{}>
{
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    let dropbox_account_id = null;

    if (Cookies.get('token')) {
      const decodedToken = jwtDecode(Cookies.get('token'));
      dropbox_account_id = decodedToken.dropbox_account_id;
    }


    return (
      <div className={styles.landing}>
        <p>
          Drop Party makes it easy to quickly share any file with anyone.
          It can auto-upload screenshots, has support for short urls and full social media embedding support.
        </p>

        {!dropbox_account_id ? (
          <p>
            There's no sign up, you can use your existing Dropbox account to use this service.
            <br />
            <br />
            <Link to='/authenticate' className={styles.button}>Sign in with Dropbox</Link>
          </p>
        ) : (
          <p>
            Still work in progress, but already a first downloadable alpha version for macOS.
            <br />
            <br />
            <Link to='/download' className={styles.button}>Download</Link>
          </p>
        )}
      </div>
    );
  }
}

export default Base(Landing);
