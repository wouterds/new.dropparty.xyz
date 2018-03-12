import React, { Component } from 'react';
import type { Element } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Base = (WrappedComponent) => {
  class Base extends Component {
    render() {
      return (
        <div className={styles.base}>
          <div className={styles.header}>
            <Header />
          </div>

          <main className={styles.content}>
            <WrappedComponent {...this.props} />
          </main>

          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      );
    }
  }

  return Base;
};

export default Base;
