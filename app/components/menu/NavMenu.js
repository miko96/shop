import React, { Component } from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'

export default class NavMenu extends Component {
	render() {
		return (
			<Menu>
				<MenuItem name='first' />
				<MenuItem name='second' />
				<MenuItem name='third' />
			</Menu>
		)
	}
}