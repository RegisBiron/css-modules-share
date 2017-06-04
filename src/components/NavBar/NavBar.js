import React from 'react';
import { NavLink } from 'react-router-dom';

// These styles use CSS Custom Properties
// located in the properties folder
import styles from './navbar.css';

function NavBar({ props }) {
	return (
		<ul className={styles.list}>
			<li className={styles.listItem}>
				<NavLink className={styles.link} exact activeClassName={styles.active} to="/">Home</NavLink>
			</li>
			<li className={styles.listItem}>
				<NavLink className={styles.link} activeClassName={styles.active} to="/about">About</NavLink>
			</li>
		</ul>
	);
}

export default NavBar;
