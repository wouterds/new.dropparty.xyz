//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import Base from 'components/Pages/Base';

class Download extends Component<{}>
{
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    return (
      <div className={styles.download}>
        <p>
          Download page
        </p>
      </div>
    );
  }
}

export default Base(Download);
