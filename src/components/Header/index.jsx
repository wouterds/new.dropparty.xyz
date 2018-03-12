//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styles from './styles.css';

class Header extends Component<{}>
{
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    return (
      <header className={styles.header}>
        <h1>Drop Party</h1>
        <hr />
      </header>
    );
  }
}

export default Header;
