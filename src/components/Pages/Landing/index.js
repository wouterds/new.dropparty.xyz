//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import Footer from 'components/Footer';

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
        <main className={styles.content}>
          <div>
            Hello World
            <br />
            <br />
            <Link to='/authenticate'>Authenticate</Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Landing;
