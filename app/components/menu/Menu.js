import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Menu.css'

export default class Menu extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { children } = this.props
		return (
			<div className="nav_menu_wrap">
				<div className="nav_menu">
					{children}
				</div>
			</div>
		)
	}
}

Menu.propTypes = {
	children: PropTypes.node
}



// const menuItems = [
//   {
//     key: '1',
//     label: 'Home',
//     link: '/Home'
//   },
//   {
//     key: '2',
//     label: 'About',
//     link: '/About'
//   },
// ]

// function MenuItemsList() {
//   return menuItems.map((item, index) => <MenuItem key={index} item={item} />);
// }