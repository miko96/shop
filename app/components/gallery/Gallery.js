import React, { Component } from 'react'
import './Gallery.css'

export default class Gallery extends Component {
	render() {
		const { children } = this.props;
		return (
			<section className="gallery_container">
				{children}
			</section>
		)
	}
}