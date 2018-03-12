//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import Base from 'components/Pages/Base';

class Landing extends Component<{}>
{
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    return (
      <div className={styles.landing}>
        <p>
          Drop Party makes it easy to quickly share any file with anyone.
          It can auto-upload screenshots, has support for short urls and full social media embedding support.
        </p>

        <p>There's no sign up, you can use your existing Dropbox account to use this service.</p>

        <p>
          <Link to='/authenticate' className={styles.button}>Sign in with Dropbox</Link>
        </p>
      </div>
    );
  }
}

export default Base(Landing);
