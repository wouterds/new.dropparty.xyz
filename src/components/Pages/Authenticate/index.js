//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styles from './styles.css';
import Footer from 'components/Footer';
import Base from 'components/Pages/Base';

class Authenticate extends Component<{}>
{
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    return (
      <div className={styles.authenticate}>
          Signing you in..
      </div>
    );
  }
}

export default Base(Authenticate);
