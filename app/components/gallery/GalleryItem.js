import React, { Component } from 'react'
import './GalleryItem.css'

export default class GalleryItem extends Component {
	render() {
		const { children } = this.props;
		return (
			<section className="gallery_item_container">
				<div className="gallery_item">
					{children}
				</div>
			</section>
		)
	}
}