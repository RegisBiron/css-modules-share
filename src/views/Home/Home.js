import React, { Component } from 'react';

// These styles use CSS Custom Properties
// located in the properties folder
import styles from './home.css';

class Home extends Component {

	render() {
		return (
			<div className={styles.content}>
				<h1>Hello World</h1>
			</div>
		);
	}
}

export default Home;