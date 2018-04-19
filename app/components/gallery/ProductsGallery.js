import React, { Component } from 'react'
import Gallery from './Gallery'
import GalleryItem from './GalleryItem'

export default class ProductsGallery extends Component {
	render() {
		return (
			<Gallery>
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
			</Gallery>
		)
	}
}
