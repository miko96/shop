import React from 'react'
import './Header.css'
import NavMenu from '../menu/NavMenu'

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<header className="header">
				<div className="header_stub">
				</div>
				<div className="header_content">
					<NavMenu />
				</div>
			</header>
		);
	}
};