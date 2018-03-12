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

      </div>
    );
  }
}

export default Base(Landing);
