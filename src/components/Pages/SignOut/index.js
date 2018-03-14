//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styles from './styles.css';
import Base from 'components/Pages/Base';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

type Props = {
  history: Object,
};

class SignOut extends Component<Props>
{
  /**
   * When the component mounted
   */
  componentDidMount() {
    Cookies.remove('token');

    this.props.history.push('/');
  }

  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    return (
      <div className={styles.signOut}>
        <p>Signing you out..</p>
      </div>
    );
  }
}

export default withRouter(Base(SignOut));
