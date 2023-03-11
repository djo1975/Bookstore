import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import userIcon from '../images/usericon.png';
import styles from '../Style/Navbar.module.css';
import navbarstyles from '../Style/Books.module.css';

const Navbar = ({
  path,
}) => (
  <>
    <nav className={styles.panelbg}>
      <div className={styles.BookstoreCMS}>
        Bookstore CMS
      </div>
      <div>
        <Link className={navbarstyles.BOOKS} to="/Books">
          <div style={{ color: `${path ? 'black' : 'rgb(165, 162, 162)'}` }}>
            BOOKS
          </div>
        </Link>
      </div>
      <div>
        <Link className={navbarstyles.BOOKS} to="/Categories">
          <div style={{ color: `${path ? 'rgb(165, 162, 162)' : 'black'}` }}>
            CATEGORIES
          </div>
        </Link>
      </div>
      <div>
        <img alt="userIcon" src={userIcon} className={styles.icon} />
      </div>
    </nav>
    <Outlet />
  </>
);

Navbar.propTypes = {
  path: PropTypes.bool.isRequired,
};

export default Navbar;
