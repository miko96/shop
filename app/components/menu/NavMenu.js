import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';

const NavMenu = () => (
  <Menu>
    <MenuItem name="Home" link="/home" />
    <MenuItem name="Shop" link="/shop" />
    <MenuItem name="About" link="/about" />
    <MenuItem name="Cart" link="/cart" />
  </Menu>
);

export default NavMenu;
