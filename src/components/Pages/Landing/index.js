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
        <h2>What is Drop Party?</h2>
        <p>
          Drop Party is an <mark>extension to Dropbox to easily share files</mark>. While Dropbox has this functionality built in, I don't really like how it behaves. The preview is slow and often does not embed well in social media, chat apps and more. This is exactly what Drop Party solves.
          <br />
          <br />
          And besides that it also comes <mark>with some extra functionality</mark> to view your shared files, stats on them like amount of views, downloads, short links, direct links, download links etc..
        </p>

        {!dropbox_account_id ? (
          <div className={styles.spacer}>
            <h2>Sign in</h2>
            <p>
              There's no sign up, you can use your existing Dropbox account to sign in.
              <br />
              <br />
              <Link to='/authenticate' className={styles.button}>Sign in with Dropbox</Link>
            </p>
          </div>
        ) : (
          <div className={styles.spacer}>
            <h2>Download</h2>
            <p>
              Still work in progress, but already a first downloadable alpha version for macOS.
              <br />
              <br />
              <Link to='/download' className={styles.button}>Download</Link>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Base(Landing);
