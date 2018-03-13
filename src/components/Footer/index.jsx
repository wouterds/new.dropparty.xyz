//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styles from './styles.css';

type Props = {};

class Footer extends Component<{}>
{
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    return (
      <footer className={styles.footer}>
        <div className={styles.left}>
          &copy; {new Date().getFullYear()} <a href="https://dropparty.xyz/">dropparty.xyz</a>
        </div>
        <div className={styles.right}>
          Can you code, like to contribute? Check out the <a href="https://github.com/wouterds/dropparty.xyz/">website</a> &amp; <a href="https://github.com/wouterds/api.dropparty.xyz/">API</a> on Github!
        </div>
      </footer>
    );
  }
}

export default Footer;
