import React, { Component } from 'react';
import MenuItem from './MenuItem';


const menuItems = [
    {
        key: '1',
        label: 'Home',
        link: '/Home'
    },
    {
        key: '2',
        label: 'About',
        link: '/About'
    },
]

function MenuItemsList() {
    return menuItems.map((item, index) => <MenuItem key={index} item={item} />);
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="top-menu">
                <ul className="top-menu-list">
                    {MenuItemsList()}
                </ul>
            </div>
        );
    }
}

export default MenuItemsList;