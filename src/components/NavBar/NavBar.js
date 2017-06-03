import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.css';

function NavBar({ props }) {
	return (
		<ul className={styles.list}>
			<li className={styles.listItem}>
				<Link to="/">Home</Link>
			</li>
			<li className={styles.listItem}>
				<Link to="/about">About</Link>
			</li>
		</ul>
	);
}

export default NavBar;
