import React, { Component } from 'react'
import Header from '../header/Header'
import MainContent from '../main/MainContent'

export default class App extends Component {
	render() {
		return (
			<section className="app_root">
				<Header />
				<MainContent />
			</section>
		);
	}
}
