//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import Footer from 'components/Footer';
import Base from 'components/Pages/Base';
import { getUrlParam } from 'helpers/url';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

type Props = {
  history: Object,
};

type State = {
  token: ?string,
};

class Authenticate extends Component<Props, State>
{
  constructor() {
    super(...arguments);

    this.state = {
      token: null,
    };
  }
  /**
   * When the component mounted
   */
  componentDidMount() {
    const token = getUrlParam('token');

    let show = !!getUrlParam('show');

    if (!show) {
      show = Cookies.get('show');
    }

    Cookies.set('show', show);

    // Empty token?
    if (!token) {
      window.location = 'https://staging-api.dropparty.xyz/authenticate';
      return;
    }

    Cookies.set('token', token, { expires: 30 });

    if (show) {
      this.setState({ token });
      Cookies.remove('show');
      return;
    }

    this.props.history.push('/');
  }

  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    const { token } = this.state;

    return (
      <div className={styles.authenticate}>
        {token ? (
          <div>
            <h2>Sign in</h2>
            <p>Copy your sign in key below and paste it in the app to sign in.</p>

            <br />
            <textarea readonly rows='8'>{token}</textarea>

            <br />

            <Link to='/' className={styles.button}>Back</Link>
          </div>
        ) : (
          <div>
            <h2>Sign in</h2>
            <p>Redirecting you to Dropbox..</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Base(Authenticate));
