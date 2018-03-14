//@flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

type Props = {
  show: boolean,
};

class Header extends Component<Props>
{
  /**
   * Render the component
   *
   * @returns {Node}
   */
  render(): Node {
    const { show } = this.props;

    if (show !== true) {
      return null;
    }

    return (
      <ul className={styles.actions}>
        <li><Link to='/files'>My Files</Link></li>
        <li><Link to='/stats'>Stats</Link></li>
        <li><Link to='/referrals'>Referrals</Link></li>
        <li><Link to='/settings'>Settings</Link></li>
        <li><Link to='/sign-out'>Sign Out</Link></li>
      </ul>
    );
  }
}

export default Header;
