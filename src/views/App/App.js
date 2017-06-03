import React, { Component } from 'react';
import { Link } from 'react-router';

import NavBar from '../../components/NavBar/NavBar';

import styles from './app.css';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.wrapper}>
			<NavBar />
				{this.props.children}
			</div>
		);
	}
}