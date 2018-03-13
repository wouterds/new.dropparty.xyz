//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styles from './styles.css';
import Footer from 'components/Footer';
import Base from 'components/Pages/Base';
import { getUrlParam } from 'helpers/url';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

type Props = {
  history: Object,
};

class Authenticate extends Component<Props>
{
  /**
   * When the component mounted
   */
  componentDidMount() {
    const token = getUrlParam('token');

    // Empty token?
    if (!token) {
      window.location = 'https://staging-api.dropparty.xyz/authenticate';
      return;
    }

    Cookies.set('token', token, { expires: 30 });

    this.props.history.push('/');
  }

  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    return (
      <div className={styles.authenticate}>
        <p>Signing you in..</p>
      </div>
    );
  }
}

export default withRouter(Base(Authenticate));
