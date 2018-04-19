import React from 'react';
import PropTypes from 'prop-types'
import './MenuItem.css'

const MenuItem = ({ name }) => (
	<a className='nav_menu_item'>{name}</a>
)

MenuItem.propTypes = {
	name: PropTypes.string.isRequired
}

export default MenuItem;
