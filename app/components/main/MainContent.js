import React, { Component } from 'react'
import ProductsGallery from '../gallery/ProductsGallery'
import './MainContent.css'

export default class MainContent extends Component {
	render() {
		return (
			<main className="main_content">
				<div className="filter_stub">
					<img max-width='2000px' src="http://via.placeholder.com/350x2000" />
				</div>

				<ProductsGallery />
			</main>
		)
	}
}
