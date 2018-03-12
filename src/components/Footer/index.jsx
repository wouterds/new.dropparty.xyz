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
        &copy; {new Date().getFullYear()} <a href="https://dropparty.xyz/">dropparty.xyz</a>
      </footer>
    );
  }
}

export default Footer;
